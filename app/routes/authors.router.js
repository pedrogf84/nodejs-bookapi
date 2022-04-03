const express = require("express");
const AuthorRoutes = require("express").Router();

const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
} = require("../controllers/authors.controller");

AuthorRoutes.get("/", getAll);
AuthorRoutes.get("/:_id", getOne);
AuthorRoutes.post("/", postOne);
AuthorRoutes.delete("/:_id", deleteOne);
AuthorRoutes.patch("/:_id", patchOne);

module.exports = AuthorRoutes;
