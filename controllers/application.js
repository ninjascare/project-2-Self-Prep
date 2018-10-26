const User = require('../models/User')
const Good = require('../models/Good')
const Bad = require('../models/Bad')

const applicationController = {
    index: (req, res) => {
        User.find().populate('name').then((user)=>{
            res.render('application/index', {
                user: user
            })

        })
    }
}

module.exports = applicationController