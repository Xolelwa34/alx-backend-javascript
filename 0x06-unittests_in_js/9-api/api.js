const express = require('express');
const app = express();

// Endpoint for GET /cart/:id
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// Fallback for invalid IDs
app.use((req, res) => {
  res.status(404).send('Cannot GET ' + req.originalUrl);
});

// Start the server
const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;

