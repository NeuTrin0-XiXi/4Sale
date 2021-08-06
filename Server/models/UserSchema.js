const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required: [true , "Name is required"]
    },
    
    
    phoneNumber: {
        type: Number,
        required: [true , "Phone number is required"]

    },

    email:{
        type:String,
        required: [true , "email ID is required"]
    },
});

const User = mongoose.model('UserDetails' , UserSchema);

module.exports = User;