const express = require('express');
const router = express.Router();
//const authMiddleware = require('../middleware/authMiddleware');

/*router.get('/protected-route', authMiddleware, (req, res) => {
  res.send('Cette route est protégée et vous êtes authentifié.');
});*/

const { getCategories } = require('../../controllers/category.controller');

router.get('/', getCategories);

module.exports = router;