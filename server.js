projectData = {};

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

app.use(express.static("website"));

const port = 3000;
const server = app.listen(port, listening);

function listening() {
  console.log(`Listening on port ${port}`);
}

app.get("/all", sendData);
// Return data in the endpoint
function sendData(req, res) {
  res.send(projectData);
}

app.post("/add", addData);
// Add data to the endpoint
function addData(req, res) {
  const key = Math.floor(Math.random() * 100000000);
  projectData = {
      date: req.body.date,
      temperature: req.body.temperature,
      userResponse: req.body.userResponse,
  };
  res.send(projectData)
}
