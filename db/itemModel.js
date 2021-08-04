const mongoose=require('mongoose');
const schema=mongoose.Schema;

//Schema
const itemSchema= new schema({
    name:{
        type: String,
        required: true,
        unique: false
    },
    date:{
        type: Date,
        default: Date.now
    },
    // user:{
    //     type: schema.Types.ObjectId
    // },
    price:{
        type: Number,
        required: true
    },
    categories: {
        type: [String]
    },

});


const itemModel=mongoose.model('items',itemSchema);

module.exports=itemModel;