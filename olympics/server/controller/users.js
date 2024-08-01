const User = require('../model/User');
const Sport = require('../model/Sport');
const { getAllId } = require('./roles');

let allRoleId;
(async () => {
    allRoleId = await getAllId();
})()

/* allRoleId looks like 

{admin:'7676767676',
 moderator: '78787576',
 user: '8868498948'} */

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
    
    
    createUser: async (req,res)=>{
        try{

            let sport = req.body.sport ? 
                  await Sport.findOne({name:req.body.sport}) : null;

            const newUser = await User.create({...req.body,
                    role: allRoleId[req.body.role], sport })
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