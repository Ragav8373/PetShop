
// module.exports = router;
const express = require("express");
const router = express.Router();
const Adoption = require("../models/Adoption");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

// 🔹 User creates a new adoption request
router.post("/", auth, async (req, res) => {
  try {
    const { petId } = req.body;

    if (!petId) return res.status(400).json({ message: "Pet ID is required" });

    // Prevent duplicate requests
    const existing = await Adoption.findOne({ user: req.user.id, pet: petId });
    if (existing) {
      return res.status(400).json({ message: "You have already requested this pet" });
    }

    const adoption = new Adoption({
      user: req.user.id,
      pet: petId,
      status: "pending"
    });

    const savedAdoption = await adoption.save();
    res.status(201).json(savedAdoption);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create adoption request" });
  }
});

// 🔹 Admin fetch all adoption requests
router.get("/", auth, admin, async (req, res) => {
  try {
    const requests = await Adoption.find()
      .populate("user", "name email mobile city purpose")  // fetch user details
      .populate("pet", "name breed age gender image");     // fetch pet details

    res.json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch adoption requests" });
  }
});

// 🔹 Admin update adoption status (approve, reject, complete)
router.put("/:id", auth, admin, async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ["pending", "approved", "rejected", "completed"];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: `Invalid status. Must be one of: ${validStatuses.join(", ")}` });
    }

    const adoption = await Adoption.findById(req.params.id);
    if (!adoption) return res.status(404).json({ message: "Adoption request not found" });

    adoption.status = status;
    const updatedAdoption = await adoption.save();

    res.json(updatedAdoption);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update adoption status" });
  }
});

module.exports = router;
