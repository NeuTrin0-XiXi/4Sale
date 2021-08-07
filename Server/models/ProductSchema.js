const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    title: {
        type:String,
        required: [true , "Product Title is required"]
    },


    description: {
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

module.exports = Item = mongoose.model('item' , ProductSchema);     //item is the name given to our collection(model) by us

