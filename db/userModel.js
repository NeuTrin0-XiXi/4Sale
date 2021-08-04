const mongoose=require('mongoose');
const schema=mongoose.Schema;

//Schema
const userSchema=new schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    favourites:{
        type: [schema.Types.ObjectId],
        ref: 'item'
    },
    soldItems:{
        type: [schema.Types.ObjectId],
        ref: 'item'
    }
});

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;