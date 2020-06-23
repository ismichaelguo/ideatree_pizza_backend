'user strict'

const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    unit: { type: Number, min: 0, max: 9999 },
    streetNum: { type: Number, min: 0, max: 9999 },
    streetName: String,
    suburb: String,
    postcode: { type: Number, min: 0, max: 9999 },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]


});
module.exports = mongoose.model('Address', AddressSchema);