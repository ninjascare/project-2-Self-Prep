const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Good = new Schema ({

})

module.exports = mongoose.model('Good', Good)