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
router.get('/stores/:id', usersController.show)
router.get('stores', usersController.create)

// goods page



// bads page



module.exports = router;