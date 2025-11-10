
'use strict';



const express = require('express');

const PORT = 8080;

const HOST = '0.0.0.0';



const app = express();



app.get('/', (req, res) => {

  res.send('CPSY 350 Project: Github Actions CI. SAIT ID:000123456');

});



const server = app.listen(PORT, HOST, () => {

  console.log(`Running on http://${HOST}:${PORT}`);

});

//Export both app and server for testing

module.exports = { app, server };
// added by Ajay for CI test
