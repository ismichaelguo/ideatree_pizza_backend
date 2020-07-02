"use strict";
const Router = require("koa-router");
const router = new Router();

// user controller
const createUser = require("../controllers/user/create");
const deleteUser = require("../controllers/user/delete");
const updateUser = require("../controllers/user/update");
const getUser = require("../controllers/user/get");
const Login = require("../controllers/user/login");
const getUserOrders = require('../controllers/user/userOrder')

const getProduct = require("../controllers/products/get");

const createAddress = require("../controllers/address/create");
const getAddress = require("../controllers/address/get");

// order controller
const createOrder = require("../controllers/order/create");
const getOrder = require("../controllers/order/get");
const bulkGetOrder = require("../controllers/order/bulkGet");
const deleteOrder = require("../controllers/order/delete");
const updateOrder = require("../controllers/order/update");
const listOrder = require("../controllers/order/list")

const getStores = require("../controllers/stores/get");

const getTopping = require("../controllers/toppings/get");

//user middleware
const ExpandUsername = require("../middleware/ExpandUsername");

// user CRUD
router.post("/user/login", Login);
router.post("/user/signup", ExpandUsername, createUser);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

//user orders
router.get("/user/order/:id", getUserOrders);

//product
router.get("/products", getProduct);

// topping controller
router.get("/toppings", getTopping);

// order CRUD
router.post("/order", createOrder);
router.get("/order", bulkGetOrder);
router.get("/order/:id", getOrder);
router.delete("/order/:id", deleteOrder);
router.put("/order/:id", updateOrder);
router.get("/order/:page/:pageSize",listOrder);

// address CRUD
router.post("/address", createAddress);
router.get("/address/:id", getAddress);

router.get("/stores", getStores);

module.exports = router;
