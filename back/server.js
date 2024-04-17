const express = require('express');
const database = require('./database/database');
require('dotenv').config();

const app = express();
const prefixV1 = '/api/v1';
database();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.BACKEND_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port : ${PORT}`);
});

/* Déclaration des routes */
const usersRoutes = require('./routes/users/routes.users');
const tmdbRoutes = require('./routes/tmdb/routes.tmdb');

/* Middleware */
const authMiddleware = require('./middlewares/middlewares.auth');

/* Appelation des routes */
app.use(`${prefixV1}/users`, usersRoutes);
app.use(`${prefixV1}/tmdb`, tmdbRoutes);

// Middleware d'authentification
app.use(authMiddleware);