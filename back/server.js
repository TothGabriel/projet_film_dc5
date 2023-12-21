const express = require('express')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const brypt = require('bcryptjs');
const app = express()

const port = process.env.BACK_PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`App démarrée sur le port ${port}`)
});