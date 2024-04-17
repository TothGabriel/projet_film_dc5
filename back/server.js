const express = require('express');
const connectDB = require('./database');

const app = express();
const prefixV1 = '/api/v1';
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/* Déclaration des routes */
const usersRoutes = require('./routes/users/routes.users');

/* Middleware */
const authMiddleware = require('./middlewares/middlewares.auth');

/* Appelation des routes */
app.use(`${prefixV1}/users`, usersRoutes);

// Middleware d'authentification
app.use(authMiddleware);