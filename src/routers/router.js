'use strict'
const Router = require('koa-router');
const router = new Router;

// user controller
const createUser = require('../controllers/user/create');
const deleteUser = require('../controllers/user/delete');
const updateUser = require('../controllers/user/update');
const getUser = require('../controllers/user/get');
const getProduct = require('../controllers/products/get');
const createAddress = require('../controllers/address/create');
const getAddress = require('../controllers/address/get');

// order controller
const createOrder = require('../controllers/order/create');
const getOrder = require('../controllers/order/get');
const bulkGetOrder = require('../controllers/order/bulkGet');
const deleteOrder = require('../controllers/order/delete');
const updateOrder = require('../controllers/order/update');

const getStores = require('../controllers/stores/get');

// user CRUD
router.post("/user", createUser);
router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

router.get('/products', getProduct)

// order CRUD
router.post("/order", createOrder)
router.get('/order', bulkGetOrder)
router.get('/order/:id', getOrder)
router.delete('/order/:id', deleteOrder)
router.put('/order/:id', updateOrder)

// address CRUD
router.post('/address', createAddress);
router.get('/address/:id', getAddress);

router.get('/stores', getStores);


module.exports = router;
