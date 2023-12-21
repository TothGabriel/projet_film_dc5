const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const app = express();

const port = process.env.BACK_PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes de test au '/'
app.get('/', (req, res) => {
    res.send('Route par défaut');
});

// middleware de test
app.use((req, res, next) => {
    console.log('Route reçue');
    next();
});

// Prefixe des routes categories
app.use('/api/categories', require('./routes/api/category.route'));

// Ecoute du port 3001
app.listen(port, () => {
    console.log(`App démarrée sur le port ${port}`);
});