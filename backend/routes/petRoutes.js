// const express = require("express");
// const router = express.Router();
// const Pet = require("../models/Pet");

// // GET pets by type (dog / cat / small)
// router.get("/:type", async (req, res) => {
//   try {
//     const pets = await Pet.find({ type: req.params.type });
//     res.json(pets);
//   } catch (err) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// module.exports = router;
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

/* ADD PET (ADMIN) */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const pet = new Pet({
      name: req.body.name,
      type: req.body.type,
      breed: req.body.breed,
      age: req.body.age,
      gender: req.body.gender,
      description: req.body.description,
      image: req.file.filename
    });
    await pet.save();
    res.status(201).json({ message: "Pet added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error adding pet" });
  }
});

/* GET PETS BY TYPE */
router.get("/:type", async (req, res) => {
  try {
    const pets = await Pet.find({ type: req.params.type });
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

/* GET PET DETAILS */
router.get("/details/:id", async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    res.json(pet);
  } catch (err) {
    res.status(500).json({ message: "Error fetching pet" });
  }
});

module.exports = router;
