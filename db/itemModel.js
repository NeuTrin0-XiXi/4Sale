const mongoose=require('mongoose');
const schema=mongoose.Schema;

//Schema
const itemSchema= new schema({
    title:{
        type: String,
        required: true,
        unique: false
    },
    date:{
        type: Date,
        default: Date.now
    },
    userName:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required: true
    },
    categories: {
        type: [String]
    },
    description:{
        type:String,
        required:true
    }


});


const itemModel=mongoose.model('items',itemSchema);

module.exports=itemModel;