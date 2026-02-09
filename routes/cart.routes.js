// const express = require("express");
// const router = express.Router();

// const cartController = require("../controllers/cart.controller");

// router.get("/", cartController.getCart);
// router.post("/add", cartController.addItem);
// router.post("/remove", cartController.removeItem);
// router.post("/clear", cartController.clearCart);

// module.exports = router;

const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  removeItem,
  updateCartItem
} = require("../controllers/cart.controller");

// ADD to cart
router.post("/add", addToCart);

// GET cart
router.get("/", getCart);

// REMOVE item
router.post("/remove", removeItem);

module.exports = router;
