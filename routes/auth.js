var express = require("express");
const { signup, signin } = require("../controllers/auth.controllers");
var router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);

module.exports = router;
