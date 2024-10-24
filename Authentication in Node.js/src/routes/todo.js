const express = require('express')
const {addTodo,deleteOne} = require('../controllers/TodoMethods')
const router = express.Router()

router.get('/',(req,res)=>{
    return res.send('<div>hello<div/>')
})

router
.route('/')
.post(addTodo)
.delete(deleteOne)





module.exports = router