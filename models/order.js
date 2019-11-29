const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  products: { type: Schema.Types.ObjectId, ref: "product" }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
