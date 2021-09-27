const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;

// Port
const PORT = process.env.PORT || 3000;

// Database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/" + "fancy-blog";

// Connect to Mongo
mongoose.connect(MONGODB_URI);

// Error / success
db.on("error", (err) => console.log(err.message + " is Mongo not running?"));
db.on("connected", () => console.log("mongo connected: ", MONGODB_URI));
db.on("disconnected", () => console.log("mongo disconnected"));

// open the connection to mongo
db.on("open", () => {});

// Importing schemas
const Post = require("./models/Post");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Controllers
const postsController = require("./controllers/posts.js");
app.use("/posts", postsController);

app.listen(PORT, () => {
  console.log(`✅ PORT: ${PORT} 🌟`);
});
