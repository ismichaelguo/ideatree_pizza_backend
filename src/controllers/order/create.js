const Order = require('../../model/Order');

async function createOrder (ctx) {
  const { body } = ctx.request;
  // console.log('body', body)
  const order = new Order(body);
  const res = await order.save();
  ctx.status = 201;
  ctx.body = {
    message: "Order Created!",
    res,
  }
}

module.exports = createOrder;