const express = require('express')
const router = require('./routes/URL_Routes')
const createConnection = require('./connection')

createConnection('mongodb://127.0.0.1:27017/URL_Databse')

const app = express()

app.use(express.json())

app.use('/shorturl', router)

app.use('/',router)

app.listen(300, console.log('Server is created successfully'))