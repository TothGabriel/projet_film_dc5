const users = require('../../controllers/users/controllers.users');
const authMiddleware = require('../../middlewares/middlewares.auth');
const express = require('express');
const router = express.Router();

router.post('/login', users.login);
router.post('/register', users.register);

module.exports = router;