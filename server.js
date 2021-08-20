const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();



//connection to DB
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost:27017/4sale_build')
    .then(() => {
        console.log("mongoDB connected...")
    })
    .catch((err) => {
        console.log(err.message);
        res.status(500).send("Something went wrong...");
    });


//bodyParser middleware 
app.use(express.json());


//Using the API routes
app.use('/api', require('./api_routes'));

// Static files
app.use('/', express.static(__dirname + '/client/build/'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


//Error handeling
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(400).send("Something went wrong...");
})





//Listening to requests
const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
