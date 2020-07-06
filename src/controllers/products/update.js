const Product = require("../../model/Product");
const mongoose = require("mongoose");

async function updateProduct(ctx) {
  const { id } = ctx.params;
  const { body } = ctx.request;
  const { idOfItem } = ctx.params;
  console.log("body", body);
  console.log("id", id);
  console.log("idOfItem", idOfItem);
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
  // const res = await Product.findOne(
  //   { _id: new mongoose.Types.ObjectId(id) },
  //   {$arrayElemAt: ["items",1] }
  // );

  // const res = await Product.updateOne(
  // { _id: new mongoose.Types.ObjectId(id) },
  // {"items":{$elemMatch: {id: parseInt(idOfItem)}}},
  // {$set:{"items.price":"20"}}
  // );
  const res = await Product.updateMany(
    { "items.id": itemId },
    {
      $set: {
        "items.$.price": body.price,
        "items.$.name": body.name,
        "items.$.imgDetail": body.imgDetail,
        "items.$.description":body.description
      },
    }
  );
  // const res1 = res.items
  console.log("product====", res);

  // const ress = await res.findOne({"items":{$elemMatch: {id: 1}}})
  // Object.assign(product,body);
  ctx.body = {
    message: "Product updated!",
    res,
  };
}

module.exports = updateProduct;
