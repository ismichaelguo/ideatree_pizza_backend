const Product = require("../../model/Product");
const mongoose = require("mongoose");

async function getProduct(ctx) {
  const product = await Product.find();
  if (!product) {
    ctx.status = 404;
    ctx.body = {
      message: "Product no found!",
    };
  } else {
    (ctx.status = 200), (ctx.body = product);
  }
}

module.exports = getProduct;
