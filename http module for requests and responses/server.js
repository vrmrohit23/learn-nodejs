const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req,res)=>{
        const urlob = url.parse(req.url,true);
     
        if(urlob.pathname === '/favicon.ico') return res.end()
        const log = `${req.method} ${urlob.pathname}: New req made\n`
        fs.appendFile('./log.text', log, ()=>{
            switch (urlob.pathname){
                case '/': res.end('We are at home page')
                break;
                case '/about': if(urlob.query.name) res.end('This is our query data by name: ' + urlob.query.name)
                    else res.end('Normal home page')
                break;
                default : res.end('404 nothing found')
            }
        })
    })

server.listen(900,()=>console.log('server connected'))

