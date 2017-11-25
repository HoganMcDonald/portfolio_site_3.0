require('dotenv').config();

//globals
const port = process.env.PORT;

//app
const express = require('express');
const app = express();

//packages
const path = require('path');

//uses
app.use(express.static('public'));

//routes
app.get('/', (req, res)=> {
  res.sendFile(path.resolve('public/views/index.html'));
});

//spin up server
app.listen(port, ()=> {
  console.log('up on port ', port);
});
