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
        const {email,password,phone,order,name}=body;
        if(!email&&!password&&!phone&&!name&&order){
            const orderId = body.order 
            console.log("order_id",orderId)

            const res = await User.updateOne(
                {_id: new mongoose.Types.ObjectId(id)},
                {$push:{order:orderId}}
            )
            ctx.body = {
                message:"order id updated",
                res,
            }
        }else{
            Object.assign(user,body);
            const res = await user.save();
            ctx.body = {
                message: "Updated!",
                res
            }
        }
        Object.assign(user,body);
        const res = await user.save();
        ctx.body = {
            message: "Updated!",
            res
        }
    }
}

module.exports = updateUser;