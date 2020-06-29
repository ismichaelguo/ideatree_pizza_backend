const Topping = require("../../model/Topping");
const mongoose = require("mongoose");

async function getTopping(ctx) {
  const topping = await Topping.find();
  if (!topping) {
    ctx.status = 404;
    ctx.body = {
      message: "Topping no found!",
    };
  } else {
    ctx.body = topping;
  }
}

module.exports = getTopping;
