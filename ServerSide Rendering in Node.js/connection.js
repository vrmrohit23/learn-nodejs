const { response } = require('express')
const mongoose = require('mongoose')


function createConnection(url){
    mongoose.connect(url)
    .then(() => console.log('connected successfully'))
    .catch(error => console.log(error))
}

module.exports = createConnection;