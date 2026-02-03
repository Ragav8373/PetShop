// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();
// const authRoutes = require("./routes/authRoutes");

// const petRoutes = require("./routes/petRoutes");
// const adoptionRoutes = require("./routes/adoptionRoutes");
// const recommendationRoutes = require("./routes/recommendationRoutes");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/uploads", express.static("uploads"));
// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/pets", petRoutes); // ✅ baseURL for pets
// app.use("/api/adoptions", adoptionRoutes); // 🔹 change to plural

// app.use("/api/recommend", recommendationRoutes);

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// // Server
// app.listen(5000, () => console.log("Server running on port 5000"));
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const petRoutes = require("./routes/petRoutes");
const adoptionRoutes = require("./routes/adoptionRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/pets", petRoutes);
app.use("/api/adoptions", adoptionRoutes);
app.use("/api/recommendations", recommendationRoutes); // ✅ must match frontend

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Server
app.listen(5000, () => console.log("Server running on port 5000"));
