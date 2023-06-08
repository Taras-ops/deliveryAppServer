const express = require('express')
const router = express.Router()

const productModel = require('../models/product')
const shopModel = require('../models/shop')

router.get('/', async (req, res) => {
    try{
        const goods = await productModel.find()
        res.json(goods)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})


router.post('/', async (req, res) => {
    try{
        const product = new productModel({
            name: req.body.name,
            shop: req.body.shop,
            imageName: req.body.imageName,
            price: req.body.price
        })
        const shop = await shopModel.findOne({_id: req.body.shop})
        shop.goods.push(product)
        await shop.save()
        const newProduct = await product.save()
        res.status(200).json(newProduct)
    } catch(err){
        res.status(400).json(err)
        console.log(err)
    }
})

router.patch('/', async (req, res) => {
    try{
        const product = await productModel.findOne({
            _id: req.body.id
        })
        if(req.body.price) {
            product.price = req.body.price
        }
        if(req.body.name) {
            product.name = req.body.name
        }
        const newProduct = await product.save()
        res.status(200).json(newProduct)
    } catch(err) {
        res.status(400).json(err)
        console.log(err)
    }
})


router.delete('/', async (req, res) => {
    try {
        await productModel.deleteOne({_id: req.body.id})
    } catch(err) {
        res.status(400).json(err)
        console.log(err)
    }
})


module.exports = router