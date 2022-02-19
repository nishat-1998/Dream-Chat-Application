const createError = require("http-errors");

//404 not found handler

function notFoundHandler(req, res, next) {
  next(createError(404, "your requested content was not found"));
}

//default error handle
function errorHandler(err, req, res, next) {
  res.render("error", {
    title: "Error page",
  });
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
