const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    goods: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Good'
    }]
})

module.exports = mongoose.model('Shop', shopSchema)
