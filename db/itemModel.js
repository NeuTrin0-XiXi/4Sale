const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Schema
const itemSchema = new schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        minimum: 0,
        required: true
    },
    categories: {
        type: [String]
    },
    images: [{
        url: String,
        public_id: String
    }],
    description: {
        type: String,
        required: true
    },
    sold: {
        type: Boolean,
        default: false
    }
});


const itemModel = mongoose.model('items', itemSchema);

module.exports = itemModel;