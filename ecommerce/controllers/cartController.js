// controllers/cartController.js

exports.getCartForUser = (req, res) => {
  const userId = req.params.userId;
  res.send(`Fetching cart for user with ID: ${userId}`);
};

exports.addProductToCart = (req, res) => {
  const userId = req.params.userId;
  res.send(`Adding product to cart for user with ID: ${userId}`);
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
