const Address = require('../../model/Address');
const User = require('../../model/User');
const mongoose = require('mongoose');

async function getAddressByUserId(ctx) {
    const { id } = ctx.params;
    const check = await User.findById({ _id: new mongoose.Types.ObjectId(id) });
    if (check === null) {
        ctx.status = 404;
            ctx.body = {
                message: "User does not exist!"
            }
    } else {
        const res = await User.findById({ _id: new mongoose.Types.ObjectId(id) }).populate("addresses", "-_id -__v -users");
        if (res.addresses.length) {

            ctx.status = 200;
            ctx.body = res.addresses;
        } else {
            ctx.status = 404;
            ctx.body = {
                message: "Can't find any address!"
            }

        }
    }

}

module.exports = getAddressByUserId;
