const express = require('express')
const authrouter = require('./src/routes/authentication')
const staticRouter = require('./src/routes/static')
const todorouter = require('./src/routes/todo')
const cookieParser = require('cookie-parser')
const app = express();
const path = require('path')
const connection = require('./src/connection')
const checkUser = require('./src/middlewares/checkUser')

connection('mongodb://127.0.0.1:27017/Todo_App')

app.set('view engine','ejs')
app.set('views',path.resolve('./src/views'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/',staticRouter)
app.use('/auth',authrouter)
app.use('/todos',checkUser,todorouter)

app.listen(8002,()=>console.log('server started'))