const todomodel = require('../model/todo')
const {v4:uuid} = require('uuid')
async function addTodo(req,res){
    const Id = uuid()
    const {Message} = req.body
    await todomodel.create({Id,Message})
    res.redirect('/')
}

async function deleteOne(req,res){

}


module.exports = {addTodo,  deleteOne}
