const express = require('express')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const brypt = require('bcryptjs');
const app = express()

const port = process.env.BACK_PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`App démarrée sur le port ${port}`)
});

// middleware si la route 
app.use((req, res, next) => {
    console.log('Route reçue');
    next();
});

app.get('/categories', async (req, res) => {
  const apiKey = process.env.API_KEY;
  console.log(apiKey);
  
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr-FR`;

  const response = await fetch(url);
  const genres = await response.json();

  res.json(genres);
});