const express = require('express');
const User = require('../models/UserSchema');
const Product = require('../models/ProductSchema');
const router = express.Router();

router.get('/' , (req , res) => {
    Product.find()
    .then((items) => res.json(items));
})

router.post('/sell' , (req,res) => {
    const newProduct = new Product({
        title: req.body.title,
        description: req.body.description,
        email: req.body.email,
        price: req.body.price,
        category: req.body.category
    });

    newProduct.save()
    .then((item) => res.json(item));
})

// router.delete('/yourpage/:id' , (req , res)) => {

// }

module.exports = router;


