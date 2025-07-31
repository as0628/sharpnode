// routes/books.js
const express = require("express");
const router = express.Router();

// GET /books
router.get("/", (req, res) => {
  console.log("GET /books accessed");
  res.send("Here is the list of books!");
});

// POST /books
router.post("/", (req, res) => {
  console.log("POST /books data received:", req.body);
  res.send("Book has been added!");
});

module.exports = router;
