// const express = require("express");
// const app = express();

// // Import route files
// const userRoutes = require("./routes/userRoutes");
// const productRoutes = require("./routes/productRoutes");
// const cartRoutes = require("./routes/cartRoutes");

// // Middleware
// app.use(express.json());

// // Route mounting
// app.use("/users", userRoutes);
// app.use("/products", productRoutes);
// app.use("/cart", cartRoutes);

// // Server setup
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// server.js
// server.js

// server.js

// const express = require("express");
// const app = express();
// const PORT = 3000;

// const userRoutes = require("./routes/userRoutes");
// const productRoutes = require("./routes/productRoutes");
// const cartRoutes = require("./routes/cartRoutes");

// app.use(express.json());

// app.use("/users", userRoutes);
// app.use("/products", productRoutes);
// app.use("/cart", cartRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });

// const express = require("express");
// const app = express();

// const productRoutes = require("./routes/productRoutes");

// app.use(express.json());
// app.use("/products", productRoutes);

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const errorHandler = require('./middlewares/errorHandler');
const AppError = require('./utils/AppError');

const app = express();

app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);

// Handle undefined routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

// Centralized error handler
app.use(errorHandler);

module.exports = app;
