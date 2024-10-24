const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
},{timestamps:true})

const authmodel = mongoose.model('Authentication',schema)

module.exports = authmodel