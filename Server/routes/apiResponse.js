const express = require('express');
const router = express.Router();
const axios = require('axios');
const User = require('../Model/ChatDataModel');

router.post('/apiHandler', async (req, res) => {
    const que = req.body.que;

    try {
        const response_API = await axios.post('https://gemini-api-87l2.onrender.com/api/testapi', { que });

        if (!response_API || !response_API.data || !que) {
            res.status(400).json({ success: false, message: "Error" });
            return;
        }

        await User.create({
            question: que,
            answer: response_API.data
        });

        res.status(200).json({ success: true, message: "Successfully added que and response" });

    } catch (error) {
        console.error("Error generating AI content:", error);
        res.status(500).json({ success: false, message: "An error occurred." });
    }
});

module.exports = router;
