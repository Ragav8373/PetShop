const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

// ✅ Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve uploads folder as static
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
const authRoutes = require("./routes/authRoutes");
const petRoutes = require("./routes/petRoutes");
const adoptionRoutes = require("./routes/adoptionRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/pets", petRoutes);
app.use("/api/adoptions", adoptionRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/meta", require("./routes/meta"));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
