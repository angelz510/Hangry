const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    rating: String,
    comment: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;