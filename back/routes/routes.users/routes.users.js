const users = require('../../controllers/controllers.users');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middlewares/middlewares.auth');

router.post('/login', users.login);
router.post('/register', authMiddleware, users.register);

