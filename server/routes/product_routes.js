const express = require("express");
const formidableMiddleware = require("express-formidable");

const checkUserAuth = require("../middlewares/auth_middleware");
const isAdmin = require("../middlewares/admin_middleware");

const {
  createProductController,
  updateProductController,
  getProductsController,
  getSingleProductController,
  productImageController,
  deleteProductController,
  productFilterController,
} = require("../controllers/product_controller");

const router = express.Router();

// ROUTING

// create product
router.post(
  "/create-product",
  checkUserAuth,
  isAdmin,
  formidableMiddleware(),
  createProductController
);

// update product
router.patch(
  "/update-product/:pid",
  checkUserAuth,
  isAdmin,
  formidableMiddleware(),
  updateProductController
);

// get all products
router.get("/get-products", getProductsController);

// get single product
router.get("/get-single-product/:slug", getSingleProductController);

// get product image
router.get("/product-image/:pid", productImageController);

// delete product
router.delete(
  "/delete-product/:pid",
  checkUserAuth,
  isAdmin,
  deleteProductController
);

router.post("/filter-products", productFilterController);

module.exports = router;