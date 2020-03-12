const mongoose = require('mongoose');
const Post = require('./Post')

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [Post.schema],
})

// Schema --> Model
const User = mongoose.model('User', userSchema);

// Exporting 
module.exports = User;