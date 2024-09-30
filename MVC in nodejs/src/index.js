const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./routes/user')
const makeconnection = require('./connection')


makeconnection("mongodb://127.0.0.1:27017/Clients")

app.use(express.urlencoded({extended:false}))

app.use('/users',router)


app.listen(300,console.log('server started'))