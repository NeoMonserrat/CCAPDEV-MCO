const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TvShowSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    cast: {
        type: [String],
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    posterUrl: {
        type: String,
        required: true
    },
    reviews: [
        {
            title: String,
            reviewText: String
        }
    ]

}, { timestamps : true });

const TvShow = mongoose.model('TvShow', TvShowSchema);
module.exports = TvShow;
