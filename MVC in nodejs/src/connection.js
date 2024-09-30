const mongoose = require('mongoose')

 function makeconnection(url){
 mongoose
.connect(url)
.then(()=>{console.log('succesfully connnected to database'); return})
.catch(err => console.log('MongoDB error --> ',err))

}

module.exports = makeconnection