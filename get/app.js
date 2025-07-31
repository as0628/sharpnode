const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Routes
const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
