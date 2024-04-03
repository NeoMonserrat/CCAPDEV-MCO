const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
    try {
        // Fetch all posts from the database
        const posts = await Post.find({});
        res.render('Forums', { posts }); // Pass the posts to the EJS template
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/Post', async (req, res) => {
    try {
        const postId = req.query.postId; // Get postId from the query parameters
        const post = await Post.findById(postId); // Find the post by ID in the database
        if (!post) {
            return res.status(404).send('Post not found'); // Handle case where post is not found
        }
        res.render('Post', { post }); // Render the Post.html file with the specific post data
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error'); // Handle any errors
    }
});


module.exports = router;