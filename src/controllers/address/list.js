const Address = require("../../model/Address");
const mongoose = require("mongoose");

async function listAddress(ctx) {
  let { page, pageSize } = ctx.params;
  page = +page;
  pageSize = +pageSize;

  if (page < 1) {
    ctx.throw(400, "Page index should be greater than 0");
  }
  if (pageSize < 1) {
    ctx.throw(400, "Page Size should be greater than 0");
  }

  const SKIP_ITEMS = (page - 1) * pageSize;
  const totalItems = await Address.find({}).countDocuments();
  const res = await Address.find({})
    .select("-__v")
    .skip(SKIP_ITEMS)
    .limit(pageSize);
  ctx.status = 200;
  ctx.body = {
    res,
    totalItems,
  };
}

module.exports = listAddress;
