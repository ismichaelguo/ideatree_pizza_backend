const Product = require('../../model/Product');
const mongoose = require("mongoose");

async function deleteProduct (ctx){
    const {id } = ctx.params;
    const { idOfItem } = ctx.params;
    console.log("id",id)
    console.log("itemid",idOfItem)


    let itemId = parseInt(idOfItem)

    const res = await Product.updateOne({_id: new mongoose.Types.ObjectId(id)},{$pull:{"items":{id:itemId}}});
    ctx.body = {
        message:"Deleted!",
        res,
    }
}

module.exports = deleteProduct;