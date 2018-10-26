const User = require('../models/User.js')
const Bad = require('../models/Bad.js')
const Good = require('../models/Good.js')
const mongoose = require('./connection')

const walkedGranny = new Good ({
    name: 'Granny Walking',
    image: 'http://static.tvtropes.org/pmwiki/pub/images/a1608ae074e49534890ee9f550832830.jpg',
    description:'Helped walk an elderly person across the street'
})

const trashPickUp = new Good({
    name: 'Picking up trash',
    image: 'https://www.twincities.com/wp-content/uploads/2015/11/20091025__091026CleanGunsLede.jpg?w=650&h=432',
    description: 'Helped pickup trash from a nearby highway'
})

const bookUp = new Good({
    name: 'Book Pickup',
    image:'https://thebablueprint.com/wp-content/uploads/2015/11/kindness-900x600.jpg',
    description:'I helped someone pick up their items that she dropped from her bookbag'
})

const shots = new Bad ({
    name: 'Just shot someone',
    image:'https://media.giphy.com/media/pBq7d7ItSCTJK/giphy.gif',
    description: "Soo umm.. I just shot someone 'Pew! Pew!' 🔫"
})

const  robbery = new Bad ({
    name: 'I just commited a robbery',
    iamge: 'https://media.giphy.com/media/mW8RpVI5mjGYE/giphy.gif',
    description: 'I just robbed a bank'
})

const gta = new Bad({
    name: 'I just stole a car part',
    image: 'https://media.giphy.com/media/mW8RpVI5mjGYE/giphy.gif',
    description: "I just stole a wheel off of someone's car"
})



















User.remove({})
    .then(() => Good.insertMany([]))
    .then(() => Bad.insertMany([]))
    .then(() => kroger.save())
    .then(() => target.save())
    .then(() => walmart.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())
