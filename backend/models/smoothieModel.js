const mongoose = require("mongoose");

const SmoothieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  preptime: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  keywords: {
    type: [String],
    required: true,
  },
});

const Smoothie = mongoose.model("smoothies", SmoothieSchema);

module.exports = Smoothie;
