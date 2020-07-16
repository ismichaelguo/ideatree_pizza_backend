"use strict";

const User = require("../../model/User");
const mongoose = require("mongoose");

async function getUserOrders(ctx) {
  let { id } = ctx.params;

  const orders = await User.findOne({
    _id: new mongoose.Types.ObjectId(id),
  }).populate("order");

  ctx.body = {
    message: `Past Orders received!`,
    orders: orders.order,
  };
}

module.exports = getUserOrders;
