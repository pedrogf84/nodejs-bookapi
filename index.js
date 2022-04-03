const express = require("express");
const cors = require("cors");
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./utils/errors/error.handler");
const routerApi = require("./app/routes");
const { connect } = require("./utils/connection/connection");
const bodyParser = require("body-parser");

connect();

const app = express();
const PORT = process.env.PORT || 3000;
// Transformación de datos
app.use(bodyParser.json());
// No codifica caracteres reservador que tienene un significado especial en la URI.
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(cors());

/* const AuthorRoutes = require("./app/routes/authors.router");

app.use("/authors", AuthorRoutes); */

app.get("/", (req, res) => {
  res.send("Api de Pedro");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("app started at port: " + PORT);
});

// Escuchadores d enuestro server
/* const server = app.listen(PORT, () => {
  // Capturador de Error
  app.use((req, res, next) => {
    console.log(`Server listening on port: ${PORT}`);
  });
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});
// Errores del server 500
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
}); */
