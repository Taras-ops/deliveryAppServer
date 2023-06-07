const express = require('express')
const router = express.Router()

const shopModel = require('../models/shop')

router.get('', async (req, res) => {
    try{
        const shops = await shopModel.find().populate('goods')
        res.json(shops)
    } catch(err) {
        res.send(err)
        console.log(err)
    }
})

router.post('', async (req, res) => {
    try{
        const shop = new shopModel({
            name: req.body.name
        })
        const newShop = await shop.save()
        res.status(200).send(newShop)
    }   catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
})

module.exports = router