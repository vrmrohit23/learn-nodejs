const express = require('express')
const {signupUser,loginUser} = require('../controllers/authentication')
const authrouter = express.Router()



authrouter
.route('/signup')
.post(signupUser)

authrouter
.route('/login')
.post(loginUser)

module.exports = authrouter