const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    },
    goods: [{
        ref: 'Product',
        type: mongoose.Schema.Types.ObjectId,
        quantity: Number
    }]
})


module.exports = mongoose.model('Order', orderSchema)