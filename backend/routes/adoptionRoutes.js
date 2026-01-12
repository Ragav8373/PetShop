const express = require("express");
const router = express.Router();
const { requestAdoption } = require("../controllers/adoptionController");

router.post("/", requestAdoption);

module.exports = router;
