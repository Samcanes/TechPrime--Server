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
    status
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
    status
  });

  project.save((error, project) => {
    if (error) return res.status(400).json({ error });
    if (project) {
      res.status(201).json({ project });
    }
  });
};

exports.updateProject = (req, res) => {
  console.log(req.body);
  // res.status(200).json({ file: req.files, body: req.body });
  const {
   _id,
   status
  } = req.body;

  console.log(status); 

  let project  = projectModels.findOneAndUpdate({ _id: _id}, { status: status}, {
    new: true
  },
  (error, project) => {
    if (error) return res.status(400).json({message: "Failed to update Status", error });
    if (project) {
      res.status(201).json({message: "Status Updated", project });
    }
  }
  );
};
