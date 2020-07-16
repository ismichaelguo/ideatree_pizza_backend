"use strict";

const mongoose = require("mongoose");
const User = require("../model/User");

async function ExpandUsername(ctx, next) {
  const { body } = ctx.request;
  const { email } = body;
  const user = await User.findOne({ email: email });
  if (user !== null) {
    ctx.throw(400, `${email} is already existed`);
  }
  return next();
}

module.exports = ExpandUsername;
