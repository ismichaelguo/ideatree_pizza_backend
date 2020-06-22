'user strict'

const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    email:String,
    name:String,
    password:String,
    phone:String,
    addresses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Address"
        }
    ]

})

module.exports = mongoose.model('User',UserSchema);