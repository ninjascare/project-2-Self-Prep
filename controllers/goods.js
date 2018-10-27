const User = require('../models/User')
const Good = require('../models/Good')
const Bad = require('../models/Bad')

const goodsController = {
    index: (req, res) => {
        User.findById(req.params.usersId).populate(`goods`).then((ur) => {
            res.render(`good/index`, {
                ur: ur
            })
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
        User.findById(req.params.id).populate(`goods`).then((gd) => {
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