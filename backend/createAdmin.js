require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // adjust path if needed

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    const hashedPassword = await bcrypt.hash('Admin@123', 10); // change password here

 const admin = new User({
  name: 'Admin',
  email: 'admin@petadoption.com',
  mobile: '7871464764', // must be unique
  password: hashedPassword,
  role: 'admin'
});


    await admin.save();
    console.log("Admin user created successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createAdmin();
