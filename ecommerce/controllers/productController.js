// // controllers/productController.js

// exports.getAllProducts = (req, res) => {
//   res.send("Fetching all products");
// };

// exports.addProduct = (req, res) => {
//   res.send("Adding a new product");
// };

// exports.getProductById = (req, res) => {
//   const productId = req.params.id;
//   res.send(`Fetching product with ID: ${productId}`);
// };
// controllers/productController.js
const productService = require("../services/productService");

const getAllProducts = (req, res) => {
  const result = productService.getAllProducts();
  res.send(result);
};

const getProductById = (req, res) => {
  const { id } = req.params;
  const result = productService.getProductById(id);
  res.send(result);
};

const addProduct = (req, res) => {
  const result = productService.addProduct();
  res.send(result);
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct
};

