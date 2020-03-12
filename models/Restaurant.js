const mongoose = require('mongoose');


const restaurantSchema = new mongoose.Schema({
    name: String,
    location: String,
    hours: String,
    type: String,
    posts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
})

// Schema --> Model
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Exporting 
module.exports = Restaurant;