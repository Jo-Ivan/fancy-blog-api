const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Index route
// router.get("/", (req, res, next) => {
//   Post.find({})
//     .then((posts) => res.json(posts))
//     .catch(next);
// });

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// Post route
router.post("/", (req, res, next) => {
  Post.create(req.body)
    .then((post) => res.json(post))
    .catch(next);
});

module.exports = router;
