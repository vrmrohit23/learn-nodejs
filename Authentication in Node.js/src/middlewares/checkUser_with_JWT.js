const {getUser} = require('../service/jwt_authenticate')

 async function checkUser(req,res,next){
    console.log(req.path)
    if(req.path === '/login' || req.path === '/signup' || req.path === '/auth/login' || req.path === '/auth/signup') return next();
     const token = req?.cookies?.token
     if(!token) return res.redirect('/login')
    const user = getUser(token)
    if(!user) return res.redirect('/login')
    req.User = user
    
    return next();
}

function checkauthorization(roles = []){
    return function(req,res,next){
        console.log(req.User)
        if(!req.User || !roles.includes(req.User?.role)){ 
            return res.redirect('/?error=you cannot delete todo')
        }
        return next();
    }
} 

module.exports = {checkUser, checkauthorization}
