'use strict';

const express = require('express');
const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Route
app.get('/', (req, res) => {
  res.status(200).send('CPSY 350 Project: GitHub Actions CI. SAIT ID:000123456');
});

// Export app for testing
module.exports = app;

// Start the server only when running directly
if (require.main === module) {
  app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
  });
}
