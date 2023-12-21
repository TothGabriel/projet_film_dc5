const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const app = express();

const routes = require('./routes/routes.js');

const port = process.env.BACK_PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Utilisez le routeur importé
app.use('/api', routes); // Toutes les routes dans routes.js seront préfixées par '/api'

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// middleware
app.use((req, res, next) => {
    console.log('Route reçue');
    next();
});

app.listen(port, () => {
    console.log(`App démarrée sur le port ${port}`);
});