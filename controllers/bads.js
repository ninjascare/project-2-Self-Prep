const User = require('../models/User')
const Good = require('../models/Good')
const Bad = require('../models/Bad')

const badsController = {
    index: (req, res) => {
        User.find({}).populate(`bads`).then((ue) => {
            res.render('bad/index', {
                ue: ue
            })
        })
    },
    new: (req, res) => {
        res.render('bad/new')
        res.send('Hello from bads new')
    },
    create: (req, res) => {
        Bad.create(req.body).then((savedBad) => {
            res.send(savedBad)
        })
    },
    show: (req, res) => {
        Bad.findById(req.params.Id).populate('name').then((bd) => {
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