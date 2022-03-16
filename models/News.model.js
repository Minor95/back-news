const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  header: String,
  text: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  photo: String,
});

const News = mongoose.model("News", newsSchema);
module.exports = News;
