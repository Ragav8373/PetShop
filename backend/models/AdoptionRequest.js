const mongoose = require("mongoose");

const adoptionSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  petId: mongoose.Schema.Types.ObjectId,
  status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("AdoptionRequest", adoptionSchema);
