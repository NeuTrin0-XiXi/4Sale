//Exporting individual route modules
const express=require('express');
const Routing=express();


Routing.use('/item',require('./routes/item'));
Routing.use('/user',require('./routes/user'));



module.exports=Routing;