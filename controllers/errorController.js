const AppError = require("../utils/appError");
const mongoose = require("mongoose");

const checkDBConnection = async (err) => {
  const isConnected = mongoose.connection.readyState;
  if (isConnected === 0) {
    err.message = "Błąd połączenia z bazą danych";
    err.statusCode = 500;
    err.status = "error";
  }
};

const handleValidationError = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Nieprawidłowe dane wejściowe. ${errors.join(". ")}`;
  return new AppError(message, 400, errors);
};

const handleInvalidId = () => {
  const message = "Nieprawidłowe ID";
  return new AppError(message, 400);
};

const sendError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    ...(err.errors && { errors: err.errors }),
  });
};

const handleErrors = (err, req, res, next) => {
  checkDBConnection(err);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  let error = { ...err };
  error.message = err.message;

  if (
    error._message === "Validation failed" ||
    error.message.toLowerCase().includes("validation failed")
  ) {
    error = handleValidationError(error);
  }
  if (error.message.startsWith("Cast to Object")) error = handleInvalidId();
  sendError(error, res);
};

module.exports = handleErrors;
