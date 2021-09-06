const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Schema
const LostFoundSchema = new schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    userID: {    //Not provided to frontend  //Only used in case for notifying user for Claim notification
        type: schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    images: [{
        url: String,
        public_id: String
    }],
    description: {
        type: String,
        required: true
    },
    status: {
        type: String
    },
    claimed: {
        type: Boolean,
        default: false
    }

});


const LostFoundModel = mongoose.model('LostFound', LostFoundSchema);

module.exports = LostFoundModel;