// // const express = require('express');
// // const path = require('path');

// // const app = express();
// // const PORT = 3000;

// // // Routes
// // const productRoutes = require('./routes/productRoutes');
// // app.use('/api', productRoutes);

// // // Start server
// // app.listen(PORT, () => {
// //   console.log(`Server is running on http://localhost:${PORT}`);
// // });
// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// // Import routes
// const productRoutes = require('./routes/productRoutes');

// // Use routes
// app.use('/api', productRoutes);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
const express = require('express');
const path = require('path');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (for script.js)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', productRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
