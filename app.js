const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const cors = require("cors");

// routes here:

const authroutes = require("./routes/auth");
const projectRoutes = require("./routes/proejct");

app.use(express.json({ extended: false, type: "application/json" }));

app.use(cors());
app.use("/public", express.static(path.join(__dirname, "/uploads")));
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.use("/api", authroutes);
app.use("/api", projectRoutes);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

console.log(process.env.MONGO_URI);

mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connection to database established`);
  })
  .catch((err) => {
    console.log(`db error ${err.message}`);
    process.exit(-1);
  });
