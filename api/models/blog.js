const mongoose = require("mongoose");
const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Must be provide title"],
  },
  date: {
    type: String,
    required: [true, "Must be provide date"],
  },
  description: {
    type: String,
    required: [true, "Must be provide description"],
  },
  image: {
    type: String,
    required: [true, "Must be Provide image"],
  },
});

const Blog = mongoose.model("Blog", BlogSchema, "blog");

module.exports = Blog;
