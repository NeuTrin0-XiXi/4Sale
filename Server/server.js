const express = require('express');
const mongoose = require('mongoose');
const items = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(express.static('public'));


mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
<<<<<<< HEAD
mongoose.connect('mongodb://localhost:27017/4Sale1')
.then(() => {console.log("MongoDB connected successfully ....")})
.catch((err) => {console.log("MongoDB connection unsuccessfull ....")});

app.use('/' ,items);

app.use((err,req,res,next)=>{
    res.send(err.message);
})
=======
mongoose.connect('mongodb://localhost:27017/4Sale')
.then(() => {console.log("MongoDB connected successfully ....")})
.catch((err) => {console.log("MongoDB connection unsuccessfull ....")});

mongoose.Promise = global.Promise;

app.use('/4Sale' , items);
>>>>>>> 468942398371a1a8811ef405923f83b50a07bc3c

const port = 5000;

app.listen(port , console.log(`Server running at port ${port}`));