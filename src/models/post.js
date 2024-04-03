const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    post_title: {
        type: String,
        required: true
    },
    post_category: {
        type: String,
        required: true
    },
    post_content: {
        type: String,
        required: true
    },
    post_text: {
        type: String,
        required: true
    },
    post_date: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
