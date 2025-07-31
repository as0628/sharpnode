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

// controllers/productController.js
const AppError = require('../utils/AppError');

exports.getProductById = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return next(new AppError('Product not found', 404));
    }

    res.status(200).json({
      status: 'success',
      data: product
    });
  } catch (err) {
    next(err); // Pass to centralized error handler
  }
};
