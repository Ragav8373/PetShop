const Adoption = require("../models/AdoptionRequest");

exports.requestAdoption = async (req, res) => {
  await Adoption.create(req.body);
  res.json({ message: "Adoption Request Sent" });
};
