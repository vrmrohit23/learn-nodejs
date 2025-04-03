require('dotenv').config()


const jwt = require('jsonwebtoken')
const key = 'Iamrohitverma@007'

function setUser(User){
    return jwt.sign(User,key)
}

function getUser(token){
   return jwt.verify(token,key)
}

module.exports = {getUser,setUser}