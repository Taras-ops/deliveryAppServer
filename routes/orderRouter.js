const express = require('express')
const router = express.Router()

const orderModel = require('../models/order')

router.get('', async (req, res) => {
    try{
        const orders = await orderModel.find().populate('goods')
        res.status(200).json(orders)
    } catch(err) {
        console.log(err)
        res.status(400).send(err)
    }
})

router.post('', async (req, res) => {
    try{
        const order = new orderModel({
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            goods: req.body.goods
        })
        const newOrder = await order.save()
        res.status(200).json(newOrder)
    } catch(err) {
        console.log(err)
        res.status(400).send(err)
    }
})

module.exports = router