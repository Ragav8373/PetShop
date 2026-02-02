// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: {
//     type: String,
//     enum: ["user", "admin"],
//     default: "user"
//   },
//   gender: String,
//   city: String
// });

// module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  city: { type: String },
  experience: { type: Number, min: 1, max: 10 },
  purpose: { type: String, enum: ["pet", "service", "guidance", "adoption", "other"] },
  role: { type: String, default: "user" }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
