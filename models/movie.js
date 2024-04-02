const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    director: {
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

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
