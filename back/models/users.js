const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    age: Number,
    location: String,
    filmsWatched: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'films' 
    }],
});

module.exports = mongoose.model('users', userSchema);