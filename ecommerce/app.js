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
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Import routes
const productRoutes = require("./routes/productRoutes");

// Use routes
app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
