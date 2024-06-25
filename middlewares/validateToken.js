const { verify } = require('../node_modules/jsonwebtoken')
module.exports = {validateToken}
async function validateToken(req,res,next){
  const {token}= req.cookies;
  if(!token) return res.status(401).json({message: "No token, authorization denied"})
  verify(token,"SL0rEnxSiJMLLDGqycuKbfLpSbc6CW5baqW7w0Qt",(err,user) => {
    if(err) return res.status(403).json({message: "Invalid token, authorization denied"})
   //console.log(user)
  req.user = user
    next()
  })
}