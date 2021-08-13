//Route module for handeling queries regarding items

const express = require('express');
const route = express.Router();
const fileUpload = require('express-fileupload');
const Item = require('../db/models').itemModel;
const User = require('../db/models').userModel;
const imageFolder = require('../staticFolderConfig');
//API handlers


//GET Handlers:      
//GET all items:
route.get('/', (req, res, next) => {
    Item.find({})
        .select('title date price userName userEmail images')
        .sort({ date: 'desc' })
        .then((item) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(item);
        })
        .catch(next);
});


//GET Items from Search Bar(name):                  
route.get('/search', (req, res, next) => {
    Item.find(res.query)
        .select('title date price')
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
        .select('title date price')
        .then((item) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(item);
        })
        .catch(next);
});


//GET Item details:                             
route.get('/:id', (req, res, next) => {
    Item.findById(req.params.id)
        .select('title date price userName')
        .then((item) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(item)
        })
        .catch(next);
});



//---------------------------------------------------------------------------//

//POST AN ITEM
//Middleware:
route.use(fileUpload());
//POST Handler:
route.post('/', (req, res, next) => {

    const { body } = req;
    let setCategories = [];
    let index = 0;
    for (let key of Object.keys(body)) {
        var value = body[key];
        if (value == 'on') {
            setCategories[index] = key;
            index++;
        }
    }
    const itemBody = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        categories: setCategories
    }
    Item.create(itemBody)
        .then((item) => {
            Item.findOne(item)
                // .select('title')
                .then(item => {
                    console.log(item._id);
                    if (req.files.file1 != null) {
                        req.files.file1.mv(`${imageFolder}/${item._id}-1`);
                        let path = { filePath: `uploads/${item._id}-1` };
                        console.log(path);
                        Item.updateOne({ _id: item._id },
                            { "$push": { "images": path.filePath } }
                        );
                    };
                    if (req.files.file2 != null) {
                        req.files.file2.mv(`${imageFolder}/${item._id}-2`)
                        let path = { filePath: `uploads/${item._id}-2` };
                        console.log(path);
                        Item.updateOne({ _id: item._id },
                            { "$push": { "images": path.filePath } }
                        )
                    };
                    if (req.files.file3 != null) {
                        req.files.file3.mv(`${imageFolder}/${item._id}-3`)
                        let path = { filePath: `uploads/${item._id}-3` };
                        console.log(path);
                        Item.updateOne({ _id: item._id },
                            { "$push": { "images": path.filePath } }
                        )
                    };

                    // file.mv(`${imageFolder}/${item._id}`);
                    res.header("Access-Control-Allow-Origin", "*");
                    res.status(201).send(item);
                })
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