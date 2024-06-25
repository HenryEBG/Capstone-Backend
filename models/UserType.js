const { Schema, model } = require('../config/db-connection');
const userSchema = Schema({
  description : {
    type: String,
    required: true,
    unique: true,
    min: 5,
    trim:true
  },
});

module.exports = model('UserType', userSchema);
