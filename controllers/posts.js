const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Post route
router.post("/", (req, res, next) => {
  Post.create(req.body)
    .then((post) => res.json(post))
    .catch(next);
});

// Index route
router.get("/", (req, res, next) => {
  Post.find({})
    .then((posts) => res.json(posts))
    .catch(next);
});

// Show route
router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id)
    .then((job) => res.json(job))
    .catch(next);
});

// Update route
router.put("/:id", (req, res, next) => {
  Post.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((job) => res.json(job))
    .catch(next);
});

// Delete
router.delete("/:id", (req, res, next) => {
  Post.findOneAndDelete({
    _id: req.params.id
  })
    .then((job) => res.json(job))
    .catch(next);
});

module.exports = router;
