const User = require('../model/User')

const UserController = {

    getUsers: async (req,res)=>{
        try{
            const user = await User.find()
            res.status(200).json(user)
        }catch(err){
            console.error("There is an error:",err)
            res.status(500).json({err: "Internal error"})
        }
    },
    
    
    createSport: async (req,res)=>{
        try{
            const newUser = await User.create(req.body)
            res.status(201).json(newUser)
        }catch(err){
            console.error("There is an error:",err)
            res.status(500).json({err: err.message})
        }
    },
    
    
    
    updateUser: async(req,res)=>{
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body,{
                new:true
            })
            res.status(200).json(updatedUser)
        }
        catch(err){
            console.error("There is an error:",err)
            res.status(500).json({err: err.message})
        }
    },
    
    
    deleteUser: async(req,res)=>{
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(204).send()
        }
        catch(err){
            console.error("There is an error:",err)
            res.status(500).json({err: "Internal error"})
        }
    }

}

module.exports = UserController