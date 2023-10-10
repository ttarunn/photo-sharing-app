const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    img:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String, 
        required: true
    },
    likes:{
        type: Number,
        required: false,
        default: 0
    }
});

const Post = mongoose.model('Insta', Schema);

module.exports = Post;