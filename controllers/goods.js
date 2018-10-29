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
        const usersId = req.params.usersId
        res.render('good/new', {
            id: usersId
        })

    },
    create: (req, res) => {
    const usersId = req.params.usersId
    User.findById(usersId).then((user)=>{
        Good.create(req.body).then((createdGood)=>{
            user.goods.push(createdGood)
            user.save()
            res.redirect(`/users/${usersId}/goods`)
        })
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