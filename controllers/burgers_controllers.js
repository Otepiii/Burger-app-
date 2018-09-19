var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burgers.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers/:burgerName", function (req, res) {
  console.log("request", req.params);

  burgers.insertOne(
      req.params.burgerName, function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.id });
    });
});

router.put("/api/burgers/:id/:devoured", function (req, res) {

  console.log(req.params.devoured);

  burgers.updateOne(req.params.id, req.params.devoured, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burgers.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
