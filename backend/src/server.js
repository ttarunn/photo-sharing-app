const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Post = require('./PostSchema');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 8080

dotenv.config();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false}))


mongoose.connect(process.env.MONGO_DB_URL);

app.post('/createPost', (req, res) => {
    const data = req.body
    const postData = new Post({
        img: data.img,
        author: data.author,
        location: data.location,
        description: data.description,
        date:data.date
    });
    postData.save().then(response => {
        
        res.status(201).json({
            message: "Success",
            data: response
        })
    }).catch(err => {
        
        res.status(500).json({
            message:"Failed to Create",
            err: err
        })
    })
});

app.get('/getPosts', (req, res)=> {

    Post.find().then(response => {
        res.status(201).json({
            status: "success",
            result: response
        })
    }).catch(err => {
        res.json(400).json({
            status: "Failed",
        })
    })
});

app.put('/likesinc/:id', (req, res) => {
    
    const id = req.params.id
    Post.findOneAndUpdate({
        _id : id
    },{ $inc: { likes: 1 }}).then(result => {
        res.status(201).json({
            message: "Update Success",
            data: result
        })
        }).catch(err => {
            res.status(400).json({
                status: "Failed",
            })
    })
});

app.put('/likesdec/:id', (req, res) => {
    
    const id = req.params.id
    Post.findOneAndUpdate({
        _id : id
    },{ $inc: { likes: -1 }}).then(result => {
        res.status(201).json({
            message: "Update Success",
            data: result
        })
        }).catch(err => {
            res.status(400).json({
                status: "Failed",
            })
    })
});

app.use('/',(req,res) => {
    res.send('Hello')
})

app.listen(PORT)