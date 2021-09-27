const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3003;

// Mongoose configuration
mongoose.connection.on("error", (err) => console.log(err.message + " is mongo not running?"));
mongoose.connection.on("disconnected", () => console.log("Mongoose is disconnected"));

mongoose.connect("mongodb://localhost:27017/fancy-blog", { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("Connected to mongoose!!");
});

// Importing schemas
const Animal = require("./models/Animal");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Controllers
const postsController = require("./controllers/posts.js");
app.use("/posts", postsController);

app.listen(PORT, () => {
  console.log(`✅ PORT: ${PORT} 🌟`);
});
