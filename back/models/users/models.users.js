const mongoose = require('mongoose');

const users = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, table = 'users');

const User = mongoose.model('User', users);

module.exports = User;