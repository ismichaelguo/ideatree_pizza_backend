'user strict'

const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    email:String,
    name:String,
    password:String,
    phone:String,
    order: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Order"
        }
    ]

})

module.exports = mongoose.model('User',UserSchema);