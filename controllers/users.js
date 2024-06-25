const User = require('../models/User');
const bcrypt = require('../node_modules/bcryptjs');
const { createToken } = require('../config/jwt.js');



module.exports = {
  createUser, listUsers, loginUser, deleteUser, updateUser, showUser,logoutUser
};

async function createUser(req, res) {
  try {
    // generate a hash from the password
    req.body.password = await bcrypt.hash(req.body.password, 10);
    //create the user
    const createdUser = await User.create(req.body);
    // create the token for manage session
    const token = await createToken({ id: createdUser._id });
    //console.log(token)
    // erase the passoword from the createdUser to not return the password for security
    createdUser.password = "";
    res.cookie("token", token);
    //we make the response to the client
    res.status(201).send(createdUser);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function loginUser(req, res) {
  try {
    const foundUser = await User.findOne({ 'username': req.body.username });

    if (!foundUser) return res.status(400).json({ message: "Bad credentials,please check your username and password" })
    const isPassword = await bcrypt.compare(req.body.password, foundUser.password);
    console.log(isPassword)
    if (!isPassword) return res.status(400).json({ message: "Bad credentials,please check your username and password" })
    const token = await createToken({ id: foundUser._id });
    res.cookie("token", token);
    foundUser.password = "";
    //we make the response to the client
    res.status(201).send(foundUser);
  } catch (err) {
    res.status(400).json(err);
  }

}

async function logoutUser(req,res) {
  try {
    res.cookie("token","",{expires:new Date(0)})
    res.sendStatus(200)  
  } catch (err) {
    res.status(400).json(err)
  }
  
}

async function updateUser(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body)
    if(!updateUser) res.status(404).json("User not found");
      res.status(201).send('Updated User');
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteUser(req, res) {
  try {
    const deletedUser = await User.findByIdAndDelete( req.params.id)
    if(!deletedUser) res.status(404).json("User not found");
      res.status(201).send('User deleted');
  } catch (err) {
    res.status(400).json(err);
  }
}
async function listUsers(req, res) {
  try {
    const users = await User.find();
    if(!users) return res.status(404).json("Users not found")
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(err);
  }
}

async function showUser(req, res) {
  try {

    const userFound = await User.findById(req.params.id);
    if(!userFound) return res.status(400).json({message:"User not found"})
      userFound.password=""
      res.status(200).json(userFound);
  } catch (error) {
    res.status(400).json('No Beuno:(');
  }
}




