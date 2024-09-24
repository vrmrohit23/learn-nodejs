const express = require('express')

// app is an instance of express
const app = express()

// get, post, put, patch, delete are the http methods which can also be used using express and they do the same work as intended for http
app.get('/',(req,res)=>{
    res.send('We are at home page')
})

app.get('/about',(req,res)=>{
    res.send('Hello sir/mam i am learning backend development')
})


app.listen(3000,()=>console.log('server is started'))