const User = require('../models/User')
const Good = require('../models/Good')
const Bad = require('../models/Bad')

const usersController = {
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
            image: req.body.image
        }).then((ser) => {
            res.redirect(`/ser/${users.id}`)
        })
    }
}

module.exports = usersController