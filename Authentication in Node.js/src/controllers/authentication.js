const mongoose = require('mongoose')
const {v4:uuid} = require('uuid')
const {getUser, setUser} = require('../service/authentication')

const db = require('../model/authetication')

async function signupUser(req,res) {
    const {Name,Email,Password} = req.body
    const user = await db.create({Name,Email,Password})
    const sessionid = uuid()
    setUser(sessionid,{Email,Password})
    res.cookie('uid',sessionid)
    return res.json({id:user})
}
async function loginUser(req,res) {
    const {Email,Password} = req.body
    const user = await db.findOne({Email,Password})
    if(!user) return res.render('login',{
        error:'Invalid User request'
    })
    
    const sessionid = uuid()
    setUser(sessionid,{Email,Password})
    res.cookie('uid',sessionid)
    return res.redirect('/')
}

module.exports = {signupUser,loginUser}