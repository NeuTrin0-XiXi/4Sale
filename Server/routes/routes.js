const express = require('express');
const User = require('../models/UserSchema');
const Product = require('../models/ProductSchema');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({                   
    destination: (req , res , callback) => {
        callback(null , "../../client/public/uploads/");
    },
    filename: (req , file , callback) => {
        callback(null , file.originalname);
    }
})

const upload = multer({storage: storage}); 

router.get('/' , (req , res) => {
    Product.find()
    .then((items) => res.json(items));
})

router.post('/sell' , upload.single("ProductImage") ,(req,res) => {
    const newProduct = new Product({
        title: req.body.title,
        description: req.body.description,
        email: req.body.email,
        price: req.body.price,
        category: req.body.category,
        ProductImage: req.file.originalname
    });

    // 
    router.get('/product/:_id' , (req , res) => {
        Product.findById(_id , (err , docs) => {
            console.log("Successfully Fetched....")
        })
        .then((items => res.json(items)));
    })

    newProduct.save()
    .then((item) => res.json(item));
})

// router.delete('/yourpage/:id' , (req , res)) => {

// }

module.exports = router;


