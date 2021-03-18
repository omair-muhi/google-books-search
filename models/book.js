const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
    _id: String,
    title: String,
    authors: String,
    description: String,
    image: String,
    link: String
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;