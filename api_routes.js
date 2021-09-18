//Exporting individual route modules
const express = require('express');
const Routing = express();
const authToken = require('./config/auth').authToken;


Routing.use('/items', require('./routes/item'));
Routing.use('/user', authToken, require('./routes/user'));
Routing.use('/googlelogin', require('./routes/googlelogin'));
Routing.use('/lost-found', require('./routes/LostFound'));



module.exports = Routing;