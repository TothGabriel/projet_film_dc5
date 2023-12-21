const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const authenticate = require('./middleware/authenticate'); // Importez le middleware d'authentification

const app = express();

// Connexion à la base de données
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware de test
app.use((req, res, next) => {
    console.log('Route reçue');
    next();
});

// Routes de test au '/'
app.get('/', (req, res) => {
    res.send('Route par défaut');
});

// Routes d'authentification
app.use('/api/auth', authRoutes);

// Middleware d'authentification pour les routes protégées
app.use('/api/categories', authenticate, require('./routes/api/category.route'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
