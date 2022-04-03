const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    img: { type: String, trim: true },
    year: { type: String, required: true, trim: true },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: "books" }],
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("authors", authorSchema);

module.exports = Author;
