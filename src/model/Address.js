'user strict'

const mongoose = require ('mongoose');

const AddressSchema = new mongoose.Schema({
    unit:String,
    streetNum:{ type: Number, min:1, max: 9999 },
    streetName:{ type: Number, min:1, max: 9999 },
    suburb:String,
    postcode:{ type: Number, min:1, max: 9999 },
    users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]


});
module.exports = mongoose.model('Address',AddressSchema);