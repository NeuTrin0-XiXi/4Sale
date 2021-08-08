const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/routes');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));


mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/4Sale')
.then(() => {console.log("MongoDB connected successfully ....")})
.catch((err) => {console.log("MongoDB connection unsuccessfull ....")});

mongoose.Promise = global.Promise;

app.use('/4Sale' , items);

const port = 5000;

app.listen(port , console.log(`Server running at port ${port}`));