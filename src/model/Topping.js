"use strict";

const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  id: Number,
  type: String,
  name: String,
  imgSrc: String,
  imgAlt: String,
  price: Number,
});

const ToppingSchema = new mongoose.Schema(
  {
    selectionId: Number,
    header: String,
    item: [ItemSchema],
  },
  { collection: "toppings" }
);

module.exports = mongoose.model("Topping", ToppingSchema);
