const mongoose = require('mongoose')

function createConnection(url){
mongoose
.connect(url)
.then(()=>console.log('database is connected'))
.catch(error=>console.log(error))
}

module.exports = createConnection;