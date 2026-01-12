const Pet = require("../models/Pet");

exports.getPets = async (req, res) => {
  const pets = await Pet.find({ available: true });
  res.json(pets);
};
