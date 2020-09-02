const express = require("express");
const router = express.Router();
const orm = require("../config/orm");


router.get("/", (req, res) => {
    res.render("index")
});

module.exports = router;