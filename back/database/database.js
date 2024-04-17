const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    let users = process.env.USER_DB;
    let password = process.env.PASSWORD_DB;

    console.log(users, password)
    await mongoose.connect(`mongodb+srv://${users}:${password}@cluster0.zo2iqnr.mongodb.net/`);
    console.log('Base de donnée connectée avec succès !');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};

module.exports = connectDB;