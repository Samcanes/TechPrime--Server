const User = require("../models/user.models");

exports.signup = (req, res) => {
  console.log("At sign up");
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) {
      return res.send(err);
    } else {
      if (user) {
        console.log("User exists");
        return res.status(201).json({
          message: "User Already Exist",
        });
      } else {
        const { firstName, lastName, password, email } = req.body;
        console.log(firstName, lastName, password, email);
        const _user = new User({
          firstName,
          lastName,
          password,
          email,
        });
        console.log("Got data", _user);

        _user.save((error, data) => {
          if (error) {
            console.log("I couldnt save user due to: " + error);
            return res.status(400).json({
              message: error,
            });
          }
          if (data) {
            return res.status(201).json({
              user: data,
            });
          }
        });
      }
    }
  });
};
