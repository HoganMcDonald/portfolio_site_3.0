require('dotenv').config();

const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();

// middleware
app.use(express.static('public'));
app.use(compression());

// routes
app.get('/', (req, res)=> {
  res.sendFile(path.resolve('public/views/index.min.html'));
});

// start server
const server = app.listen(process.env.PORT, () =>
  console.log(`   Server listening on port ${server.address().port}\n   currently running in ${process.env.NODE_ENV} mode`));

// export
module.exports = app;
