const express = require('express')
const app = express()
let data = require('./mock_data.json')
const fs = require('fs')


// parse urlencoded data
app.use(express.urlencoded({ extended: false }))

// middlewares to log req data and call next middleware or route
app.use((req, res, next) => {
    // getting request user using header
    const requser = req.headers.user || 'not available';
    // logging the request
    fs.appendFile('./log.text', `\nServer: StatusCodes -- requser: ${requser} -- Path name: ${req.path} -- Request method: ${req.method}`, (err) => {
        if (err)
            console.log(err)
        next();
    })

})


// routes for different http methods having same path 
app
    .route('/users')
    .get((req, res) => {

       return res.json(data)
    })
    .post((req, res) => {
        const id = data[data.length - 1].id + 1;
        const body = req.body
        if (!body || !body.first_name || !body.last_name || !body.email || !body.education) {
           return res.status(400).json({ result: 'error', message: 'All the fields are neccessary' })
        }
        
        data.push({ id: id, ...body })
        fs.writeFile('./mock_data.json',JSON.stringify(data),()=>{

          return res.json({ result: 'successfully added user', id: id })
        })

    })
app
    .route('/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id)
        const user = data.find(item => item.id === id);
        // sending 404 if no user found with given id
        if(!user) return res.status(404).json({result:'No user found'})
        return res.json(user)
    })
    .delete((req, res) => {
        const id = Number(req.params.id)
        const user = data.find(item => item.id === id);
        // sending 404 if no user found with given id
        if (!user) return res.status(404).json({ result: 'error', message: 'No user found' })
        data.splice(data.indexOf(user), 1);
        // write data to the source file 
        fs.writeFile('./mock_data.json',JSON.stringify(data),(err)=>{
           return res.json({ result: 'successfully deleted user', deleted_user: user })
        })    
    })

app.listen(6000, console.log('successfully started server'))