const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    title: {
        type:String,
        required: [true , "Product Title is required"]
    },


    descripttion: {
        type:String,
        required: [true, "Product Description is required"]
    },
    
    
    
    email: {
        type:String ,    //See how to validate this email
        required: [true, "User emailID is required"]
    },

    
    price: {
        type:Number,
        required: [true, "Product Price is required"]
    },
    
    
    category: {
        type:String,
        required: [true, "Product Category is required"]
    },

});

const PSchema = mongoose.model('items' , ProductSchema);

module.exports = PSchema;

