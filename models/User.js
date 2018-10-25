const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    image: String,
    goods: [{
        type: Schema.type.ObjectId,
        ref: 'Good'
    }],
    bads: [{
        type: Schema.type.ObjectId,
        ref: 'Bad'
    }]
})

module.exports = mongoose.model('User', User)