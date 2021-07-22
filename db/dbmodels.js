const mongoose=require('mongoose');
const schema=mongoose.Schema;

//Schema structure:
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
    image: {
        type: ImageData,
        required: true
    }
});
const itemModel=mongoose.model('item',itemSchema);

module.exports={
    itemModel
}
