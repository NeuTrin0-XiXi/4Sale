//Route module for handeling queries regarding user json 

const express=require('express');
const route=express.Router();
const User=require('../db/models').userModel;
const Item=require('../db/models').itemModel;

//API handlers
//GET requests
//GET favourites:
route.get('/favourites/:id',(req,res,next)=>{
    User.findById(req.params.id).then((user)=>{
        Item.find({_id: user.favourites}).then((item)=>{
            res.status(200).send(item);
        });
    }).catch(next);
});


//--------------------------------------------------------------------------//

//POST requests
route.post('/',(req,res,next)=>{
    User.create(req.body).then((user)=>{
        res.status(200).send(`User posted`);
        console.log(req.body);
    }).catch(next);
});


//-------------------------------------------------------------------------//
//PUT requests
route.put('/:id',(req,res,next)=>{
    User.updateOne({_id: req.params.id},req.body).then((user)=>{
        res.status(200).send(`user updated`);
    }).catch(next);
})

module.exports=route;