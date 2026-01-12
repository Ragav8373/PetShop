// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const twilio = require("twilio");
// require("dotenv").config();

// // Twilio setup
// const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
// const TWILIO_PHONE = process.env.TWILIO_PHONE;

// // Send OTP
// router.post("/send-otp", async (req, res) => {
//   const { mobile } = req.body;
//   if (!mobile) return res.status(400).json({ message: "Mobile required" });

//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

//   try {
//     await client.messages.create({
//       body: `Your OTP is ${otp}`,
//       from: TWILIO_PHONE,
//       to: mobile
//     });

//     // Save OTP to user temporarily
//     let user = await User.findOne({ mobile });
//     if (!user) user = new User({ mobile });
//     user.otp = otp;
//     await user.save();

//     res.json({ message: "OTP sent successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to send OTP" });
//   }
// });

// // Verify OTP
// router.post("/verify-otp", async (req, res) => {
//   const { mobile, otp } = req.body;
//   const user = await User.findOne({ mobile });
//   if (!user || user.otp !== otp)
//     return res.status(400).json({ message: "Invalid OTP" });

//   user.isVerified = true;
//   user.otp = null;
//   await user.save();

//   res.json({ message: "OTP verified successfully" });
// });

// // Register after OTP verification
// router.post("/register", async (req, res) => {
//   const { name, mobile, email, password, gender, city } = req.body;

//   const user = await User.findOne({ mobile });
//   if (!user || !user.isVerified)
//     return res.status(400).json({ message: "Mobile not verified" });

//   const hashedPassword = await bcrypt.hash(password, 10);

//   user.name = name;
//   user.email = email;
//   user.password = hashedPassword;
//   user.gender = gender;
//   user.city = city;

//   await user.save();
//   res.status(201).json({ message: "User registered successfully" });
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// 1️⃣ Send OTP (mock)
router.post("/send-otp", async (req, res) => {
  const { mobile } = req.body;
  if (!mobile) return res.status(400).json({ message: "Mobile required" });

  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    let user = await User.findOne({ mobile });
    if (!user) user = new User({ mobile }); // only mobile

    user.otp = otp;
    await user.save();

    console.log(`Mock OTP for ${mobile}: ${otp}`); // log OTP
    res.json({ message: "OTP sent successfully (mock)" });
  } catch (err) {
    console.error("Send OTP error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

// 2️⃣ Verify OTP
router.post("/verify-otp", async (req, res) => {
  const { mobile, otp } = req.body;
  try {
    const user = await User.findOne({ mobile });
    if (!user || user.otp !== otp)
      return res.status(400).json({ message: "Invalid OTP" });

    user.isVerified = true;
    user.otp = null;
    await user.save();

    res.json({ message: "OTP verified successfully" });
  } catch (err) {
    console.error("Verify OTP error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

// 3️⃣ Register full details
router.post("/register", async (req, res) => {
  const { name, mobile, email, password, gender, city } = req.body;

  try {
    const user = await User.findOne({ mobile });
    if (!user || !user.isVerified)
      return res.status(400).json({ message: "Mobile not verified" });

    const hashedPassword = await bcrypt.hash(password, 10);

    user.name = name;
    user.email = email;
    user.password = hashedPassword;
    user.gender = gender;
    user.city = city;

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

// 4️⃣ Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    // Create JWT token
    const token = jwt.sign({ id: user._id }, "your_jwt_secret", { expiresIn: "1h" });

    res.json({ message: "Login successful", token, user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

module.exports = router;
