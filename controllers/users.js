const User = require('../models/User')
const Good = require('../models/Good')
const Bad = require('../models/Bad')

const usersController = {
    index: (req, res) => {
        User.find({}).populate('goods', 'bads')
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
        User.findById(req.params.id).then((use) => {
            res.render('user/show', {
                use: use
            })
        })
    },
    create: (req, res) => {
        User.create({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description
        }).then((ser) => {
            res.redirect(`/ser/${users.id}`)
        })
    }
}

module.exports = usersController