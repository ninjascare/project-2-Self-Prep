const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    image: String,
    goods: [{
        type: Schema.Types.ObjectId,
        ref: 'Good'
    }],
    bads: [{
        type: Schema.Types.ObjectId,
        ref: 'Bad'
    }]
})

module.exports = mongoose.model('User', User)