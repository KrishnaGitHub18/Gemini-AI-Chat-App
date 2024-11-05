const express = require('express');
const router = express.Router();
const User = require('../Model/ChatDataModel');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();  

router.post('/apiHandler', async (req, res) => {
    var {que, username} = req.body;
    que += " in 200 words maximum";
    console.log(que);
    // return;

    try {

        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });      
        const result = await model.generateContent(que);
        const response_API = result.response.text();


        console.log(result.response.text());
        const cleanedText = response_API.replace(/\*/g, '').replace(/[\r\n]+/g, ' ');

        if (!cleanedText || !que) {
            res.status(400).json({ success: false, message: "Error" });
            return;
        }

        await User.create({
            question: que.slice(0,-21),
            answer: cleanedText,
            username: username
        });

        res.status(200).json({ success: true, message: "Successfully added que and response" });

    } catch (error) {
        console.error("Error generating AI content:", error);
        res.status(500).json({ success: false, message: "An error occurred." });
    }
});

module.exports = router;
