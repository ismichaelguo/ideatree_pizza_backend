const { compareSync } = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
// const jwt = require('koa-jwt');

function getToken(user) {
  // const parts1 = ctx.header.authorization.split(" ");
  // const token = parts1[1];
  // const email = jsonwebtoken.decode(token).data;
  // console.log("decode",email)
  const secret = "jwt_secret";
  const newToken = jsonwebtoken.sign(
    {
      data: user,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 60 seconds * 60 minutes * 24 = 1 day
    },
    secret
  );
  return newToken;
}

function isRevoked(ctx, next) {
  //if there is token in the header
  if (ctx.header && ctx.header.authorization) {
    const parts = ctx.header.authorization.split(" ");
    console.log("length", parts.length);
    if (parts.length === 2) {
      //take token from the request header
      const scheme = parts[0];
      const token = parts[1];
      console.log("token", token);
      //Bearer authentication
      if (/^Bearer$/i.test(scheme)) {
        try {
          //jwt.verify方法验证token是否有效
          const secret = "jwt_secret";
          //jwt.verify(token, secretOrPublicKey, [options, callback])
          jsonwebtoken.verify(token, secret, {
            //complete: return an object with the decoded { payload, header, signature }
            //instead of only the usual content of the payload.
            complete: true,
          });
        } catch (error) {
          //token过期 生成新的token
          if (!jsonwebtoken.decode(token).data) {
            ctx.throw(
              401,
              "Protected resource, use Authorization header to get access\n"
            );
          } else {
            const user = jsonwebtoken.decode(token).data;
            const newToken = getToken(user);
            //将新token放入Authorization中返回给前端
            ctx.res.setHeader("authorization", newToken);
          }
        }
      }
    }
  }

  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = "Protected resource, use Authorization header to get access\n";
    } else {
      throw err;
    }
  });
}

module.exports = isRevoked;
