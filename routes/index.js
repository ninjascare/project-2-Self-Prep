var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application')
const usersController = require('../controllers/users')
const goodsController = require('../controllers/goods')
const badsController = require('../controllers/bads')


// home page
router.get('/', applicationController.index)

// users page
router.get('/users', usersController.index)
router.get('/users/new', usersController.new)
router.post('/users', usersController.create)
router.get('/users/:usersId', usersController.show)

// goods page
router.get('/users/:usersId/goods', goodsController.index)
router.get('/users/:usersId/goods/new', goodsController.new)
router.post('/users/:usersId/goods', goodsController.create)
router.get('/users/:usersId/goods/:goodsId', goodsController.show)
router.patch('/users/:usersId/goods/:id', goodsController.update)


// bads page
router.get('/users/:usersId/bads', badsController.index)
router.get('/users/:usersId/bads/new', badsController.new)
router.post('/users/:usersId/bads', badsController.create)
router.get('/users/:usersId/bads/:badsId', badsController.show)
router.patch('/users/:usersId/bads/:badsId', badsController.update)




module.exports = router;