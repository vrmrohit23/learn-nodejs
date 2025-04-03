const express = require('express')
const {addTodo,deleteOne} = require('../controllers/TodoMethods')
const { checkauthorization } = require('../middlewares/checkUser_with_JWT')
const router = express.Router()

router.get('/',(req,res)=>{
    return res.send('<div>hello<div/>')
})

router
.route('/')
.post(addTodo)
router.get('/:id',checkauthorization(['admin']),deleteOne)


module.exports = router