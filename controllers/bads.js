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
    show: (req, res) => {
        Bad.findById(req.params.badsId).populate('name').then((bd) => {
            res.render('bad/show', {
                bd: bd
            })
         
        })
    },
    create: (req, res) => {
        Bad.create({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description
        }).then((ba) => {
            res.redirect(`/users/:id/bads/${ba._id}`)
        })
    },
    update: (req, res) => {
        res.send('hello from bads update')
    }
}

module.exports = badsController