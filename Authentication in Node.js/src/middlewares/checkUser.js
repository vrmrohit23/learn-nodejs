const {getUser} = require('../service/authentication')

async function checkUser(req,res,next){
    
    const uid = req?.cookies?.uid
    if(!uid) return res.redirect('/login')
    const user = getUser(uid)
    if(!user) return res.redirect('/login')
    
    req.User = user
    next();
}

module.exports = checkUser