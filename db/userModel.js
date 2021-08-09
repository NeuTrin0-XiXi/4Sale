const mongoose=require('mongoose');
const schema=mongoose.Schema;

//Schema
const userSchema=new schema({
    name:{
        type: String,
        required: true,
        unique: false
    },
    id_token:{
        type:String
    },
    email:{
        type: String,
        required: true
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