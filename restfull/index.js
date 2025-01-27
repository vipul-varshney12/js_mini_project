const express =require('express');
const app=express();

const mongoose =require("mongoose");

const User=require('./model/User');

mongoose.connect('mongodb://127.0.0.1:27017/products78').
then(()=>{
    console.log("connected to database");
}).catch((err)=>{
     console.err("erroroccure during connection", err);
})

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.get('/users', async(req,res)=>{
    const users= await User.find();
    res.render('users',{users});
});

app.get('/user/new', (req,res)=>{
    res.render('new');
})

app.post('/users', async(req,res)=>{
    const{ username, password, city, image}=req.body;
    try{
        await User.create({username, password, city ,image});
        res.redirect('/users')
    }
    catch(err){
        console.err('error occure during creation', err);
    }
});

app.get('/isers/:id', async(req,res)=>{
    const {id}= req.params;
    const user =await User.findById(id);
    res.render('show',{user});
});

app.delete('/users/:id', async(req,res)=>{
    const {id} =req.params;
    try{
        await User.findByIdAndDelete(id);
        res.redierect('/users');
    }
    catch(err){
        console.err('error occure', err);
    }
});

app.get('/user/:id/edit', async(req,res)=>{
    const {id}=req.params;
    const user =await user.findById(id);
    res.render('edit', {user})
});

app.put('/user/:id', async(req,res)=>{
    const {id}=req.params;
    const {username, password, city ,image}=req.body;
    try{
    await User.findByIdAndUpdate(id,{username ,password, city, iamge});
    res.redierect()
}
catch(err){

}

})



app.listen(5000,()=>{
    console.log('server start at port 5000');
})



/*
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const User = require('./model/User');
const cors = require('cors');  // Use CORS for React app

app.use(cors());
app.use(express.json());  // To handle JSON payloads

mongoose.connect('mongodb://127.0.0.1:27017/products78')
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.error("Error occurred during connection", err);
    });

// Get all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users); // Send JSON response
    } catch (err) {
        console.error('Error occurred while fetching users', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Create a new user
app.post('/api/users', async (req, res) => {
    const { username, password, city, image } = req.body;
    try {
        const user = await User.create({ username, password, city, image });
        res.status(201).json(user);  // Send newly created user as response
    } catch (err) {
        console.error('Error occurred during creation', err);
        res.status(400).json({ message: 'Bad Request' });
    }
});

// Get a user by ID
app.get('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (user) {
            res.json(user); // Send JSON response
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error('Error occurred while fetching user', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Update a user by ID
app.put('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const { username, password, city, image } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, { username, password, city, image }, { new: true });
        if (user) {
            res.json(user); // Send the updated user
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error('Error occurred during update', err);
        res.status(400).json({ message: 'Bad Request' });
    }
});

// Delete a user by ID
app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (user) {
            res.status(204).send(); // No content
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error('Error occurred during deletion', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Start the server
app.listen(5000, () => {
    console.log('Server started at port 5000');
});

*/