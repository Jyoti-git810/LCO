const mongoose = require('mongoose')
const category = require('./category')
const {ObjectId} = mongoose.schema
const Product= new mongoose.schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 32,
    },
    price:{
        type:Number,
        required:true,
        trim:true,
        maxLength:32
    },
    stock:{
        type:Number,
    },
    sold:{
        type:Number,
        default:0
    },
    photo:{
        type:Buffer,
    },
    category:{
        type:ObjectId,
        ref:Category,
        required:true
    }
},{
    timeStamp:true
})
module.exports = mongoose.model('Product',Product)