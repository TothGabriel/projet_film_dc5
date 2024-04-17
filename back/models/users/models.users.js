const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  permission: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;