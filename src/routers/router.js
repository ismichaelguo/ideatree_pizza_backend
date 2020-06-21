'use strict'
const Router = require('koa-router');
const router = new Router;

const createUser = require('../controllers/user/create');
const deleteUser = require('../controllers/user/delete');
const updateUser = require('../controllers/user/update');
const getUser = require('../controllers/user/get');


router.post("/user", createUser);
router.get('/user/:id',getUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)

module.exports = router;