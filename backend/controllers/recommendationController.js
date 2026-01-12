const Pet = require("../models/Pet");

exports.recommendPets = async (req, res) => {
  const { preferredType } = req.body;
  const pets = await Pet.find({ type: preferredType });
  res.json(pets);
};
