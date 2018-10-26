const User = require('../models/User')
const Good = require('../models/Good')
const Bad = require('../models/Bad')

const goodsController = {
    index: (req, res) => {
        const usersId = req.params.usersId
        User.findById(usersId).populate('User.goods').then((ur) => {
            const goods = ur.goods
            res.send(goods)
        })
    },
    new: (req, res) => {
        res.render('good/new')

    },
    create: (req, res) => {
        Good.create(req.body).then((savedGood) => {
            res.send(savedGood)
        })
    },
    show: (req, res) => {
        Good.findById(req.params.id).populate('name').then((gd) => {
            res.render('good/show', {
                gd: gd
            })
        })
    },
    update: (req, res) => {
        res.send('hello from good update')
    }
}

module.exports = goodsController