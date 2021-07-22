const express=require('express');
const mongoose=require('mongoose');
// const fs=require('fs');


const app=express();
//Using the APIs
app.use('/api',require('./api/routes'));


//Middleware
// app.use(bodyParser.json());
app.use(express.json());



//Listening to requests
const port=process.env.PORT || 80;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});
