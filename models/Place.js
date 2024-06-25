const { Schema, model } = require('../config/db-connection');
const placeSchema =  Schema({
  name : { type: String,required: true,unique: true,min: 5,trim:true},
  photo : { type: String },
  phone: {type: String,min: 10},
  email: {type: String,lowercase : true,trim:true},  
  url : {type: String,required: true },
  placeType : {  type: Number, required: true },
  address : {type: String,required:true},
  location: {type:String,required:true}

},{timestamps:true});

module.exports = model('Place', userSchema);
