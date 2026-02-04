const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet");

/* Get unique pet types */
router.get("/types", async (req, res) => {
  const types = await Pet.distinct("type");
  res.json(types);
});

/* Get breeds by type */
router.get("/breeds/:type", async (req, res) => {
  const breeds = await Pet.distinct("breed", {
    type: { $regex: new RegExp(`^${req.params.type}$`, "i") }
  });
  res.json(breeds);
});

module.exports = router;
