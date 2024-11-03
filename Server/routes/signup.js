const express = require('express');
const router = express.Router();
const UserDetails = require('../Model/UserDetailsModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = "A7d9Zf3K6mH2Xw5qB1nG4tJ8LzQ9pR0cVx3Y6uW2lM5oT8jN7vD1hP0rK9bS4wF6";

router.post('/signup', async (req, res) => {

    const { name, email, password } = req.body;
    // console.log(name, email, password);
    // return;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    try {

        const existingUser = await UserDetails.findOne({ email });
        if (existingUser) {
            return res.json({ error: 'Email is already registered' });
        }

        const salt = await bcryptjs.genSalt(10);
        let hashedPassword = await bcryptjs.hash(req.body.password, salt);
        const newUser = new UserDetails({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        const authToken = jwt.sign(
            { name }, 
            jwtSecret, 
            { expiresIn: '3d' }
        );

        res.status(200).json({ success: true, message: 'User registered successfully', authToken });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: 'Server error' });
    }

});

module.exports = router;
