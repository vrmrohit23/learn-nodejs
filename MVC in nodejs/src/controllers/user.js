const user = require("../models/user")

// getting all users from database
async function getAllUsers(req, res) {
    const data = await user.find();
    return res.json(data)
}

// creating a entry in database
async function createUser(req, res) {
    const data = req.body;
    if (!data || !data.first_name || !data.email || !data.education) return res.status(400).json({ result: 'All fields are neccessay please fill all' })
    const result = await user.create({
        first_name: data.first_name,
        last_name: data?.last_name,
        email: data.email,
        education: data.education
    })
    return res.status(201).json({ result: 'user successfully created', user: result })
}

// getting specific user from database
async function getUser(req,res){
    const userdata = await user.findById(req.params.id)
    if(!userdata) return res.status(400).json({result: 'User not found'})
    return res.json(userdata)
}

// updating user data in database
async function updateUser(req,res){
     const userdata = await user.findByIdAndUpdate(req.params.id,{...req.body})
     if(!userdata) return res.status(400).json({result:'user not found'})
     return res.json({result: 'successfully updated'})
}

// deleting data from mongoDB
async function deleteUser(req,res){
    const userdata = await user.findByIdAndDelete(req.params.id)
    if(!userdata) return res.status(400).json({result: 'no user found'})
    return res.json({result:'deleted successfully',user:userdata})
}


module.exports = {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
}