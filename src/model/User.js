'user strict'

const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    email:String,
    name:String,
    password:String,
    phone:String,

})

module.exports = mongoose.model('User',UserSchema);