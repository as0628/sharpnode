const express = require('express');
const path = require('path');
const router = express.Router();

// GET endpoint to serve HTML file
router.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/products.html'));
});

module.exports = router;
