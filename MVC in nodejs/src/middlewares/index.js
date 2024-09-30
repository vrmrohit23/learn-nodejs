const fs = require('fs')

function makelog(filename){
    return (req,res,next)=>{
        fs.appendFile(filename,`${Date.now()} -- ${req.method} -- ${req.pathname} `,()=>{
            next();
        })
    }

}