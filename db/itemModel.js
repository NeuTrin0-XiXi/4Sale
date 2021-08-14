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
    userID:{    //Not provided to frontend  //Only used in case for notifying user for Buy notification
        type: schema.Types.ObjectId,
        ref: 'user'
    },
    userName:{
        type: String,
        required:true
    },
    userEmail:{
        type:String,
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
    },
    images:{
        type:Number
    }
});


const itemModel=mongoose.model('items',itemSchema);

module.exports=itemModel;