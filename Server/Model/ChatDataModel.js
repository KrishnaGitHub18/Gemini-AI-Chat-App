const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    question: {type: String, required: true},
    answer: {type: String, required: true},
    username: {type: String, required: true}

})

module.exports = mongoose.model('Users', userSchema)