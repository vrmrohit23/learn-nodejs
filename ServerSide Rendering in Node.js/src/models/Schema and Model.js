const mongoose = require('mongoose')


const Schema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
    },
    Name:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
        required:true,
    },
},{timeStamps:true})

const model = mongoose.model('favMonument',Schema)

module.exports = model;
