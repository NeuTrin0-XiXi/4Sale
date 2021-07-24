//Route module for handeling queries regarding item json 

const express=require('express');
const route=express.Router();
const Item=require('../db/dbmodels').itemModel;

//API handlers
//Get items on sale
route.get('/',(req,res)=>{
    Item.findOne(req.body).then((item)=>{
        res.status(200).send(item)
    }).catch(next);
});

//
//practice
route.post('/',(req,res)=>{
    Item.create(req.body).then((item)=>{
        res.status(200).send("Item posted");
        console.log(req.body);
    }).catch(next);
});



module.exports=route;