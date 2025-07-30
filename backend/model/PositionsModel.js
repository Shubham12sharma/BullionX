const mongoose = require("mongoose");

const PositionsSchema = new mongoose.Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

// Create and export the model
module.exports = mongoose.model("Position", PositionsSchema);
