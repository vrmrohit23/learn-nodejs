const express = require('express')
const todomodel = require('../model/todo')
const router = express.Router()

router.get('/',async (req,res)=>{
    const alldata = await todomodel.find()
    res.render('Todo',{
        data:alldata
    });
})
router.get('/signup',(req,res)=>{
    return res.render('signup')
})
router.get('/login',(req,res)=>{
    return res.render('login')
})



module.exports = router