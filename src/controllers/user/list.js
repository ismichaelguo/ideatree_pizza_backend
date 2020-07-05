"use strict";

const User = require("../../model/User");

async function listUser(ctx) {
  let { page, pageSize } = ctx.params;
  page = +page;
  pageSize = +pageSize;

  if (page < 1) {
    ctx.throw(400, "page must be greater than 0");
  }

  if (pageSize < 1) {
    ctx.throw(400, "pageSize must be greater than 0");
  }

  const skip = (page - 1) * pageSize;
  const total = await User.find().count();
  const res = await User.find({}).skip(skip).limit(pageSize);

  ctx.body = {
    results: res,
    total,
  };
}

module.exports = listUser;
