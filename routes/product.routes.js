const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require("../controllers/product.controller");

// CREATE product
router.post("/", createProduct);

// READ all products
router.get("/", getProducts);

// READ single product
router.get("/:id", getProductById);

// UPDATE product
router.put("/:id", updateProduct);

// DELETE product
router.delete("/:id", deleteProduct);

module.exports = router;
