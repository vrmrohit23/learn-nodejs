const mongoose = require('mongoose')

function createConnection(url){
mongoose.connect(url)
.then(()=>console.log('Connected Successfully'))
.catch(error => console.log(error))
}

module.exports = createConnection;