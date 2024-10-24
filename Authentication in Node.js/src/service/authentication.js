const data = new Map()

function setUser(id,User){
    data.set(id,User)
}

function getUser(id){
   return data.get(id)
}

module.exports = {getUser,setUser}