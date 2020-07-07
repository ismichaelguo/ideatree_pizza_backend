const Address = require('../../model/Address');
const mongoose = require('mongoose');

async function updateAddress (ctx) {
  const { body } = ctx.request;
  const { id } = ctx.params;
  const address = await Address.findOne({ _id: new mongoose.Types.ObjectId(id) });

  if (!address) {
    ctx.status = 404;
    ctx.body = {
      message: `Address ${id} no found`
    }
  } else {
    ctx.status = 200;
    Object.assign(address, body);
    const res = await address.save();
    ctx.body = {
      message: "Updated!",
      res
    }
  }
}

module.exports = updateAddress;