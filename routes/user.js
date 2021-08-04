//Route module for handeling queries regarding user json 

const express=require('express');
const route=express.Router();
const User=require('../db/models').userModel;

//API handlers
//Get requests
route.get('/',(req,res,next)=>{
    User.find(req.body).then((user)=>{
        res.status(200).send(user)
    }).catch(next);
});

// route.get('/',(req,res,next)=>{
//     User.findOne(req.query).then((user)=>{
//         res.send(user);
//     }).catch(next);
// });

// route.get('/:name',(req,res,next)=>{
//     User.findOne({name: req.params.name}).then((user)=>{
//         res.send(user);
//     }).catch(next);
// });


//Post requests
route.post('/',(req,res,next)=>{
    User.create(req.body).then((user)=>{
        res.status(200).send("User posted");
        console.log(req.body);
    }).catch(next);
});




module.exports=route;