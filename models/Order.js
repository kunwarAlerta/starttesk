const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderModel = new Schema(
  {
    sender: {
        ref:'OrderSender',
      type: Schema.Types.ObjectId,
    },
    recipient: {
        ref:'OrderRecipient',
      type: Schema.Types.ObjectId,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const Order = mongoose.model("Order", OrderModel);
module.exports = Order;
