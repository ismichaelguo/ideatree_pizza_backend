
const User = require('../../model/User');
const mongoose = require('mongoose');
const jsonwebtoken =require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function Login(ctx){
    const {body}= ctx.request;
    const {email,password} = body
    const user = await User.findOne({email:email});
    if(!user.length){
        ctx.status = 401;
        ctx.body = {
            message: "Username is not existed!"
        }
    }
    const secret = 'jwt_secret'
    console.log("password_input",password)
    console.log("password_database",user.password)

    const compare = await bcrypt.compare(password, user.password)
    console.log("compare",compare)

    if(compare){
        ctx.status = 200;
        ctx.body = {
            message:" Log in successful!",
            //jwt.sign(payload, secretOrPrivateKey, [options, callback])
            token: jsonwebtoken.sign({
                data:user,
                exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24), // 60 seconds * 60 minutes * 24 = 1 day
            },secret)
        }
    }else{
        ctx.status=401;
        ctx.body = {
            message:"The password is wrong!"
        }
    }

}

module.exports = Login;