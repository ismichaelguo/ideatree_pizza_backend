const Order = require("../../model/Order");
const mongoose = require("mongoose");

async function deleteOrder(ctx) {
  const { id } = ctx.params;
  const order = await Order.findOne({ _id: new mongoose.Types.ObjectId(id) });

  if (!order) {
    ctx.status = 404;
    ctx.body = {
      message: `Order:${id} can't find`,
    };
  } else {
    ctx.status = 201;
    const res = await Order.deleteOne({ _id: new mongoose.Types.ObjectId(id) });

    ctx.body = {
      message: `Order ${id} deleted`,
      res,
    };
  }
}

module.exports = deleteOrder;
