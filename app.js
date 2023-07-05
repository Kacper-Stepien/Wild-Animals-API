const express = require("express");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

const animalRouter = require("./routes/animalRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(mongoSanitize());
app.use(xss());

// Serve static files
app.use(express.static(`${__dirname}/public`));

// Routes
app.use("/api/v1/animals", animalRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Nie znaleziono ${req.originalUrl} na tym serwerze!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
