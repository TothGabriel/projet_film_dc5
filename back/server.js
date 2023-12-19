const express = require('express')
const app = express()

const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(port);