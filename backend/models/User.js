const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },          // not required yet
  mobile: { type: String, required: true, unique: true },
  email: { type: String },
  password: { type: String },
  gender: { type: String },
  city: { type: String },
  isVerified: { type: Boolean, default: false },
  otp: { type: String }
});

module.exports = mongoose.model("User", userSchema);
