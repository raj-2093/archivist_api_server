const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
    BookName:{
        type: String,
        required: true
    },
    BookId: {
        type: Number,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('book',BookSchema)