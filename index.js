const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const { oas } = require('koa-oas3');
// const cors = require('koa2-cors')
const cors = require('@koa/cors');
var jwt = require('koa-jwt');
const errorHandler = require('./src/server/errorHandler');



const mongoose = require('mongoose');
const app = new Koa;
const router = require('./src/routers/router');

// config mongoose, connect to mongodb 
//mongodb://127.0.0.1:27017/
//mongodb+srv://michael_guo:As5821647@cluster0-nzyqb.mongodb.net/idea-pizza?retryWrites=true&w=majority
mongoose
  .connect('mongodb+srv://michael_guo:As5821647@cluster0-nzyqb.mongodb.net/idea-pizza?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true })
  .catch(error => console.log(error))
mongoose.connection.on('error', err => {
  console.log(err);
})

app.use(oas({
  file: `${__dirname}/openapi.yaml`,
  endpoint: '/openapi.json',
  uiEndpoint: '/',
  validatePaths: ['/else'],
}))

const secret = 'jwt_secret'
  app
  .use(jwt({
    secret,
  }).unless({
    //public apis, which do not have to access with token
    path: [/\/signup/, /\/login/,/^\/products/],
  }))
app.use(bodyParser());
app.use(router.routes());
app.use(errorHandler);


app.use(cors());





app.listen(8080, () => {
  console.log("the server is listening on 8080")
});