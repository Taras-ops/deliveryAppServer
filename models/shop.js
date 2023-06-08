const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    goods: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

module.exports = mongoose.model('Shop', shopSchema)
