const Product = require("../../model/Product");
const mongoose = require("mongoose");

async function updateProduct(ctx) {
  const { id } = ctx.params;
  const { body } = ctx.request;
  const { idOfItem } = ctx.params;
  let itemId = parseInt(idOfItem);

  const product = await Product.findOne({
    _id: new mongoose.Types.ObjectId(id),
  });

  if (!product) {
    ctx.status = 404;
    ctx.body = {
      message: "Product not found!",
    };
  }

  const res = await Product.updateMany(
    { "items.id": itemId },
    {
      $set: {
        "items.$.price": body.price,
        "items.$.name": body.name,
        "items.$.imgDetail": body.imgDetail,
        "items.$.description": body.description,
      },
    }
  );

  ctx.body = {
    message: "Product updated!",
    res,
  };
}

module.exports = updateProduct;
