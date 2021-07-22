//Route module for handeling queries regarding user json 

const express=require('express');
const route=express();

//API handlers

route.get('/',(req,res)=>{
    res.send("abcd");
});



module.exports=route;