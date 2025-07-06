const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/vehical", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// ------------- New Routes --------------------
const vehical = require("./routes/vehical");
app.use("/vehical", vehical);

app.listen(3001, () => console.log("App listening on port 3001!"));
