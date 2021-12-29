const mongoose=require('mongoose');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:32,
        trim:true
    },
    lastName:{
        type:String,
        true:true,
        maxLength:30,
    },
    email:{
        type:String,
        required:true,
        unique:String,
        trim:true,
    },
    role:{
        type:Number,
        default:0
    },
    password:{
        type:String,
        required:true,
    },
    salt:String
})

userSchema
  .virtual("password")
  .set(function(password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function() {
    return this._password;
  });

userSchema.method = {
  autheticate: function(plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function(plainpassword) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  }
};
exports.module=mongoose.model("User",userSchema)