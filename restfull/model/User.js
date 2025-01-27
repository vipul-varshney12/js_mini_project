const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true,
    },
    image:{
        type:String,
    }

})

const User= mongoose.model('User', userSchema);
module.exports=User;