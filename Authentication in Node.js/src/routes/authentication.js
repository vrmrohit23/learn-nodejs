const express = require('express')
const {signupUser,loginUser,adminLogin,logout} = require('../controllers/authentication')
const authrouter = express.Router()



authrouter.post('/signup',signupUser)

authrouter.post('/login',loginUser)

authrouter.post('/admin_login',adminLogin)

authrouter.get('/logout',logout)


module.exports = authrouter