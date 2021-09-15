const express = require('express');
const route = express.Router();
// const jwt = require('jsonwebtoken');
// const expressJWT = require('express-jwt');
const { OAuth2Client } = require('google-auth-library');
const User = require('../db/models').userModel;
const Item = require('../db/models').itemModel;

const client = new OAuth2Client("1059582039946-3rije6k0k92ertj2utffkrvdjjgdrkm0.apps.googleusercontent.com");

route.post('/', (req, res, next) => {
    const { googleToken } = req.body;
    async function foundAndSend(user) {
        let user1 = { ...user._doc };
        await Item.find({ _id: { $in: user.favourites } })
            .select('price title images')
            .sort({ date: 'desc' })
            .then(items => {
                user1.favourites = items
            })
        await Item.find({ _id: { $in: user.ads } })
            .select('price title images')
            .sort({ date: 'desc' })
            .then(items => {
                user1.ads = items;
            });
        res.status(200).send(user1);
    };

    function createdAndSend(user) {
        res.status(200).send(user);
    };
    function error() {
        next();
    };

    //Main function
    client.verifyIdToken({ idToken: googleToken, audience: "1059582039946-3rije6k0k92ertj2utffkrvdjjgdrkm0.apps.googleusercontent.com" })
        .then(res => {
            const { email_verified, name, email } = res.payload;
            if (email_verified) {
                User.findOne({ email })
                    .then((user) => {
                        if (user) {
                            foundAndSend(user);
                        } else {
                            User.create({ name, email })
                                .then(user => {
                                    createdAndSend(user);
                                })
                        }
                    })
                    .catch(next);      //Error handeling
            }
            else {
                error();
            }
        })
        .catch(next);
});

module.exports = route;