const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();

router.get('/categories', async (req, res) => {
    const apiKey = process.env.API_KEY;
    console.log(apiKey);
    
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr-FR`;
  
    const response = await fetch(url);
    const genres = await response.json();
  
    res.json(genres);
});

module.exports = router;