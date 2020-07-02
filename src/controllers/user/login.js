const User = require("../../model/User");
const mongoose = require("mongoose");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function Login(ctx) {
  const { body } = ctx.request;
  const { email, password } = body;
  console.log("body", body);
  const user = await User.findOne({ email: email });
  console.log("user",user)
  if (!user.length) {
    ctx.status = 401;
    ctx.body = {
      message: "Username is not existed!",
    };
  }
  //secret key, same with the key decode the token
  const secret = "jwt_secret";

  const compare = await bcrypt.compare(password, user.password);
  console.log("compare", compare);
  const token = jsonwebtoken.sign(
    {
      data: user.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 60 seconds * 60 minutes * 24 = 1 day
    },
    secret
  );

  if (compare) {
    ctx.status = 200;
    ctx.cookies.set("tokenName", token, {
      //cookie expire time
      expires: new Date("2020-08-10"),
      //cookie existing time
      maxAge: 60 * 60,
      httpOnly: false,
    });
    console.log("cookie", ctx.cookies.get("tokenName"));
    ctx.body = {
      message: " Log in successful!",
      //jwt.sign(payload, secretOrPrivateKey, [options, callback])
      token: token,
      cookie: ctx.cookies.get("tokenName"),
      user:user.email,
      id:user.id,
    };
  } else {
    ctx.status = 401;
    ctx.body = {
      message: "The password is wrong!",
    };
  }
}

module.exports = Login;
