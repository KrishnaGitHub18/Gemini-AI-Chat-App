const express = require('express');
const router = express.Router();
const User = require('../Model/ChatDataModel');

router.post('/printData', async (req, res) => {

    const username = req.body.username;
    
    try {
        const data = await User.find({ username: username });
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error("Error fetching data from MongoDB:", error);
        res.status(500).json({ success: false, message: "An error occurred while fetching data." });
    }

})

module.exports = router;
