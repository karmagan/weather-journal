// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 3000;
const server = app.listen(port, listening);

function listening() {
  console.log(`Listening on port ${port}`);
}

app.get("/all", sendData);

function sendData(req, res) {
  console.log('sending: '+projectData);
  res.send(projectData);
}

app.post("/add", addData);

function addData(req, res) {
  const key = Math.floor(Math.random() * 100000000);
  console.log('adding: '+req.body);
  projectData = {
      date: req.body.date,
      temperature: req.body.temperature,
      userResponse: req.body.userResponse,
  };
  res.send(projectData)
}
