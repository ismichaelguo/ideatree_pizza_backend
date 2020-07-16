require("dotenv-safe").config();
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const { oas } = require("koa-oas3");
// const cors = require('koa2-cors')
const cors = require("koa2-cors");
const jwt = require("koa-jwt");
const isRevoked = require("./src/server/isRevoked");
const config = require("config");

// import environment variables
const databaseConfig = config.get("MongoDB");
const appPort = config.get("App.port");

const mongoose = require("mongoose");
const app = new Koa();
const router = require("./src/routers/router");

// config mongoose, connect to mongodb
mongoose
  .connect(
    `mongodb+srv://${databaseConfig.userName}:${databaseConfig.password}@cluster0-nzyqb.mongodb.net/${databaseConfig.database}`,
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .catch((error) => console.log(error));
mongoose.connection.on("error", (err) => {
  console.log(err);
});

app.use(
  oas({
    file: `${__dirname}/openapi.yaml`,
    endpoint: "/openapi.json",
    uiEndpoint: "/",
    validatePaths: ["/else"],
  })
);

app.use(
  cors({
    origin: "http://localhost:3000", // 指定origin为前端地址
    credentials: true,
    allowMethods: ["GET", "POST", "DELETE", "PUT"],
    maxAge: 86400,
  })
);

app.use(isRevoked);
const secret = "jwt_secret";
app.use(
  jwt({
    secret,
  }).unless({
    //public apis, which do not have to access with token
    path: [/\/login/, /\/signup/, /^\/products/, /^\/stores/, /^\/toppings/],
  })
);
app.use(bodyParser());
app.use(router.routes());

app.listen(process.env.PORT || appPort, () => {
  console.log("the server is listening on 8080");
});
