const User = require("../../model/User");
const mongoose = require("mongoose");

async function updateUser(ctx) {
  const { body } = ctx.request;
  const { id } = ctx.params;

  const user = await User.findOne({ _id: new mongoose.Types.ObjectId(id) });
  if (!user) {
    ctx.status = 404;
    ctx.body = {
      message: `User ${id} no found`,
    };
  } else {
    ctx.status = 201;
    const { email, password, phone, order, name } = body;
    if (!email && !password && !phone && !name && order) {
      const orderId = body.order;

      await user.order.push(new mongoose.Types.ObjectId(orderId));
      await user.save();

      ctx.body = {
        message: "order id updated",
      };
    }
  }
}

module.exports = updateUser;
