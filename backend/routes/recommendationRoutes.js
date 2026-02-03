const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet"); // your Pet schema

// POST /api/recommendations
router.post("/", async (req, res) => {
  try {
    const { type, breed, maxAge, gender } = req.body;

    // Build dynamic query
    const query = {};
    if (type) query.type = type;
    if (breed) query.breed = breed;
    if (maxAge) query.age = { $lte: maxAge };
    if (gender) query.gender = gender;

    const recommendedPets = await Pet.find(query).limit(10); // top 10
    res.status(200).json(recommendedPets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
