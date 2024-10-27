const express = require('express');
const router = express.Router();
const axios = require('axios');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();  

router.post('/apiHandler', async (req, res) => {

    const que = req.body.que;

    try {

        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });       
        const result = await model.generateContent(que);
        console.log(result.response.text());
        res.status(200).send(result.response.text());

    } catch (error) {
        console.error("Error generating AI content:", error);
        res.status(500).send("An error occurred.");
    }
});

module.exports = router;



// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const express = require('express');
// const router = express.Router();
// require('dotenv').config();  

// router.post('/testapi', async (req, res) => {

//     const que = req.body;

//     try {
//         // Make sure to include these imports:
//         // const genAI = new GoogleGenerativeAI(process.env.API_KEY);
//         // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
//         // const prompt = que;
        
//         // const result = await model.generateContent(prompt);
//         // console.log(result.response.text());
//         // res.status(200).send(result.response.text());

//         console.log(que);

//     } catch (error) {
//         console.error("Error generating AI content:", error);
//         res.status(500).send("An error occurred.");
//     }
// });

// module.exports = router;