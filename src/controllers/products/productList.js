const Product = require('../../model/Product');
const mongoose = require('mongoose');

async function productList (ctx){
    let {page,pageSize} = ctx.params;
    page = +page;
    pageSize = + pageSize

    const skip = (page -1)* pageSize;
    const total = await Product.find().countDocuments();
    const res = await Product.find({}).skip(skip).limit(pageSize)

    ctx.body = {
        result:res,
        total,
    }
}

module.exports = productList;