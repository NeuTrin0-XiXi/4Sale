//Route module for handeling queries regarding user json 

const express=require('express');
const route=express.Router();
const User=require('../db/dbmodels').userModel;

//API handlers

route.get('/',(req,res,next)=>{
    User.find(req.body).then((user)=>{
        res.status(200).send(user)
    }).catch(next);
});

route.post('/',(req,res,next)=>{
    User.create(req.body).then((user)=>{
        res.status(200).send("User posted");
        console.log(req.body);
    }).catch(next);
});

route.delete('/:id',(req,res,next)=>{
    User.deleteOne(req.body.name).then((user)=>{
        res.status(200).send("User posted");
        console.log(req.body);
    }).catch(next);
});



module.exports=route;