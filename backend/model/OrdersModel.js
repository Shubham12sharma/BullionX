const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

// Create and export the model
module.exports = mongoose.model("Order", OrdersSchema);
