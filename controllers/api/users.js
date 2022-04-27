const User=require('../../models/User')//we are importing everything from models/User.js--Schema etc
const jwt =require('jsonwebtoken');//this is the token so it can store login in localstorage
const bcrypt = require('bcryptjs/dist/bcrypt');



function checkToken(req,res){
    console.log('req.user',req.user);
    res.status(200).json(req.exp)  
    // I dont need req.exp--Dont want my token to expire, but this case lets expire it..
    // i could say res.status(200).json({message:"we have a token"})
}

async function login(req,res){
    try{
        const user=await User.findOne({email:req.body.email})
   //This code above says: Async, making promise> we will wait and find One user by email     
        if(!user)throw new Error();
        //above ^^ if theres no user throw error
        const match= await bcrypt.compare(req.body.password,user.password)
        //wait for next promise if email exists. we will get imported bcrypt and get both paramters
        // first parameter is the password in the body and the password we typed in
        if(!match)throw Error();
        //if it doesn matches above ^^ throw Error
        res.status(200).json(createJWT(user));
        //otherwise throw a 200 wich is a good request and return the user found
    }catch{
        res.status(400).json('Bad Credentials/Password')
//else bad credentials
    }
}


async function create(req,res){
    //creating function named create
try{
    const user=await User.create(req.body);
//create random variable named user. is a promise, we getting User. from models.User.js
//creat(req.body)is a method to create, havent put it to use just yet
//token will be a string
    const token=createJWT(user);

    res.status(200).json(token);
    //if is good, JSON return our token
    }catch(e){
        res.status(400).json(e)
        //otherwise -give me an error
    }
}


function createJWT(user){
    return jwt.sign(
    //we get jsonwebtoken and sign
        { user },
        process.env.SECRET,
        { expiresIn:'24h'}
//Dont want my token to expire, but this case lets expire it..for notes
//I could have removed  { expiresIn:'24h'}

    )
}

module.exports={
    create,
    login,
    checkToken
}

//export all my functions so i can use it however i want