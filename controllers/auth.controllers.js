const User = require("../models/user.models");
const jwt = require("jsonwebtoken");

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

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    console.log("SignIn works");

    if (err) {
      return res.send(err);
    } else {
      if (user) {
        if (user.authenticate(req.body.password)) {
          const { firstName, lastName, email, role } = user;

          const token = jwt.sign(
            { _id: user._id, role: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
          );
          res.status(200).json({
            token,
            user: {
              firstName,
              lastName,
              email,
              role,
            },
          });
        } else {
          return res.status(400).json({
            message: "Invalid Password",
          });
        }
      } else {
        return res.status(201).json({
          message: "User Already Exist",
        });
      }
    }
  });
};

exports.requireSignin = (req, res, next) => {
  console.log("I am at require signIn");
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.JWT_SECRET);
  req.user = user;
  next();
};