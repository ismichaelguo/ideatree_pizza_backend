const User = require('../../model/User');
const mongoose = require('mongoose');

async function updateUser(ctx){
    const {body} =ctx.request;
    const {id} =ctx.params;
    console.log("======",new mongoose.Types.ObjectId(id));

    const user = await User.findOne({_id: new mongoose.Types.ObjectId(id)});
    if(!user){
        ctx.status = 404;
        ctx.body = {
            message: `User ${id} no found`
        }
    }else{
        ctx.status = 201;
        Object.assign(user,body);
        const res = await user.save();
        ctx.body = {
            message: "Updated!",
            res
        }
    }
}

module.exports = updateUser;