const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Good = new Schema ({
    name: String,
    image: String,
    description: String
})

module.exports = mongoose.model('Good', Good)