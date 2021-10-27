var express = require("express");
const { requireSignin } = require("../controllers/auth.controllers");
const { createProject } = require("../controllers/project.controllers");
var router = express.Router();

router.post("/project/create", requireSignin, createProject);
// router.post("/project/update", );
// router.get("/project/read", );

module.exports = router;
