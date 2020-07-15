const User = require('../../model/User')
const mongoose = require('mongoose');

async function getUser(ctx){
    console.log("4444")
    const {id} = ctx.params;
    const user = await User.findOne({_id: new mongoose.Types.ObjectId(id)});
    if(!user){
        ctx.status = 404;
        ctx.body = {
            message:"User no found!"
        }
    }else{
        ctx.status = 200;
        ctx.body = user;
    }

}

module.exports = getUser;