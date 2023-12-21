const express = require('express')
const dotenv = require('dotenv');
const app = express()

const port = process.env.BACK_PORT; 

app.set('port', port);

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(port);