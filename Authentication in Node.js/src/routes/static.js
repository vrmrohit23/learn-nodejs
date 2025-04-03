const express = require('express')
const todomodel = require('../model/todo')
const { checkUser } = require('../middlewares/checkUser_with_JWT')
const router = express.Router()

router.get('/',async (req,res)=>{
    const alldata = await todomodel.find()
    const message = req.params.error = 'you cannot delete todo'?req.params.error:'';
    res.render('Todo',{
        data:alldata,
        message:message
    });
})
router.get('/signup',(req,res)=>{
    return res.render('signup')
})
router.get('/login',(req,res)=>{
    return res.render('login')
})



module.exports = router