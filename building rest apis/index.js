const express = require('express')
const data = require('./mock_data.json')
const app = express();

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
        return res.json({ status: 'pending' })
    })
    .patch((req, res) => {
        // edit user data with id
        return res.json({ status: 'pending' })
    })

app.post('/api/users',(req, res) => {
    // add a new user
    return res.json({ status: 'pending' })
})



app.listen(8000, () => console.log('server is started'))