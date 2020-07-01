const Address = require('../../model/Address');
const User = require('../../model/User');

async function getAddress(ctx) {
    const { id } = ctx.params;
    const check = await User.findById(id);
    if (check === null) {
        ctx.status = 404;
            ctx.body = {
                message: "User does not exist!"
            }
    } else {
        const res = await User.findById(id).populate("addresses", "-_id -__v -users");
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

module.exports = getAddress;
