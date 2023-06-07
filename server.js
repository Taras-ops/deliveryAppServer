require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const goodRouter = require('./routes/goodRouter')
const shopRouter = require('./routes/shopRouter')

const port = 5000

mongoose.connect(`mongodb+srv://baraniuktaras098:${process.env.MONGODB_PASSWORD}@cluster0.yxtigm4.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log('DB is successful'))
    .catch((err) => console.log(err))

app.use(cors())
app.use(express.json()) 
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.use('/goods', goodRouter)
app.use('/shops', shopRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})