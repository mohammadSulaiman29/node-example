const express = require('express');
const userRouter = express.Router();
const {authorize} = require('../middlewares/authorize');

// Authorize middleware  
userRouter.use(authorize);

userRouter.get('/' , (req , res) => {
    res.status(200).send("Users");
    console.log("users");
});

userRouter.get('/:id' , (req , res) => {
    res.status(200).send(`User by id ${req.params.id}`);
    console.log(`users with ID : ${req.params.id}`);
});

userRouter.get('/create' , (req , res) => {
    console.log("Create Form");
});

userRouter.post('/store' , (req ,res) => {
    console.log("Store");
});

userRouter.delete('/delete/:id' , (req , res) => {
    console.log(`Delete user ${req.params.id}`);
});

module.exports = {userRouter};