const bcrypt= require('bcrypt');
const hashpassword= async(req,res, next)=>{
    try{
        const{password}=req.body;
        const hashedpassword= await bcrypt.hash(password,10);
        req.body.password=hashedpassword;
        next();
    }
    catch(error){
        res.json({message:"error during hash", error});
    }
}
module.exports=hashpassword;