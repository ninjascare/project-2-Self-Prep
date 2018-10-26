const User = require('../models/User')
const Good = require('../models/Good')
const Bad = require('../models/Bad')

const badsController = {
    new: (req,res) =>{
        res.render('bad/new')
    },
    create:(req, res) =>{
        Bad.create(req.body).then((savedBad)=>{
            res.send(savedBad)
        })
    },
    show: (req, res)=>{
        Bad.findById(req.params.Id).then((bd)=>{
            res.render('bad/show', {
                gd: gd
            })
        })
    },
    update:(req, res)=>{
        res.send('hello from bads update')
    }
}

module.exports = badsController