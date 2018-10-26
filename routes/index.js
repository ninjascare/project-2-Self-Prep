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
router.get('/users', usersController.create)
router.get('/users/:id', usersController.show)

// goods page



// bads page



module.exports = router;