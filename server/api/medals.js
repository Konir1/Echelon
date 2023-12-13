const express = require("express");
require("dotenv").config();

let router = express.Router();

const Medals = require("../models/Medals.js");
const lib = require("../lib");

//Route is base/medals/
router.route("/test").get(lib.getLimiter, async (req, res) => {
  try {
    const check = await Medals.findAll();

    res.json(check).status(200);
  } catch (err) {
    res.status(403).send(err);
  }
});

module.exports = router; //Exports our routes
