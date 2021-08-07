const express = require('express');
const User = require('../models/UserSchema');
const Product = require('../models/ProductSchema');
const router = express.Router();

router.get('/4Sale' , (req , res) => {
    Product.find()
    .then((items) => res.json(items));
})

router.post('/sell' , (req,res,next) => {
    Product.create(req.body)
    .then((item)=>{
        res.send(item);
    })
    .catch(next);
})

// router.delete('/yourpage/:id' , (req , res)) => {

// }

module.exports = router;


