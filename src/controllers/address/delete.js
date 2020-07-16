const Address = require("../../model/Address");
const mongoose = require("mongoose");

async function deleteAddress(ctx) {
  const { id } = ctx.params;
  const address = await Address.findOne({
    _id: new mongoose.Types.ObjectId(id),
  });

  if (!address) {
    ctx.status = 404;
    ctx.body = {
      message: `Address: ${id} doesn't find`,
    };
  } else {
    ctx.status = 200;
    const res = await Address.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    ctx.body = {
      message: `Address ${id} deleted`,
    };
  }
}
module.exports = deleteAddress;
