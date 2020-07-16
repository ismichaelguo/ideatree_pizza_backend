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

<<<<<<< HEAD
  // const ress = await res.findOne({"items":{$elemMatch: {id: 1}}})
  // Object.assign(product,body);
  ctx.status = 201;
||||||| merged common ancestors
  // const ress = await res.findOne({"items":{$elemMatch: {id: 1}}})
  // Object.assign(product,body);
=======
>>>>>>> 7bcb728cd877d650d58723614e59797931467927
  ctx.body = {
    message: "Product updated!",
    res,
  };
}

module.exports = updateProduct;
