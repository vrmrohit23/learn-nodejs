const mongoose = require('mongoose')
const {v4:uuid} = require('uuid')
// const {setUser} = require('../service/authentication')
 const {setUser} = require('../service/jwt_authenticate')
const jwt = require('jsonwebtoken')

const db = require('../model/authetication')

async function signupUser(req,res) {
    const {Name,Email,Password} = req.body
    const user = await db.create({Name,Email,Password})
    // const sessionid = uuid()
    // setUser(sessionid,{Email,Password})
    // res.cookie('uid',sessionid)
    const token = setUser({Name:user.Name, Email:user.Email, Password: user.Password})
    res.cookie('token',token,{
        sameSite:"Strict",
        path:"/"
    })
    return res.redirect('/')
}
async function loginUser(req,res) {
    const {Email,Password} = req.body
    const user = await db.findOne({Email,Password})
    if(!user) return res.render('login',{
        error:'Invalid User request'
    })
    
    // const sessionid = uuid()
    // setUser(sessionid,{Email,Password})
    // res.cookie('uid',sessionid)
    console.log('we are in login')
    const token = setUser({Name:user.Name, Email:user.Email, Password: user.Password,role:user.role})
    res.cookie('token',token,{
        sameSite:"Strict",
        path:"/",
        role:user.role
    })
    return res.redirect('/')
}
async function adminLogin(req,res) {
    const {Email,Password} = req.body
    const user = await db.findOne({Email,Password})
    if(!user) return res.render('login',{
        error:'Invalid User request'
    })
    
    if(user.role !== 'admin')return res.render('login',{
        adminerror:'You are not authorized as admin'
    })
    // const sessionid = uuid()
    // setUser(sessionid,{Email,Password})
    // res.cookie('uid',sessionid)
    const token = setUser({Name:user.Name, Email:user.Email, Password: user.Password, role:user.role})
    res.cookie('token',token,{
        sameSite:"Strict",
        path:"/",
    })
    return res.redirect('/')
}
function logout(req,res){
    res.clearCookie('token')
    res.render('login')
}

module.exports = {signupUser,loginUser,adminLogin,logout}