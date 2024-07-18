const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");

app.use(helmet());
app.use(morgan("combined"));
app.use(compression());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// router

app.use(require("./api/v1/routes/index.route"));

// error handler middleware called

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// error handler middleware

app.use((req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    },
  });
});

module.exports = app;
