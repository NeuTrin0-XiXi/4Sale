//Route module for handeling queries regarding items

const express = require('express');
const route = express.Router();
const Item = require('../db/models').itemModel;
const User = require('../db/models').userModel;


//API handlers

//GET Handlers:      
//GET all items:
route.get('/', (req, res, next) => {
    console.log('GET Request');
    Item.find({})
        .select('name date price')
        .sort({date: 'desc'})
        .then((item) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(item);
        })
        .catch(next);
});


//GET Items from Search Bar(name):                  
route.get('/search', (req, res, next) => {
    Item.find(res.query)
        .select('name date price')
        .then((item) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(item);
        })
        .catch(next);

});


//GET Items from Filters:                           
route.get('/filter', (req, res, next) => {
    // if (req.query.priceUb != undefined && req.query.priceLb != undefined) {
    //     req.query.price = { $lte: req.query.priceUb, $gte: req.query.priceLb };
    //     delete req.query.priceUb;
    //     delete req.query.priceLb;
    // }
    Item.find(req.query)
        .select('name date price')
        .then((item) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(item);
        })
        .catch(next);
});


//GET Item details:                             
route.get('/:id', (req, res, next) => {
    Item.findById(req.params.id)
        .select('name date price userName')
        .then((item) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(item)
        })
        .catch(next);
});



//---------------------------------------------------------------------------//

//post an item

route.post('/', (req, res, next) => {
    Item.create(req.body)
        .then((item) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(201).send(`Ad for ${item.name} posted sucessfully`);
        })
        .catch(next);
});

//--------------------------------------------------------------------------//

//Edit a posted item                               
route.put('/:id', (req, res, next) => {
    Item.updateOne({ _id: req.params.id }, req.body)
        .then((item) => {
        })
        .then(
            Item.findById(req.params.id)
                .then((item) => {
                    res.header("Access-Control-Allow-Origin", "*");
                    res.status(200).send(`Your Ad, ${item.name} has been updated`);
                })
        )
        .catch(next);
});

//-------------------------------------------------------------------------//


//Delete a posted item                              //Get back item name
route.delete('/:id', (req, res, next) => {
    Item.deleteOne({ _id: req.params.id })
        .then((item) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(`Your Ad has been removed`);
        })
        .catch(next);
});



module.exports = route;