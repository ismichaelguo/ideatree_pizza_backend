const Order = require('../../model/Order');
const mongoose = require('mongoose');

async function getOrder (ctx) {
  const { id } = ctx.params;
  const order = await Order.findOne({ _id: new mongoose.Types.ObjectId(id) });
  if (!order) {
    ctx.status = 404;
    ctx.body = {
      message: `Order:${id} can't find`,
    }
  } else {
    ctx.status = 200;
    ctx.body = order;
  }
}

module.exports = getOrder;