const mongoose=require('mongoose');
const schema=mongoose.Schema;

//Schemas
//Item Schema:
const itemSchema= new schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    userName:{
        type: String,
        required: true
    },
    userEmail:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    categories: {
        type: [String]
    }
});

//User Schema
const userSchema=new schema({
    name: {
        type: String,
        required: [true,"This field is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true,"This field is required"],
        unique: true
    },
    favourites:{
        type: [String],
        default: []
    }
});



//Models
const itemModel=mongoose.model('items',itemSchema);
const userModel=mongoose.model('user',userSchema);

module.exports={
    itemModel,
    userModel
}
