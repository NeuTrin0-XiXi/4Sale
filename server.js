
const express=require('express');
const mongoose=require('mongoose');
// const fs=require('fs');
const app=express();


//connection to DB
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/4sale').then(()=>{
    console.log("mongoDB connected...")
});



//bodyParser middleware
app.use(express.json());


//Using the API routes
app.use('/api',require('./api/routes'));

//Error handeling
app.use((err,req,res,next)=>{
    res.status(400).send({error: err.message});
})





//Listening to requests
const port=process.env.PORT || 80;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});
