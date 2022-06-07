const mongoose= require('mongoose');
const {ObjectId} =mongoose.schema
 const cartProduct=new mongoose.schema({
     product:{
         type:ObjectId,
         ref:'Product',
     },
     name:String,
     count:String,
     price:Number
 })
const ProductCart=mongoose.model('ProductCart',ProductCart)

const OrderSchema=new mongoose.schema({
products:[cartProduct],
transaction_id:{},
amount:{
type:Number
},
user:{
    type:ObjectId,
    ref:'User'
}
},{
    timeStamp:true
})
const Order=mongoose.model('OrderSchema',OrderSchema)
module.exports={
    ProductCart,
    Order
}