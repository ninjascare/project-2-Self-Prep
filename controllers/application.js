const User = require('../models/User')
const Good = require('../models/Good')
const Bad = require('../models/Bad')

const applicationController = {
    index: (req, res) => {
       res.render('application/index')
    }
}

module.exports = applicationController