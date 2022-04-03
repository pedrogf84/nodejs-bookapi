const express = require("express");
const BookRoutes = require("express").Router();

const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
} = require("../controllers/books.controller");

BookRoutes.get("/", getAll);
BookRoutes.get("/:_id", getOne);
BookRoutes.post("/", postOne);
BookRoutes.delete("/:_id", deleteOne);
BookRoutes.patch("/:_id", patchOne);

module.exports = BookRoutes;
