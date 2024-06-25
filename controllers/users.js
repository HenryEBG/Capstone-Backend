const User = require('../models/User');
const bcrypt = require('../node_modules/bcryptjs');
// import bcrypt form 'bcryptjs'

module.exports = {
  createUser,listUsers,loginUser,deleteUser,modifyUser,showUser
};

async function createUser(req, res) {
  try {

    req.body.password=await bcrypt.hash(req.body.password,10);
    const createdUser = await User.create(req.body);
    if (createdUser) {
      createdUser.password="";
      res.status(201).send(createdUser);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

async function modifyUser(req, res) {
  try {
    const modifyUser = await User.find({'_id':req.params.id})

    // const createdUser = await User.create(req.params);
    // if (createdUser) {
    //   res.status(201).send(createdUser);
    // }
    res.status(201).send("modificado");
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteUser(req, res) {
  try {
    const modifyUser = await User.find({'_id':req.params.id})

    // const createdUser = await User.create(req.params);
    // if (createdUser) {
    //   res.status(201).send(createdUser);
    // }
    res.status(201).send("eliminado");
  } catch (err) {
    res.status(400).json(err);
  }
}
async function listUsers(req,res) {
  try {
    res.send('listar users')
    const users = await User.find();
     res.status(200).json(users);
  } catch (error) {
    res.status(400).json('No Beuno:(');
  }
}

async function showUser(req,res) {
  try {
    //res.send('listar users')
    const theUser = await User.find({'_id':req.params.id});
     res.status(200).json(theUser);
  } catch (error) {
    res.status(400).json('No Beuno:(');
  }
}

async function loginUser(req,res){
  try {
    //console.log(req.body)
    const theUser = await User.find({'username':req.body.username, 'password':req.body.password});
    res.send('login user')    
  } catch (error) {
    res.status(400).json('No Beuno:(');
  }
  
}


