const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.post('/', async (req, res) => {
    const newPost = new Post({
        post_title: req.body.post_title,
        post_category: req.body.post_category,
        post_content: req.body.post_content,
        post_text: req.body.post_text,
        post_date: req.body.post_date
    });

    try {
        await newPost.save();
        res.redirect('/Forums'); 
    } catch (err) {
        console.error(err); 
        res.status(500).send('Internal Server Error'); 
    }
});

module.exports = router;