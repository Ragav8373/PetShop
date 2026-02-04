
const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet");
const multer = require("multer");

/* Multer config */
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

/* =========================
   ADD PET (ADMIN)
========================= */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const pet = new Pet({
      name: req.body.name,
      type: req.body.type,
      breed: req.body.breed,
      age: req.body.age,
      gender: req.body.gender,
      description: req.body.description,
      lifeExpectancy: req.body.lifeExpectancy,
      Trainability: req.body.Trainability,
      size: req.body.size,
      goodwith: req.body.goodwith,
      grooming: req.body.grooming,
      owerview: req.body.owerview,
      image: req.file.filename
      
    });

    await pet.save();
    res.status(201).json({ message: "Pet added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error adding pet" });
  }
});

/* =========================
   ✅ GET ALL PETS (ADMIN)
========================= */
router.get("/", async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: "Error fetching pets" });
  }
});

/* =========================
   GET PET DETAILS
========================= */
router.get("/details/:id", async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    res.json(pet);
  } catch (err) {
    res.status(500).json({ message: "Error fetching pet" });
  }
});

/* =========================
   GET PETS BY TYPE
========================= */
router.get("/:type", async (req, res) => {
  try {
    const pets = await Pet.find({ type: req.params.type });
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

/* =========================
   DELETE PET (ADMIN)
========================= */
router.delete("/:id", async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);

    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    res.json({ message: "Pet deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting pet" });
  }
});


module.exports = router;
