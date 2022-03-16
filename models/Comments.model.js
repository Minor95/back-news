const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  name: String,
  text: String,
  news: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "News",
  },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
