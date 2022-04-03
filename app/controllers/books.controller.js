const boom = require("@hapi/boom");
const Book = require("../schemas/author.schema");

const getAll = async (req, res, next) => {
  console.log("books.controller - getALL");
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    return next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const bookl = await Book.findById(_id);
    res.status(200).json(book);
  } catch (error) {
    return next(error);
  }
};

const postOne = async (req, res, next) => {
  try {
    const book = new Book();
    book.title = req.body.title;
    book.year = req.body.year;
    book.genre = req.body.genre;
    if (req.file) book.img = req.file.path;
    const bookDB = await book.save();
    return res.status(201).json(bookDB);
  } catch (error) {
    return next(error);
  }
};

const patchOne = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const book = new Book(req.body);
    const updateBook = await Book.findByIdAndUpdate(_id, book);
    return res.status(200).json(updateBook);
  } catch (error) {
    return next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const book = await Book.findByIdAndDelete(_id);
    return res.status(200).json(book);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getAll, getOne, postOne, patchOne, deleteOne };
