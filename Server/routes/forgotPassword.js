const express = require('express');
const router = express.Router();
const UserDetails = require('../Model/UserDetailsModel');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const jwtSecret = "A7d9Zf3K6mH2Xw5qB1nG4tJ8LzQ9pR0cVx3Y6uW2lM5oT8jN7vD1hP0rK9bS4wF6";

var otp_sent;
var name;
var authToken;

router.post('/forgotPassword', async (req, res) => {

    const { email, otp } = req.body;
    console.log(email, otp);

    if (!email && !otp) {
        return res.status(400).json({ success: false, error: 'Fill the required details' });
    }


    if (email) {
        const user = await UserDetails.findOne({ email });
        if (!user) {
            return res.json({ success: false, error: 'Email is not registered' });
        }

        name = user.name;
        authToken = jwt.sign(
            { name },
            jwtSecret,
            { expiresIn: '3d' }
        );
        // res.status(200).json({ success: true, message: 'Login successful', authToken, name });

        otp_sent = Math.floor(100000 + Math.random() * 900000);
        console.log(otp_sent);

        // MAIL 
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'donotreply12343@gmail.com',
                    pass: 'jkdvfhatpycrsfja'
                }
            });
            const info = await transporter.sendMail({
                from: '"Team Google" <donotreply12343@gmail.com>',
                to: email,
                subject: "One Time Password for GeminiAI",
                html: `
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>OTP Verification</title>
                    </head>
                    <body>
                        <p>Dear user,</p>

                        <p>Your OTP for verification is: <strong> ${otp_sent} </strong></p>

                        <p>Please enter this code in the application to proceed. This code is valid for 2 minutes, so make sure to use it promptly.</p>

                        <p>If you did not request this code, please ignore this message.</p>

                        <p>Best regards,<br>
                        The Support Team<br>
                        </p>
                    </body>
                    </html>
                    `,
            });

            res.status(200).send({ message: "OTP sent to registered mail id", success: true });

            setTimeout(
                () => {
                    otp_sent = null;
                    name = null;
                    authToken = null;
                }, 2 * 60 * 1000
            )
            console.log(otp_sent);

        }
        catch {
            return res.json({ success: false, error: 'Failed to send OTP' });
        }

    }
    else {

        try {
            console.log(otp, otp_sent);
            if (!otp_sent || otp != otp_sent) {
                return res.json({ success: false, error: 'OTP is not valid' });
            }

            res.json({ success: true, message: 'OTP is valid', name, authToken });
            otp_sent = null;
            name = null;
            authToken = null;
            return;
        } catch (error) {
            return res.json({ success: false, error: 'OTP verifcation failed' });
        }

    }


});

module.exports = router;
