const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const connectDB = require('./db');

const app = express();
connectDB();

/* Middleware */
const authMiddleware = require('./middlewares/middlewares.auth');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Middleware d'authentification
app.use(authMiddleware);

/* Déclaration des routes */
