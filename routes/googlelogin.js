const express = require('express');
const route = express.Router();
const { OAuth2Client } = require('google-auth-library');
const User = require('../db/models').userModel;
const Item = require('../db/models').itemModel;
const genToken = require('../config/auth').genToken;

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

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
            .catch(next);

        await Item.find({ _id: { $in: user.ads } })
            .select('price title images')
            .sort({ date: 'desc' })
            .then(items => {
                user1.ads = items;
            })
            .catch(next);

        const accessToken = genToken({ email: user.email, id: user._id })
        res.status(200).send({ user: user1, accessToken });
    };

    function createdAndSend(user) {
        const accessToken = genToken({ email: user.email, id: user._id })
        res.status(200).send({ user: user, accessToken });
    };

    //Main function
    client.verifyIdToken({ idToken: googleToken, audience: process.env.GOOGLE_CLIENT_ID})
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
                    .catch(next);
            }
            else {
                next();
            }
        })
        .catch(next);
});

module.exports = route;