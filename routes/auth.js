var express = require("express");
const { signup } = require("../controllers/auth.controllers");
var router = express.Router();

// router.post("/signin", signin);

router.post("/signup", signup);

module.exports = router;
