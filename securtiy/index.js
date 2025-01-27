const express = require('express');
const authRoutes = require('./routes/auth');
const mongoose =require('mongoose');

const app=express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/security').
then(()=>{
    console.log('connected to db')})
    .catch((error)=>{
            console.log(error);
    })


app.get('/',(req,res)=>{
    res.send('hello')
});
app.use('/auth', authRoutes);



app.listen(5089,(req,res)=>{
    console.log('server run at 5089')
});