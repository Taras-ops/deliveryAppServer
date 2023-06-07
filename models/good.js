const mongoose = require('mongoose')

const goodSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    date: { type: Date, default: Date.now },
    imageName: String,
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop'
    },
    price: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('Good', goodSchema)
