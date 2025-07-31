// server.js
const express = require("express");
const app = express();
const booksRouter = require("./routes/books");

app.use(express.json()); // To parse JSON bodies

// Mount the books router
app.use("/books", booksRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
