const express = require('express');
const router = express.Router();
const axios = require('axios');
const User = require('../Model/ChatDataModel');

router.post('/apiHandler', async (req, res) => {
    var que = req.body.que;
    que += " in 200 words maximum";

    try {
        const response_API = await axios.post('https://gemini-api-87l2.onrender.com/api/testapi', { que });
        const cleanedText = response_API.data.replace(/\*/g, '').replace(/[\r\n]+/g, ' ');

        if (!cleanedText || !que) {
            res.status(400).json({ success: false, message: "Error" });
            return;
        }

        await User.create({
            question: que,
            answer: cleanedText
        });

        res.status(200).json({ success: true, message: "Successfully added que and response" });

    } catch (error) {
        console.error("Error generating AI content:", error);
        res.status(500).json({ success: false, message: "An error occurred." });
    }
});

module.exports = router;
