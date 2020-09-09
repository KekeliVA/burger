const express = require("express");
const router = express.Router();
const orm = require("../config/orm");
const burgers = require("../model/burger");


router.get("/", (req, res) => {
    burgers.selectAll((data) => {
      let hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    })
});

// when my ajax call happens in the front end logic, it must have a property called burgerName
router.post("/api/burger", (req, res) => {
  burgers.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], (result) => {
    res.json(result);
  });
});

router.put("/api/editburger/:id", (req, res) => {
  let condition = "id = " + req.params.id;
  console.log("condition: " + condition);

  burgers.updateOne({
    devoured: req.body.devoured
  }, condition, (result) => {
    if (result.changedRows == 0) {
      res.status(404).end();
    } else {
      res.json(result);
    }
  })
})

module.exports = router;

// when testing in postman, why doesn't the json object need the parameters of updateOne
// all I needed was my condition, is it because that is what my controller needs?