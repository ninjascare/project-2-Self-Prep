const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Bad = new Schema({

})

module.exports = mongoose.model('Bad', Bad)