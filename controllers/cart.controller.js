let cart = [];

exports.getCart = (req, res) => {
  res.json(cart);
};

// exports.addToCart = (req, res) => {
//   const { id, name, price } = req.body;

//   if (!id || !name || !price) {
//     return res.status(400).json({ error: "id, name, and price are required" });
//   }

//   const existing = cart.find(item => item.id === id);

//   if (existing) {
//     existing.quantity += 1;
//   } else {
//     cart.push({ id, name, price, quantity: 1 });
//   }

//   res.json({ message: "Item added", cart });
// };

exports.addToCart = (req, res) => {
  const { _id, name, price } = req.body;

  if (!_id || !name || price === undefined) {
    return res.status(400).json({ error: "_id, name, and price are required" });
  }

  const existing = cart.find(item => item.id === _id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: _id, name, price, quantity: 1 });
  }

  res.json({ message: "Item added", cart });
};


exports.removeItem = (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: "id is required" });
  }

  cart = cart.filter(item => item.id !== id);
  res.json({ message: "Item removed", cart });
};

exports.clearCart = (req, res) => {
  cart = [];
  res.json({ message: "Cart cleared", cart });
};
