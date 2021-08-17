//Route module for handeling queries regarding user json 

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
                .select('price title')
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
                .select('price title')
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


//PUT requests
//SOLD and Item:
route.put('/sold/:id', (req, res, next) => {
    User.updateOne({ _id: req.params.id },
        { "$push": { "soldItems": req.body.sold } }
    )
        .then(() => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).end();
        })
        .catch(next);
})

//Marked an Item  favourite
route.put('/favourites/:id', (req, res, next) => {
    User.updateOne({ _id: req.params.id },
        { "$push": { "favourites": req.body.favourite } }
    )
        .then(() => {
            res.header("Access-Control-Allow-Origin", "*");
            res.send('user updated');
        }).catch(next);
})


//---------------------------------------------------------------------------//

//DELETE requests:
//Deleted an Ad
route.delete('/sold/:id', (req, res, next) => {
    User.updateOne({ _id: req.params.id },
        { "$push": { "soldItems": req.body.sold } }
    )
        .then(() => {
            res.header("Access-Control-Allow-Origin", "*");
            res.send('user updated');
        }).catch(next);
})

//Removed an Item from favourite:
route.delete('/favourites/:id', (req, res, next) => {
    User.updateOne({ _id: req.params.id },
        { "$pull": { "favourites": req.body.favourite } }
    )
        .then(() => {
            res.header("Access-Control-Allow-Origin", "*");
            res.send('user updated');
        }).catch(next);
})



module.exports = route;