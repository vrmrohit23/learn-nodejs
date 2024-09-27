const express = require('express')
var data = require('./mock_data.json')
const fs = require('fs');
const app = express();

// middleware plugin
app.use(express.urlencoded({extended:false}))

app.use((req,res,next)=>{
    if(req.method === 'GET') req.url = '/users'
    app.use((req,res,next)=>{
        console.log('inner method bitch')
        res.send(req.url)
    })
    next();
})
app.use((req,res,next)=>{
    fs.appendFile('./log.text',`\n${Date.now()}: ${req.method}: ${req.path}`,(err)=>{
        next();
    })
})

app.get('/', (req, res) => {
    res.send('U are at home page')
})

// path for returning html rendered page
app.get('/users', (req, res) => {
    const html = `<ul> ${data.map((item) => `<li>${item.first_name}</li>`).join("")} </ul>`
    res.send(html)
})

// path for returning json object data
app.get('/api/users', (req, res) => {
    return res.json(data)
})


// multi routing from same route
app
    .route('/api/users/:id')
    .get((req, res) => {
        // returning specific user data with id
        const id = Number(req.params.id)
        const user = data.find((item) => item.id === id)
        return res.send(user)
    })
    .delete((req, res) => {
        // delete a user with id
        
        const id = Number(req.params.id)
        const user = data.find(item => item.id === id)
        data = data.filter(item =>item.id !== id)
        fs.writeFile('./mock_data.json',JSON.stringify(data),(err)=>{
            if(user)
            return res.json({status:'succesfully deleted',user:user})
            else return res.json({status:'Not found'})
        })
        
    })
    .patch((req, res) => {
        // edit user data with id
        
        const id = Number(req.params.id)
        const body = req.body
        data = data.map(item=>{
            return item.id !== id? item:{
                id:item.id,
                ...body
            }
        })
        fs.writeFile('./mock_data.json',JSON.stringify(data),(err)=>{
            return res.send('Successfully updated')
        })
       
    })

app.post('/api/users',(req, res) => {
    // add a new user
    const body = req.body
    const id = data[data.length-1].id + 1
    data.push({id:id,...body})
   
    fs.writeFile('./mock_data.json',JSON.stringify(data),(err)=>{
       return res.json({status:'success',id:id})
    })
 
})



app.listen(8000, () => console.log('server is started'))