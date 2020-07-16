const Order = require('../../model/Order');

async function createOrder (ctx) {
  const { body } = ctx.request;
  const order = new Order(body);
  const res = await order.save();
  ctx.status = 201;
  ctx.body = {
    message: "Order Created!",
    id:res.id,
  }
}

module.exports = createOrder;