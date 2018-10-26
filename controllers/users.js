const User = require('../models/User')
const Good = require('../models/Good')
const Bad = require('../models/Bad')

const usersController = {
    new: (req, res) => {
        res.send('Hello from new user')
    },
    create: (req, res) => {
        User.create({
            name: req.body.name,
            image: req.body.image
        }).then((user) => {
            res.redirect(`/users/${users.id}`)
        })
    },
    show: (req, res) => {
        User.findById(req.params.id).then(() => {
            res.send('hello from show of users')
        })
    }
}

module.exports = usersController