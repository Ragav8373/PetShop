const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  type: String,
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model("Pet", petSchema);
