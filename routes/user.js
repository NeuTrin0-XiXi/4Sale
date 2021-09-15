//Route module for handeling queries regarding user json 
const mongoose = require('mongoose')
const express = require('express');
const route = express.Router();
const User = require('../db/models').userModel;
const Item = require('../db/models').itemModel;

//API handlers
//--------------------------------------------------------------------------//
//GET requests
// route.get('/favourites/:id', (req, res, next) => {
//     User.findById(req.params.id)
//         .then(user => {
//             Item.find({ _id: { $in: user.favourites } })
//                 .select('price title images')
//                 .sort({ date: 'desc' })
//                 .then(items => {
//                     res.header("Access-Control-Allow-Origin", "*");
//                     res.status(200).send(items);
//                 })
//         })
//         .catch(next);
// })

// route.get('/sold/:id', (req, res, next) => {
//     User.findById(req.params.id)
//         .then(user => {
//             Item.find({ _id: { $in: user.ads } })
//                 .select('price title images')
//                 .sort({ date: 'desc' })
//                 .then(items => {
//                     res.status(200).send(items);
//                 })
//         })
//         .catch(next);
// })

//Get orders
route.get('/orders/:id', (req, res, next) => {
    User.findById(req.params.id)
        .then(user => {
            Item.find({ _id: { $in: user.orders } })
                .select('price title images')
                .sort({ date: 'desc' })
                .then(items => {
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
        { "$push": { "ads": req.body.sold } }
    )
        .then(() => {
            User.findById(req.params.id)
                .select('ads')
                .then(user => {
                    Item.find({ _id: { $in: user.ads } })
                        .select('title images price')
                        .then(items => {
                            res.send(items);
                        })
                        .catch(next);
                })
                .catch(next);
        })
        .catch(next);
})

//Mark an Item  favourite
route.put('/favourites/:id', (req, res, next) => {
    User.updateOne({ _id: req.params.id },
        { "$push": { "favourites": req.body.favourite } }
    )
        .then(() => {
            res.status(204).end();
        }).catch(next);
})

//Mark an item for order
route.put('/order/:id', (req, res, next) => {
    User.updateOne({ _id: req.params.id },
        { "$push": { "orders": { _id: req.body.order } } }
    )
        .then(a => {
            res.status(204).end();
        }).catch(next);
})


//Buy request/Approve Buy request
route.put('/approve/:userEmail', (req, res, next) => {
    User.findOne({
        email: req.params.userEmail,
        notifications: {
            $elemMatch: {
                message: req.body.notification.message,
                userEmail: req.body.notification.userEmail,
                itemTitle: req.body.notification.itemTitle
            }
        }
    })
        .then(user => {
            if (user != null) {
                User.findById(req.body._id)
                    .select('notifications')
                    .then(user => {
                        res.status(200).send({ msg: `Already notified`, notifications: user.notifications });
                    })
                    .catch(next);
            } else {
                req.body.notification['read'] = false;
                req.body.notification['_id'] = new mongoose.Types.ObjectId();

                const io = require('../config/socket').get();
                io.to(req.params.userEmail).emit('notification', req.body.notification)

                User.updateOne({ email: req.params.userEmail },
                    {
                        "$push": { "notifications": req.body.notification },
                        "$set": {
                            "orders.$[elem].success": true
                        }
                    },
                    {
                        arrayFilters: [{ "elem": { _id: req.body.notification.itemId } }]
                    }
                )
                    .then(() => {
                        User.updateOne({ _id: req.body._id },
                            { "$pull": { notifications: { itemId: req.body.notification.itemId, userEmail: { $ne: req.params.userEmail } } } }
                        ).then(() => {
                            User.findById(req.body._id)
                                .select('notifications')
                                .then(user => {
                                    Item.updateOne({ _id: req.body.notification.itemId }, {
                                        $set: { sold: true }
                                    })
                                        .catch(next);
                                    res.status(200).send({ msg: "Notified", notifications: user.notifications });
                                })
                                .catch(next);
                        })
                            .catch(next);
                    })
                    .catch(next);
            }
        })
        .catch(next);
})

//Delete Notification
route.delete('/notif/:id', (req, res, next) => {
    User.updateOne({ _id: req.params.id },
        { "$pull": { notifications: { _id: req.body.id } } }
    )
        .then(() => {
            User.findById(req.params.id)
                .select('notifications')
                .then(user => {
                    res.status(200).send(user);
                })
        })
        .catch(next);
})

//Set notifications to read
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


//Update user info
route.put('/:id', (req, res, next) => {
    User.updateOne({ _id: req.params.id }, req.body)
        .then(user => {
            res.status(204).end();
        })
        .catch(next);
})
//---------------------------------------------------------------------------//

//DELETE requests:
//Deleted an Ad
route.delete('/sold/:id', (req, res, next) => {
    User.updateOne({ _id: req.params.id },
        { "$pull": { "ads": req.body.sold } }
    )
        .then(() => {
            User.findById(req.params.id)
                .select('ads')
                .then(user => {
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
                .then(() => {
                    res.status(204).end();
                })
        }).catch(next);
})



module.exports = route;