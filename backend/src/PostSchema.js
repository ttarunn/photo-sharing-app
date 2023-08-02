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
    }
});

const Post = mongoose.model('Insta', Schema);

module.exports = Post;