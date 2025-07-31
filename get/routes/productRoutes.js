// // const express = require('express');
// // const path = require('path');
// // const router = express.Router();

// // // GET endpoint to serve HTML file
// // router.get('/products', (req, res) => {
// //   res.sendFile(path.join(__dirname, '../views/products.html'));
// // });

// // module.exports = router;
// const express = require('express');
// const path = require('path');

// const router = express.Router();

// // GET /api/products => serve HTML form
// router.get('/products', (req, res) => {
//   res.sendFile(path.join(__dirname, '../views/products.html'));
// });

// module.exports = router;
const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the form
router.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/products.html'));
});

// Handle the POST request
router.post('/products', (req, res) => {
  const product = req.body.productName;
  console.log('Received product:', product);
  res.json({ message: 'Product received', product });
});

module.exports = router;
