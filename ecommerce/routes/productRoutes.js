// // routes/productRoutes.js
// const express = require("express");
// const router = express.Router();

// const {
//   getAllProducts,
//   getProductById,
//   addNewProduct,
// } = require("../controllers/productController");

// router.get("/", getAllProducts);
// router.get("/:id", getProductById);
// router.post("/", addNewProduct);

// module.exports = router;
// routes/productRoutes.js
const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  addNewProduct,
} = require("../controllers/productController");

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", addNewProduct);

module.exports = router;
