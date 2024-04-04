const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
    res.render('Admin/Admin')
});

router.get('/UpdateForums', async (req, res) => {
    try {
        const posts = await Post.find({});
        res.render('Admin/UpdateForums')
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/UpdateForums/delete/:id', async (req, res) => {
    const postId = req.params.id; 
    console.log(postId)
    const post = await Post.findByIdAndDelete(postId);
    console.log('Successfully Deleted')
    res.send(post);
});

module.exports = router;