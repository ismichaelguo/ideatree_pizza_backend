const Order = require("../../model/Order");
const mongoose = require("mongoose");

async function bulkGetOrder(ctx) {
  const { id } = ctx.params;
  const order = await Order.find({});
  if (!order) {
    ctx.status = 404;
    ctx.body = {
      message: `No order is found`,
    };
  } else {
    ctx.status = 200;
    ctx.body = order;
  }
}

module.exports = bulkGetOrder;
