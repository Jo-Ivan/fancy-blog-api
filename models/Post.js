const mongoose = require("../db/connection");

const postSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    likes: { type: Number },
    dislikes: { type: Number },
    comments: [{ type: String }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
