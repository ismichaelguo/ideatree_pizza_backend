'user strict'

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

  orderTime: String,
  DeliverPickupTime: String,
  orderItems: [{
    id: Number,
    foodName: String,
    foodPrice: Number,
    imgDetail: String,
    imgAlt: String,
    quantity: Number,
  }],
  totalPrice: Number,
  address: String,
  type: String
})

module.exports = mongoose.model('Order', OrderSchema);
