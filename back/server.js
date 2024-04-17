const express = require('express');
const Database = require('./database/database');

const app = express();
const prefixV1 = '/api/v1';
Database();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port : ${PORT}`);
});

/* Déclaration des routes */
const usersRoutes = require('./routes/users/routes.users');

/* Middleware */
const authMiddleware = require('./middlewares/middlewares.auth');

/* Appelation des routes */
app.use(`${prefixV1}/users`, usersRoutes);

// Middleware d'authentification
app.use(authMiddleware);