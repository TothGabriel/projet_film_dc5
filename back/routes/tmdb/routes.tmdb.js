const tmdbController  = require('../../controllers/tmdb/tmdb.controllers.categorie');
const express = require('express');
const router = express.Router();

router.get('/listByCategory', tmdbController.listByCategory);

module.exports = router;