const express = require('express');
const route = express.Router();
// const jwt = require('jsonwebtoken');
// const expressJWT = require('express-jwt');
const { OAuth2Client } = require('google-auth-library');
const User = require('../db/models').userModel;

const client = new OAuth2Client("1059582039946-3rije6k0k92ertj2utffkrvdjjgdrkm0.apps.googleusercontent.com");

route.post('/', (req, res, next) => {
    const { googleToken } = req.body;
    function foundAndSend(user){
        res.status(200).send(user);
    }
    function createdAndSend(user){
        res.status(200).send(user);
    }
    function error(user){
        res.status(400).send("Something went wrong...");
    }
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
                            .then(user=>{
                                createdAndSend(user);
                            })
                        }
                    })
                    .catch(this.next);      //Error handeling
            }
            else{
                error();
            }
        })
        .catch(next);
});

module.exports = route;