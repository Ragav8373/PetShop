const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: String,
  type: String, // dog, cat, small
  breed: String,
  age: Number,
  gender: String,
  image: String,
  description: String
});

module.exports = mongoose.model("Pet", petSchema);
