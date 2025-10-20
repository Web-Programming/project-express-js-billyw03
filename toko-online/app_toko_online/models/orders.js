const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  // relasi ke Model User (pengguna yang membuat pesanan)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // referensi ke model User
    required: true,
  },
  // item-item dalam pesanan (Relasi ke Model Product)
  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // referensi ke model Product
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      priceAtOrder: {
        // harga produk saat order dibuat
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
