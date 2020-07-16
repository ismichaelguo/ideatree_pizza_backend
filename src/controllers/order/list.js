"use strict";

const Order = require("../../model/Order");
const mongoose = require("mongoose");

async function listOrder(ctx) {
  let { page, pageSize } = ctx.params; // array type due to the middleware `expandIds`
  page = +page; // + will convert string to number
  pageSize = +pageSize;

  if (page < 1) {
    ctx.throw(400, "page index must be greater than 0");
  }
  if (pageSize < 1) {
    ctx.throw(400, "page size must be greater than 0");
  }

  const SKIP = (page - 1) * pageSize;
  const totalItems = await Order.find({}).countDocuments();
  const res = await Order.find({}).skip(SKIP).limit(pageSize);
  ctx.body = {
    res,
    totalItems,
  };
}

module.exports = listOrder;
