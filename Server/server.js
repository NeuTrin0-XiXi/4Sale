const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/routes');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/4Sale')
.then(() => {console.log("MongoDB connected successfully ....")})
.catch((err) => {console.log("MongoDB connection unsuccessfull ....")});

app.use('/4Sale' , items);

const port = 5000;

app.listen(port , console.log(`Server running at port ${[port]}`));