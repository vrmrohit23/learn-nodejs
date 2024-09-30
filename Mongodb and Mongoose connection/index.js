const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Connection to mongoDB

mongoose
.connect("mongodb://127.0.0.1:27017/Clients")
.then(()=>console.log('succesfully connnected to database'))
.catch(err => console.log('MongoDB error --> ',err))

// Schema created
const userschema = new mongoose.Schema({
    first_name :{
        type:String,
        required : true,
    },
    last_name : {
        type: String,
    },
    email: {
        type:String,
        required : true,
        unique:true,
    },
    education :{
        type:String,
        required : true,
    }
},{timestamps:true})

// mongoDB model is initialized
const user = mongoose.model('user',userschema) 

app.use(express.urlencoded({extended:false}))

app
.route('/users')
.get(async(req,res)=>{
    // getting all users from mongoDB
    const data = await user.find();
    const htmlpage = `<ul> 
    ${data.map((item)=>`<li>${item.id} -- ${item.first_name} -- ${item.email}</li>`).join('')}
    <ul/>`;
    return res.send(htmlpage)
})
.post(async(req,res)=>{
    const data = req.body;
    if(!data || !data.first_name || !data.email || !data.education) return res.status(400).json({result: 'All fields are neccessay please fill all'})
    // creating a entry in mongoDB
    const result = await user.create({
        first_name : data.first_name,
        last_name : data?.last_name,
        email: data.email,
        education: data.education
    })
    return res.status(201).json({result: 'user successfully created', user:result})
})


app
.route('/users/:id')
.get(async(req,res)=>{
    // getting data from mongoDB
    const userdata = await user.findById(req.params.id)
    if(!userdata) return res.status(400).json({result: 'User not found'})
    return res.json(userdata)
})
.patch(async(req,res)=>{
    // updating data in mongoDB
    const userdata = await user.findByIdAndUpdate(req.params.id,{...req.body})
    if(!userdata) return res.status(400).json({result:'user not found'})
    return res.json({result: 'successfully updated'})

})
.delete(async(req,res)=>{
    // deleting data from mongoDB
    const userdata = await user.findByIdAndDelete(req.params.id)
    if(!userdata) return res.status(400).json({result: 'no user found'})
    return res.json({result:'deleted successfully',user:userdata})
})

app.listen(300,console.log('server started'))