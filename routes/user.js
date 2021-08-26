//Route module for handeling queries regarding user json 
const mongoose = require('mongoose')
const express = require('express');
const route = express.Router();
const User = require('../db/models').userModel;
const Item = require('../db/models').itemModel;

//API handlers
//--------------------------------------------------------------------------//
//GET requests
route.get('/favourites/:id', (req, res, next) => {
    User.findById(req.params.id)
        .then(user => {
            Item.find({ _id: { $in: user.favourites } })
                .select('price title images')
                .sort({ date: 'desc' })
                .then(items => {
                    res.header("Access-Control-Allow-Origin", "*");
                    res.status(200).send(items);
                })
        })
        .catch(next);
})

route.get('/sold/:id', (req, res, next) => {
    User.findById(req.params.id)
        .then(user => {
            Item.find({ _id: { $in: user.soldItems } })
                .select('price title images')
                .sort({ date: 'desc' })
                .then(items => {
                    res.header("Access-Control-Allow-Origin", "*");
                    res.status(200).send(items);
                })
        })
        .catch(next);
})
//--------------------------------------------------------------------------//
//POST request:
//NIL
//-------------------------------------------------------------------------//

//Updates:
//PUT requests
//SOLD and Item:
route.put('/sold/:id', (req, res, next) => {
    User.updateOne({ _id: req.params.id },
        { "$push": { "soldItems": req.body.sold } }
    )
        .then(() => {
            User.findById(req.params.id)
                .select('soldItems')
                .then(user => {
                    res.header("Access-Control-Allow-Origin", "*");
                    res.send(user);
                })
        })
        .catch(next);
})

//Marke an Item  favourite
route.put('/favourites/:id', (req, res, next) => {
    User.updateOne({ _id: req.params.id },
        { "$push": { "favourites": req.body.favourite } }
    )
        .then(() => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(204).end();
        }).catch(next);
})


//Buy request approved
route.put('/notif/:userEmail', (req, res, next) => {
    User.findOne({
        email: req.params.userEmail,
        notifications: {
            $elemMatch: {
                message: req.body.notification.message,
                userEmail: req.body.notification.userEmail
            }
        }
    })
        .then(user => {
            if (user != null) {
                res.header("Access-Control-Allow-Origin", "*");
                res.status(200).send(`Already notified `);
            } else {
                req.body.notification._id = new mongoose.Types.ObjectId();
                User.updateOne({ email: req.params.userEmail },
                    { "$push": { "notifications": req.body.notification } },
                )
                    .then(() => {
                        res.header("Access-Control-Allow-Origin", "*");
                        res.status(200).send(`Notified `);
                    })
                    .catch(next);

            }
        })
        .catch(next);
})

route.delete('/notif/:id', (req, res, next) => {
    User.updateOne({ _id: req.params.id },
        { "$pull": { notifications: { _id: req.body.id } } }
    )
        .then(() => {
            User.findById(req.params.id)
                .select('notifications')
                .then(user => {
                    res.header("Access-Control-Allow-Origin", "*");
                    res.status(200).send(user);
                })
        })
        .catch(next);
})

route.put('/notifbell/:id', (req, res, next) => {
    User.updateOne(
        { _id: req.params.id },
        {
            $set: {
                "notifications.$[].read": true
            }
        })
        .then(() => {
            res.status(204).end();
        })
        .catch(next);
});

route.put('/:id', (req, res, next) => {
    User.updateOne({ _id: req.params.id }, req.body)
        .then(user => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(204).end();
        })
        .catch(next);
})
//---------------------------------------------------------------------------//

//DELETE requests:
//Deleted an Ad
route.delete('/sold/:id', (req, res, next) => {
    User.updateOne({ _id: req.params.id },
        { "$pull": { "soldItems": req.body.sold } }
    )
        .then(() => {
            User.findById(req.params.id)
                .select('soldItems')
                .then(user => {
                    res.header("Access-Control-Allow-Origin", "*");
                    res.status(204).end();
                })
        }).catch(next);
})

//Removed an Item from favourite:
route.delete('/favourites/:id', (req, res, next) => {
    User.updateOne({ _id: req.params.id },
        { "$pull": { "favourites": req.body.favourite } }
    )
        .then(() => {
            User.findById(req.params.id)
                .select('favourites')
                .then(user => {
                    res.header("Access-Control-Allow-Origin", "*");
                    res.status(204).end();
                })
        }).catch(next);
})



module.exports = route;