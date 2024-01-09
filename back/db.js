const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
  try {
    const user = process.env.MONGODB_USER;
    const pass = process.env.MONGODB_PASSWORD;
    await mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.mz6ei5n.mongodb.net/`);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};

module.exports = connectDB;
