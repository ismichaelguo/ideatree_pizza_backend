'use strict'

const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    id: Number,
    imgSrc: String,
    imgDetail: String,
    imgAlt: String,
    name: String,
    description: String,
    price: String,
    calories: String,
})

const ProductSchema = new mongoose.Schema({
    itemID: Number,
    itemFirstName: String,
    itemLastName: String,
    locationID: String,
    items: [ItemSchema],


},{ collection : 'products' })

module.exports = mongoose.model('Product',ProductSchema)
