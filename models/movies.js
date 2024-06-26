const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    director: { type: String },
    releaseDate: { type: Date },
    rating: { type: Number }
}, {
    collection: 'Movies',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

const MovieModel = mongoose.model('Movie', movieSchema);
module.exports = MovieModel;