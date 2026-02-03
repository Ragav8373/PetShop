const mongoose = require("mongoose");
require("dotenv").config();
const Pet = require("./models/Pet"); // Adjust path if needed

// Connect to MongoDB (no extra options needed in Mongoose 7+)
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    const pets = await Pet.find();

    for (const pet of pets) {
      let category = "";

      if (pet.age < 1) category = "puppy";
      else if (pet.age < 7) category = "adult";
      else category = "senior";

      await Pet.updateOne({ _id: pet._id }, { ageCategory: category });
      console.log(`Updated ${pet.name}: ${category}`);
    }

    console.log("All pets updated successfully!");
    mongoose.disconnect();
  })
  .catch((err) => console.error("MongoDB connection error:", err));
