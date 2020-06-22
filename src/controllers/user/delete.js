const User = require('../../model/User');
const mongoose = require('mongoose');


async function deleteUser(ctx){
    const {id} = ctx.params;
    const user = await User.findOne({_id: new mongoose.Types.ObjectId(id)});

    if(!user){
        ctx.status = 404;
        ctx.body = {
            message:`User:${id} can't find`,
        }
    }else{
        ctx.status= 201;
        const res = await User.deleteOne({_id: new mongoose.Types.ObjectId(id)});
        const description = res.deletedCount       

        ctx.body = {
            message:"Deleted!",
            description,
        }
    }

    

}

module.exports = deleteUser;

