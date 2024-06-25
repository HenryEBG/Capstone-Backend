const { Schema, model } = require('../config/db-connection');
const bcrypt = require ('bcrypt-nodejs')

const userSchema =  Schema({
  username : {
    type: String,
    required: true,
    unique: true,
    min: 5,
    trim:true
  },

  photo : {
    type: String,
  },

  password: {
    type: String,
    required: true,
    min: 5,
  },

  phone: {
    type: String,
    required: false,
    unique: false,
    min: 10,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase : true,
    trim:true

  },
  
  name : {
    type: String,
    required: true,
    unique: false,
    min: 3, 
  },

  userType : {
    type: Number,
    required: true,
  },

  address : {
    street : { type: String },
    city : { type: String },
    state : {type:String},
    zipcode : {type: Number, min:5}
  },

  country : Number,

  region :  Number,

  religion : Number,

  Gender : {type: String, maxlenght:1}
  


},{timestamps:true});

module.exports = model('User', userSchema);
