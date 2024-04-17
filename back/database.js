const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
  try {
    const user = process.env.MONGODB_USER;
    const pass = process.env.MONGODB_PASSWORD;
    await mongoose.connect(`mongodb+srv://axelpelassa:vFIZTdrO5MZ8ifBq@cluster0.zo2iqnr.mongodb.net/`);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};

module.exports = connectDB;
