const Store = require("../../model/Store");
const mongoose = require("mongoose");

async function getStore(ctx) {
  const stores = await Store.find();
  if (!stores) {
    ctx.status = 404;
    ctx.body = {
      message: "Stores not found!",
    };
  } else {
    ctx.status = 200;
    ctx.body = stores;
  }
}

module.exports = getStore;
