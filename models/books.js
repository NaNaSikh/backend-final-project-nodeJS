const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publishedDate: { type: Date },
    rating: { type: Number }
}, {
    collection: 'Books',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

const BookModel = mongoose.model('Book', bookSchema);
module.exports = BookModel;