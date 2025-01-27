const User= require("../models/user");
const bcrypt=require('bcrypt');
const jwt= require('jsonwebtoken');

const loginUser= async(req,res)=>{
    const{email,password}=req.body;
    try{
        const user= await User.findOne({email});
        if(!user){
            return res.json({message:"user not found"});
        }
        const isMatch= await bcrypt.compare(password, user.password);
        if(!isMatch){
                return res.json({message:"invalid credential"});
        
        }
        const token= jwt.sign({
            id:user._id, email:user.email
        },
        process.env.SECRET_KEY,{expiresIn:'1h'}
    );
    res.json({message:"login successfull", token});
    }
    catch(err){
        res.json({message:err.message});
    }
};

const registerUser= async(req,res)=>{
    const{name ,email, password}=req.body;
    try{
        const existingEmail= await User.findOne({email});
        if(existingEmail){
            return res.json({message:"mail already exists"});
        }
        const newUser= await user.create({name, email, password});
        res.json({message:"user registered succesfully"});
           
    }
    catch(err){
        res.json({message: "error occure",err});
    }
};
module.exports={loginUser, registerUser};
