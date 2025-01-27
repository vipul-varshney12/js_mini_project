const express= require('express');

const{registerUser, loginUser}=require('../controller/auth')
const hashpassword=require('../middleware/hashPassword')

const router=express.Router();
router.post('/register', hashpassword, registerUser);
router.post('/login', loginUser);
module.exports=router;