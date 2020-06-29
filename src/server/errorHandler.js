// after using koa-jwt middleware ,if token is not existed this middleware would show the error,
// instead of sending jwt error to the users
module.exports = errorHandle = (ctx, next) => {
    return next().catch((err) => {
      if (err.status === 401) {
        ctx.status = 401;
        ctx.body = {
          error: err.originalError ? err.originalError.message : err.message,
        };
      } else {
        throw err;
      }
    });
  }
  
  
