const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// 🔹 GET /welcome/:username => with query param ?role=Admin
app.get("/welcome/:username", (req, res) => {
  const { username } = req.params; // route param
  const { role } = req.query;      // query param

  // Default role if not provided
  const userRole = role || "User";

  res.send(`Welcome ${username}, your role is ${userRole}`);
});

// 🔹 Wildcard route - handle undefined routes
app.all("*", (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

// 🔹 Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
