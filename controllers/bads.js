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
        res.render('bad/new')
    },
    create: (req, res) => {
        Bad.create(req.body).then((savedBad) => {
            res.send(savedBad)
        })
    },
    show: (req, res) => {
        Bad.findById(req.params.Id).populate(`name`).then((bd) => {
            res.render('bad/show', {
                bd: bd
            })
        })
    },
    update: (req, res) => {
        res.send('hello from bads update')
    }
}

module.exports = badsController