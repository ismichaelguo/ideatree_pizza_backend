'use strict'

const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    id: Number,
    storeName: String,
    address: String,
    suburb: String,
    state: String,
    postcode: String,
    phone: String,
});

const CityStoreSchema = new mongoose.Schema({
    cityId: Number,
    city: String,
    stores: [StoreSchema]
});

const StateStoreSchema = new mongoose.Schema({
    stateId: Number,
    states: String,
    cities: [CityStoreSchema]
});

module.exports = mongoose.model('store',StateStoreSchema);
