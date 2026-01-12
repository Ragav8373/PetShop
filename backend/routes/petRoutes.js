// const express = require("express");
// const router = express.Router();
// const { getPets } = require("../controllers/petController");

// router.get("/", getPets);

// module.exports = router;
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post(
  "/add",
  authMiddleware,
  roleMiddleware("admin"),
  (req, res) => {
    res.json({ message: "Pet added successfully" });
  }
);

module.exports = router;
