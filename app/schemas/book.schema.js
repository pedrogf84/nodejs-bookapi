const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    year: { type: Number, required: false, trim: true },
    genre: { type: String, required: true, trim: true },
    img: { type: String, trim: true, required: false },
  },
  { timestamps: true }
);

const Book = mongoose.model("books", authorSchema);
module.exports = Book;
