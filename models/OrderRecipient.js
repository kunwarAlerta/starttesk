const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderRecieverModel = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      index: true,
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


const OrderReciever = mongoose.model("OrderReciever", OrderRecieverModel);
module.exports = OrderReciever;
