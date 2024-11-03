const mongoose = require('mongoose');
const { Schema } = mongoose;

const userDetailsSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});


module.exports = mongoose.model('UserDetails', userDetailsSchema);
