const express = require('express');
const router = express.Router();
const UserInfo = require('../model/Use.js');

router.post('/signup', async (req,res) => {
    console.log(req.body);
    const user = new UserInfo({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        password : req.body.password,
    });
    const data = await user.save();
    console.log(data);
    if(data)
        res.send(data);
    else
        res.send({message : "Error"});
});

router.post('/login', async (req,res) => {
    const user = await UserInfo.findOne({email : req.body.email});

    if(user){
        if(req.body.password === user.password){
            res.send({data: user, message: `Hello ${user.name} You Logged In Successfully!!`});
        }else{
            res.send({message : "Invalid Password"});
        }
    }else{
        res.send({message : "User Not Found"});
    }
});

module.exports = router;