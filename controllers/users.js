const User = require('../models/User')
const Good = require('../models/Good')
const Bad = require('../models/Bad')

const usersController = {
    index: (req, res) => {
        User.find({})
            .then((us) => {
                res.render('user/index', {
                    us: us
                })
            })
    },
    new: (req, res) => {
        res.render('user/new')
    },
    show: (req, res) => {
        User.findById(req.params.usersId).populate(`goods`, `bads`).then((use) => {
            res.render('user/show', {
                use: use
            })
        })
    },
    create: (req, res) => {
        User.create({
            name: req.body.name,
            image: req.body.image
        }).then((ser) => {
            res.redirect(`/users/${ser._id}`)
        })
    },
    edit: (req, res) => {
        User.findById(req.params.usersId).then((uu) => {
            res.render('user/edit', {
                uu: uu
            })
        })
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.usersId, req.body).then((updatedUser) => {
            res.redirect(`/users/${updatedUser._id}`)
        })
    },
    delete: (req, res) => {
        User.findByIdAndRemove(req.params.usersId).then(() => {
            res.redirect('/users')
        })

    }
}

module.exports = usersController