const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    Id:{
        type:String,
        required:true
    },
    Message:{
        type:String,
        required:true
    },
},{timestamps:true})

const todomodel = mongoose.model('Todos',schema)

module.exports = todomodel