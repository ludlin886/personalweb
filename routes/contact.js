var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("contact", { title: "Contact Me" });
});

router.post("/", function (req, res, next) {
  // You can add form handling code here
  res.redirect("/");
});

module.exports = router;
