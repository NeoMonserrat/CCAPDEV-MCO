const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({});
        res.render('Forums', { posts }); 
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;