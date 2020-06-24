const Order = require('../../model/Order');
const mongoose = require('mongoose');

async function updateOrder (ctx) {
  const { body } = ctx.request;
  const { id } = ctx.params;
  const order = await Order.findOne({ _id: new mongoose.Types.ObjectId(id) });

  if (!order) {
    ctx.status = 404;
    ctx.body = {
      message: `Order ${id} no found`
    }
  } else {
    ctx.status = 201;
    Object.assign(order, body);
    const res = await order.save();
    ctx.body = {
      message: "Updated!",
      res
    }
  }
}

module.exports = updateOrder;