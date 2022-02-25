function getLogin(req, res, next) {
  res.render("index", {
    tittle: "Login -Dream Chat Application",
  });
}

module.exports = {
  getLogin,
};
