//Exporting individual route modules
const express=require('express');
const Routing=express();

Routing.use('/item',require('./Item'));



module.exports=Routing;