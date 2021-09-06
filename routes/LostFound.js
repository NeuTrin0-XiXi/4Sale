//Route module for handeling queries regarding Lost/Found Items
const mongoose = require('mongoose')
const express = require('express');
const route = express.Router();
const fileUpload = require('express-fileupload');
const LostFound = require('../db/models').LostFoundModel;
const User = require('../db/models').userModel;
const { uploadToCloudinary, parseImage, removeFromCloudinary } = require('../config/cloudinary-config')

//API handlers
//GET Handlers:      
//GET all found/lost items:
route.get('/', (req, res, next) => {
    LostFound.find({})
        .sort({ date: 'desc' })
        .select('title images date description')
        .then((item) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(item);
        })
        .catch(next);
});


//GET Items from Search Bar(name):                  
// route.get('/search', (req, res, next) => {
//     const { name } = req.query;
//     Item.find({
//         $or: [
//             { title: { $regex: name, $options: 'i' } },
//             { categories: { $regex: name, $options: 'i' } },
//             { description: { $regex: name, $options: 'i' } }
//         ]
//     })
//         .select('title price images')
//         .then((item) => {
//             res.header("Access-Control-Allow-Origin", "*");
//             res.send(item);
//         })
//         .catch(next);

// });

//GET Item details:                             
route.get('/:id', (req, res, next) => {
    LostFound.findById(req.params.id)
        .select('title description date userName images userEmail status claimed')
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
route.post('/', parseImage, async (req, res, next) => {
    try {
        let imageLinks = [];

        for (let encoded of req.files.encodedUri) {
            let uploadedUrl = await uploadToCloudinary(encoded)
            imageLinks.push({
                url: uploadedUrl.url,
                public_id: uploadedUrl.public_id
            });
        }

        const itemBody = {
            title: req.body.title,
            description: req.body.description,
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userID: req.body.userID,
            images: imageLinks,
            status: req.body.status
        }
        LostFound.create(itemBody)
            .then((item) => {
                res.header("Access-Control-Allow-Origin", "*");
                res.status(201).send(item);
            })
            .catch(next);
    } catch (err) {
        next(err);
    }
});


//--------------------------------------------------------------------------//
//Send a Claim Notification 
route.put('/notify/:id', (req, res, next) => {
    LostFound.findById(req.params.id)
        .select('userID userName')
        .then((item) => {
            LostFound.updateOne({ _id: req.params.id },
                { $set: { claimed: true } }
            )
                .catch(next);

            User.findOne({
                _id: item.userID,
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
                        res.status(200).send(`Already notified ${item.userName}`);
                    } else {
                        req.body.notification.read = false;
                        req.body.notification._id = new mongoose.Types.ObjectId();

                        User.findOne({ _id: item.userID })
                            .then(user1 => {
                                const io = require('../config/socket').get();
                                io.to(user1.email).emit('notification', req.body.notification)
                            })
                            .catch(next);

                        User.updateOne({ _id: item.userID },
                            { "$push": { "notifications": req.body.notification } },
                        )
                            .then(user => {
                                res.header("Access-Control-Allow-Origin", "*");
                                res.status(200).send(`Notified ${item.userName}`);
                            })
                    }
                })
                .catch(next);
        })
        .catch(next);
})



//Edit a posted item                               
// route.put('/:id', (req, res, next) => {
//     Item.updateOne({ _id: req.params.id }, req.body)
//         .then(
//             Item.findById(req.params.id)
//                 .then((item) => {
//                     res.header("Access-Control-Allow-Origin", "*");
//                     res.status(200).send(`Your Ad, ${item.name} has been updated`);
//                 })
//         )
//         .catch(next);
// });

//-------------------------------------------------------------------------//


//Delete a posted item                              
route.delete('/:id', (req, res, next) => {
    LostFound.findById(req.params.id)
        .select('images')
        .then(item => {
            for (let image of item.images) {
                removeFromCloudinary(image.public_id);
            }
        });
    LostFound.deleteOne({ _id: req.params.id })
        .then(() => {

            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send(`Your Ad has been removed`);
        })
        .catch(next);
});



module.exports = route;