const boom = require("@hapi/boom");
const Author = require("../schemas/author.schema");

const getAll = async (req, res, next) => {
  console.log("authors.controller - getALL");
  try {
    const authors = await Author.find().populate("books");
    res.status(200).json(authors);
  } catch (error) {
    return next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const { _id } = req.params;

    const author = await Author.findById(_id);
    res.status(200).json(author);
  } catch (error) {
    return next(error);
  }
};

const postOne = async (req, res, next) => {
  try {
    const author = new Author();
    author.name = req.body.name;
    author.year = req.body.year;
    author.books = req.body.books;
    if (req.file) author.img = req.file.path;
    const authorDB = await author.save();
    return res.status(201).json(authorDB);
  } catch (error) {
    return next(error);
  }
};

const patchOne = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const author = new Author(req.body);
    const updateAuthor = await Author.findByIdAndUpdate(_id, author);
    return res.status(200).json(updateAuthor);
  } catch (error) {
    return next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const author = await Author.findByIdAndDelete(_id);
    return res.status(200).json(author);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getAll, getOne, postOne, patchOne, deleteOne };
