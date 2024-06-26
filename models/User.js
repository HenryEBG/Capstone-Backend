const { Schema, model } = require('../config/db-connection');
const bcrypt = require ('bcrypt-nodejs')

const userSchema =  Schema({
  username : {
    type: String,
    required: true,
    // unique: true,
    min: 5,
    trim:true
  },

  // photo : {
  //   type: String,
  // },

  password: {
    type: String,
    required: true,
    min: 5,
  },

  phone: {
    type: String,
    unique: false,
    min: 10,
  },

  email: {
    type: String,
    required: true,
    // unique: true,
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
    type:String,
    required: true,
  },

    street : { type: String },
    city : { type: String },
    state : {type:String},
    zipcode : {type: String, min:5},


  country : String,

  region :  String,

  religion : String,

  gender : {type: String}
  


},{timestamps:true});

userSchema.set("autoIndex", false);
userSchema.index({ username: 1, name: 1 });

module.exports = model('User', userSchema);
