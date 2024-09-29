const express = require('express')
const app = express()
const fs = require('fs')

// middleware to log req data and call next middleware or route
app.use((req,res,next)=>{
    // getting request user using header
    const requser = req.headers.user || 'not available';
    // logging the request
    fs.appendFile('./log.text',`\nServer: Headers -- requser: ${requser} -- Path name: ${req.path} -- Request method: ${req.method}`,(err)=>{
        if(err)
        console.log(err)
        next();
    })
})
// routes for different http methods having same path 
app
.route('/users')
.get((req,res)=>{
    // setting a custom header starting with 'X' for better identification that it is a custom one
    res.setHeader('X-Server_level', 'Beginner')
    res.json({result:'successfully found users'})
})
.post((req,res)=>{
    res.json({result:'successfully added users'})
})

app.listen(6000,'successfully started server')