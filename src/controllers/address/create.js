const Address = require('../../model/Address');
const User = require('../../model/User');
const mongoose = require('mongoose');

async function createAddress(ctx) {
    const { body } = ctx.request;
    const { userId, ...rest } = body;
    const { streetName,streetNum,suburb} = rest;

    if (userId&&streetName&&streetNum&&suburb) {
        const check = await User.findById({ _id: new mongoose.Types.ObjectId(userId) });
        if(check){
            const newAddress = new Address(rest);
            let addressRes = await newAddress.save();
            const { _id } = addressRes;


            addressRes = await Address.findByIdAndUpdate(_id,
                { $push: { users: userId } },
                { upsert: true, new: true, useFindAndModify: false });
            userRes = await User.findByIdAndUpdate(userId,
                { $push: { addresses: _id } },
                { upsert: true, new: true, useFindAndModify: false });

            ctx.status = 201;
            ctx.body = {
                message: "Address Created!",
                address: addressRes,
                user: userRes
            }
        }else{
            ctx.status = 400;
            ctx.body = {
                message: `User: ${userId} does not exist`,
            }
        }
        
    }else{
        ctx.status = 400;
            ctx.body = {
                message: "Missing information",
            }
    }
}

module.exports = createAddress;