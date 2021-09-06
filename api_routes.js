//Exporting individual route modules
const express = require('express');
const Routing = express();


Routing.use('/items', require('./routes/item'));
Routing.use('/user', require('./routes/user'));
Routing.use('/googlelogin', require('./routes/googlelogin'));
Routing.use('/lost-found', require('./routes/LostFound'));



module.exports = Routing;