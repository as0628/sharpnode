// controllers/userController.js

exports.getAllUsers = (req, res) => {
  res.send("Fetching all users");
};

exports.addUser = (req, res) => {
  res.send("Adding a new user");
};

exports.getUserById = (req, res) => {
  const userId = req.params.id;
  res.send(`Fetching user with ID: ${userId}`);
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
