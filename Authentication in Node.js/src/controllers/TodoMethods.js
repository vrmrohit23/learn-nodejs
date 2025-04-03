const todomodel = require('../model/todo')
const {v4:uuid} = require('uuid')
async function addTodo(req,res){
    const Id = uuid()
    const {Message} = req.body
    await todomodel.create({Id,Message})
    return res.redirect('/')
}

async function deleteOne(req,res){
    const docID = req.params?.id
    if(!docID) return res.render('<div>no doc id found<div/>')
    await todomodel.deleteOne({Id:docID})
    return res.redirect('/')
}


module.exports = {addTodo,  deleteOne}
