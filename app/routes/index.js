const express = require("express");

const authorsRouter = require("./authors.router");
const booksRouter = require("./books.router");
//const usersRouter = require("./users.router");

function routerApi(app) {
  //se crea una ruta maestra para hacer más sencillo el control de versiones.
  const router = express.Router();
  app.use("/", router); //esto genera un endpoint igual para todos los enlaces inferiores.

  router.use("/authors", authorsRouter);
  router.use("/books", booksRouter);
  //router.use("/users", usersRouter);
}

module.exports = routerApi;
