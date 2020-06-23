const Address = require('../../model/Address');
const User = require('../../model/User');

async function createAddress(ctx) {
    const { body } = ctx.request;
    const { userId, ...rest } = body;
    const { streetName} = rest;
    if (!streetName) {
        ctx.throw(400, `missing information `)
    } else {
        const newAddress = new Address(rest);
        let addressRes = await newAddress.save();
        const { _id } = addressRes;

        if (userId) {
            addressRes = await Address.findByIdAndUpdate(_id,
                { $push: { users: userId } },
                { upsert: true, new: true, useFindAndModify: false });
            userRes = await User.findByIdAndUpdate(userId,
                { $push: { addresses: _id } },
                { upsert: true, new: true, useFindAndModify: false });
        }
        ctx.status = 201;
        ctx.body = {
            message: "Address Created!",
            address: addressRes,
            user: userRes
        }
    }
}

module.exports = createAddress;