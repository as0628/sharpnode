const express = require('express');
const app = express();

// Middleware to parse JSON body (optional for POST requests)
app.use(express.json());

// Custom Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next(); // Pass control to the next middleware/route
});

// GET /products
app.get('/products', (req, res) => {
  res.send('Here is the list of all products.');
});

// POST /products
app.post('/products', (req, res) => {
  res.send('A new product has been added.');
});

// GET /categories
app.get('/categories', (req, res) => {
  res.send('Here is the list of all categories.');
});

// POST /categories
app.post('/categories', (req, res) => {
  res.send('A new category has been created.');
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
