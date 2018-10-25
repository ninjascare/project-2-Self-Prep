const User = require('../models/User')
const Good = require('../models/Good')
const Bad = require('../models/Bad')

const usersController = {
    index: (req, res) => {
        res.send('Hello from users home')
    },
    new: (req, res) => {
        res.send('Hello from new user')
    },
    show: (req, res) => {
        User.findById(req.params.id).then(() => {
            res.send('hello from show of users')
        })
    },
    create: (req, res) => {
        User.create({
            email: req.body.email
        }).then((user) => {
            res.redirect(`/users/${users.id}`)
        })
    }
}

module.exports = usersController