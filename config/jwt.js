const jwt = require('../node_modules/jsonwebtoken')

module.exports = {createToken}

function createToken(data){
  return new Promise((resolve,reject)=> {
    jwt.sign (
      data,
      "SL0rEnxSiJMLLDGqycuKbfLpSbc6CW5baqW7w0Qt",
      {expiresIn:"1d" },
      (err,token)=> {
        if(err) reject(err)
        resolve(token)
      }
    );    
   })
 }
