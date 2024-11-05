const express = require('express');
const router = express.Router();
const UserDetails = require('../Model/UserDetailsModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = "A7d9Zf3K6mH2Xw5qB1nG4tJ8LzQ9pR0cVx3Y6uW2lM5oT8jN7vD1hP0rK9bS4wF6";

router.post('/login', async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, error: 'Both email and password are required' });
    }

    try {
        const user = await UserDetails.findOne({ email });
        if (!user) {
            return res.json({ success: false, error: 'Invalid email or password' });
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
          return res.json({ success: false, error: 'Invalid email or password' });
        }

        const name = user.name;
        const authToken = jwt.sign(
            { name }, 
            jwtSecret, 
            { expiresIn: '3d' }
        );
        res.status(200).json({ success: true, message: 'Login successful', authToken, name });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: 'Server error' });
    }

});

module.exports = router;
