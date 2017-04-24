var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req,res) => {
  burger.selectAll(function(data){
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", (req,res) => {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], () => {
    res.redirect("/");
  });
});

router.put("/:id", (req,res) => {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    name: req.body.burger_name
  }, condition, () => {
    res.redirect("/");
  });
});

module.exports = router;
