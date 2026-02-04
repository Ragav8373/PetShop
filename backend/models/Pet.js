// const mongoose = require("mongoose");

// const petSchema = new mongoose.Schema({
//   name: String,
//   type: String, // dog, cat, small
//   breed: String,
//   age: Number,
//   gender: String,
//   image: String,
//   lifeExpectancy: String,
//   Trainability: String,
//   size: String,
//   goodwith: String,
//   grooming: String,
//   owerview: String,
// });

// module.exports = mongoose.model("Pet", petSchema);
const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // dog, cat, small
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  image: { type: String, required: true },
  lifeExpectancy: { type: String, default: "N/A" },
  trainability: { type: String, default: "N/A" },
  size: { type: String, default: "N/A" },
  goodwith: { type: String, default: "N/A" },
  grooming: { type: String, default: "N/A" },
  overview: { type: String, default: "No description available." },
});

module.exports = mongoose.model("Pet", petSchema);
