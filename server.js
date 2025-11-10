'use strict';


const express = require('express');


// Constants

const PORT = 8080;

const HOST = '0.0.0.0';


// App

const app = express();


app.get('/', (req, res) => {

  res.send('CPSY 350 Project: Github Actions CI. SAIT ID:000123456');

});


// Start server

const server = app.listen(PORT, HOST, () => {

  console.log(`Server running at http://${HOST}:${PORT}`);

});


// Export server for CI tests

module.exports = server;

