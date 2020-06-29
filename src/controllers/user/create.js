const User =require('../../model/User'); 
const bcrypt = require('bcrypt');


async function createUser(ctx){
    const {body} =ctx.request;
    console.log("body",body)
    body.password = await bcrypt.hash(body.password, 10)
    const {email,password} = body;

    if(!password || !email){
        ctx.throw(400,`email or password must be existed! `)
    }
    const user = new User(body);
    console.log("user,user",user)
    const res = await user.save();
    ctx.status = 201;
    ctx.body={
        message:"User Created!",
        res,
    }
}

module.exports = createUser;