const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://axelpelassa:vFIZTdrO5MZ8ifBq@cluster0.zo2iqnr.mongodb.net/`);
    console.log('Base de donnée connectée avec succès !');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};

module.exports = connectDB;