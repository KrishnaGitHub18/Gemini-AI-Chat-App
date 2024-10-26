const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://ChatBotUser:CQgC7jjnoR0cK36V@cluster0.4iwag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = mongoDB;