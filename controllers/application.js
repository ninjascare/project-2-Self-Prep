const User = require('../models/User')
const Good = require('../models/Good')
const Bad = require('../models/Bad')

const applicationController = {
    index: (req, res) => {
        
        User.find({})
        .then((Users)=>{
            res.render('application/index', {
                Users: Users
            })
            
        })
    }
}

module.exports = applicationController