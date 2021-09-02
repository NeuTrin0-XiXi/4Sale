const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Schema
const userSchema = new schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    favourites: {
        type: [schema.Types.ObjectId],
        ref: 'item'
    },
    soldItems: {
        type: [schema.Types.ObjectId],
        ref: 'item'
    },
    mobile: {
        type: Number,
        default: null
    },
    orders: [{
        _id: schema.Types.ObjectId,
        success: {
            type: Boolean,
            default: false
        }
    }],
    notifications: [{
        _id: schema.Types.ObjectId,
        itemId: schema.Types.ObjectId,
        message: String,
        userName: String,
        userEmail: String,
        mobile: Number,
        dp: String,
        read: {
            type: Boolean,
            default: false
        }
    }]
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;