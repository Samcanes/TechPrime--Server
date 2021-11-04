var express = require("express");
const { requireSignin } = require("../controllers/auth.controllers");
const { createProject, updateProject } = require("../controllers/project.controllers");
var router = express.Router();

router.post("/project/create", requireSignin, createProject);
router.post("/project/update", requireSignin, updateProject);
// router.get("/project/read", );

module.exports = router;
