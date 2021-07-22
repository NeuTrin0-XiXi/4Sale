const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
// const fs=require('fs');


const app=express();
app.use('/api',require('./routes/routes'));


//Middleware
// app.use(bodyParser.json());





//Listening to requests
const port=process.env.PORT || 80;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});
