const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Bad = new Schema({
    name: String,
    image: String,
    description: String
})

module.exports = mongoose.model('Bad', Bad)