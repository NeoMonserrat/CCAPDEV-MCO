const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/:id', async (req, res) => {
        const postId = req.params.id; 
        const post = await Post.findById(postId); 
        console.log(post)
        res.render('Post', { post });
});


module.exports = router;
