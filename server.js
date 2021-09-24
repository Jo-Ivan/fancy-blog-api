const express = require("express");
const mongoose = require("mongoose");

// Instantiate express application object
const app = express();

// Add `express.json` middleware which will
// parse JSON requests into JS objects before
// they reach the route files.
app.use(express.json());

// The urlencoded middleware parses requests which use
// a specific content type (such as when using Axios)
app.use(express.urlencoded({ extended: true }));

// Add controllers

// Define a port for API to run on, if the environment
// variable called `PORT` is not found use port 4000
app.set("port", process.env.PORT || 4000);
// Run server on designated port
app.listen(app.get("port"), () => {
  console.log("listening on port " + app.get("port"));
});
