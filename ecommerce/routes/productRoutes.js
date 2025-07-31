// // routes/productRoutes.js

// const express = require("express");
// const router = express.Router();

// const {
//   getAllProducts,
//   addProduct,
//   getProductById,
// } = require("../controllers/productController");

// router.get("/", getAllProducts);
// router.post("/", addProduct);
// router.get("/:id", getProductById);

// module.exports = router;
// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.addProduct);

module.exports = router;
