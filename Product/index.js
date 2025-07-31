const express = require('express');
const app = express();

// Middleware to log method and route
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

// Import routers
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');

// Use routers
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

// Handle 404
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
