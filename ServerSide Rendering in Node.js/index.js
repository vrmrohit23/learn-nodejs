const express = require('express')
const path = require('path')
const connect = require('./connection');
const router = require('./src/routes/FavMonument_Routes');
const app = express();


connect('mongodb://127.0.0.1:27017/URL_Databse');


app.set('view engine','ejs');
app.set('views',path.resolve('./src/views'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/data',router)

app.use('/',router);

app.listen(8000,()=>console.log('succesfully launched'))

