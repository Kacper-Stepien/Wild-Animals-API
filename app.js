const express = require("express");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

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

module.exports = app;
