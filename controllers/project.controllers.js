const projectModels = require("../models/project.models");
const slugify = require("slugify");

exports.createProject = (req, res) => {
  console.log(req.body);
  // res.status(200).json({ file: req.files, body: req.body });
  const {
    name,
    reason,
    type,
    division,
    category,
    priority,
    department,
    location,
    createdBy,
    updatedAt,
  } = req.body;

  console.log(name);

  const project = new projectModels({
    name: name,
    slug: slugify(name),
    reason,
    type,
    division,
    category,
    priority,
    department,
    location,
    createdBy: req.user._id,
  });

  project.save((error, project) => {
    if (error) return res.status(400).json({ error });
    if (project) {
      res.status(201).json({ project });
    }
  });
};

exports.updateProject = (req, res) => {};
