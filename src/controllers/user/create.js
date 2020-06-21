const User =require('../../model/User'); 

async function createUser(ctx){
    const {body} =ctx.request;
    const {email,password} = body;
    if(!password || !email){
        ctx.throw(400,`email or password must be existed! `)
    }
    const user = new User(body);
    const res = await user.save();
    ctx.status = 201;
    ctx.body={
        message:"User Created!",
        res,
    }
}

module.exports = createUser;