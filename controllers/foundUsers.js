
const User=require('../models/AllUsers.js')

async function foundUser(req,res){
    try{
        const user= await User.getUser(req.user._id);
        res.status(200).json(user)
  }catch(error){
      res.status(400).json({msg:error.message})
  }
}