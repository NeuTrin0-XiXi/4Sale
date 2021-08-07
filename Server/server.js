const express = require('express');
const mongoose = require('mongoose');
const items = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(express.static('public'));


mongoose.use({useNewUrlParser:true})
mongoose.connect('mongodb://localhost:27017/4Sale1')
.then(() => {console.log("MongoDB connected successfully ....")})
.catch((err) => {console.log("MongoDB connection unsuccessfull ....")});

app.use('/' ,items);

app.use((err,req,res,next)=>{
    res.send(err.message);
})

const port = 5000;

app.listen(port , console.log(`Server running at port ${port}`));