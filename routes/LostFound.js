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

//---------------------------------------------------------------------------//

//POST AN ITEM
//Middleware:
route.use(fileUpload());
//POST Handler:
route.post('/', parseImage, async (req, res, next) => {
    try {
        let itemBody = {
            title: req.body.title,
            description: req.body.description,
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            status: req.body.status
        }

        if (req.files) {
            let imageLinks = {};
            let uploadedUrl = await uploadToCloudinary(req.files.encodedUri[0])
            imageLinks = {
                url: uploadedUrl.url,
                public_id: uploadedUrl.public_id
            };
            itemBody['images'] = imageLinks
        }

        LostFound.create(itemBody)
            .then((item) => {
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
        .then((item) => {
            LostFound.updateOne({ _id: req.params.id },
                { $set: { claimed: true } }
            )
                .catch(next);

            User.findOne({
                email: item.userEmail,
                notifications: {
                    $elemMatch: {
                        message: req.body.notification.message,
                        userEmail: req.body.notification.userEmail
                    }
                }
            })
                .then(user => {
                    if (user != null) {
                        res.status(200).send(`Already notified ${item.userName}`);
                    } else {
                        req.body.notification.read = false;
                        req.body.notification._id = new mongoose.Types.ObjectId();

                        const io = require('../config/socket').get();
                        io.to(item.userEmail).emit('notification', req.body.notification)

                        User.updateOne({ email: item.userEmail },
                            { "$push": { "notifications": req.body.notification } },
                        )
                            .then(() => {
                                res.status(200).send({
                                    item,
                                    message: `Notified ${item.userName}`
                                });
                            })
                            .catch(next);
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
            removeFromCloudinary(item.images.public_id);
        });
    LostFound.deleteOne({ _id: req.params.id })
        .then(() => {

            res.status(200).send(`Your Ad has been removed`);
        })
        .catch(next);
});



module.exports = route;