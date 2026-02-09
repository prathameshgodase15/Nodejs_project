const Product = require("../models/product.model");

// CREATE product (Admin / testing)
exports.createProduct = async (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: "Name and price are required" });
  }

  const product = await Product.create({
    name,
    price,
    description
  });

  res.status(201).json(product);
};

// GET all products (Flipkart product listing)
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// GET single product (Product detail page)
exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

// UPDATE product
exports.updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;
  product.description = req.body.description || product.description;

  await product.save();
  res.json(product);
};

// DELETE product
exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  await product.deleteOne();
  res.json({ message: "Product removed" });
};
