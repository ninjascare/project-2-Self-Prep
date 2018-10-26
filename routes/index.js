var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application')
const usersController = require('../controllers/users')
const goodsController = require('../controllers/goods')
const badsController = require('../controllers/bads')


// home page
router.get('/', applicationController.index)

// users page
router.get('/users/new', usersController.new)
router.post('/users', usersController.create)
router.get('/users/:id', usersController.show)

// goods page
router.get('/goods/new', goodsController.new)
router.post('/goods', goodsController.create)
router.get('/goods/:id', goodsController.show)
router.patch('/goods/:id', goodsController.update)


// bads page
router.get('/bads/new', badsController.new)
router.post('/goods', badsController.create)
router.get('/bads/:id', badsController.show)
router.patch('/badss/:id', badsController.update)




module.exports = router;