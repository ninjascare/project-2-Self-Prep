const User = require('../models/User')
const Good = require('../models/Good')
const Bad = require('../models/Bad')

const badsController = {
    index: (req, res) => {
        User.findById(req.params.usersId).populate(`bads`).then((ur) => {
            res.render('bad/index', {
                ur: ur
            })
        })
    },
    new: (req, res) => {
        const userId = req.params.usersId
        res.render('bad/new', {
            id: userId
        })
    },
    show: (req, res) => {
        Bad.findById(req.params.badsId).populate('name').then((bd) => {
            res.render('bad/show', {
                bd: bd
            })

        })
    },
    create: (req, res) => {
        const userId = req.params.usersId
        User.findById(userId)
            .then((user) => {
                Bad.create(req.body).then((createdBad) => {
                    user.bads.push(createdBad)
                    user.save()
                    res.redirect(`/users/${userId}/bads`)
                })
            })
    },
    update: (req, res) => {
        res.send('hello from bads update')
    }
}

module.exports = badsController