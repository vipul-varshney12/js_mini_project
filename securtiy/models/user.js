const mongoose =require("mongoose");
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        reqiured:true,
    },
    password:{
        type:String,
        require:true,
    }
});

const User=mongoose.model("User", userSchema);
module.exports=User;