const express = require("express");
const router = express.Router();
const { recommendPets } = require("../controllers/recommendationController");

router.post("/", recommendPets);

module.exports = router;
