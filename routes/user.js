const express = require('express');
const User = require('../models/Users');
const mongoose = require('mongoose')

const router = express.Router();

router.post("/createUser", async (req, res)=>{
    try{
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({success: true})
    }
    catch(err){
        console.log("Create user Error ------------------------ ",err)
        console.log("Body", req.body)
        res.json({success: false})
    }
})

router.post("/login", async (req, res)=>{
    const {email, password} = req.body;
    try{
        const creds = await mongoose.connection.db.collection("users").find({email, password}).toArray()
        console.log("login creds ------------------------------------------ ",creds);
        if(creds.length == 0){
            res.status(400).json({success: false}).send()
        }
        else{
            res.json({success: true})
        }
    }catch(err){
        console.log("login err -- ",err);
        res.json({success: false})
    }
})

module.exports = router;