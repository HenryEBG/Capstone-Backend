const Place = require('../models/Place');
module.exports = {
  createPlace, listPlaces, listPlace, deletePlace, updatePlace};
  
  async function createPlace(req, res) { 
    try {
      console.log(req.user);
     const newPlace = new Place ({
      name : req.body.name,
      photo : req.body.photo,
      description:req.body.description,
      phone:req.body.phone,
      email:req.body.email,
      url:req.body.url,
      placeType:req.body.placeType,
      address:req.body.address,
      location:req.body.location,
      user:req.user.id
     });
     console.log(newPlace)
      const createdPlace = await newPlace.save();
      if(!createdPlace) return res.status(404).json("error")
      res.status(201).send(createdPlace);
    } catch (err) {
      res.status(400).json(err);
    }
  };

  async function listPlaces(req, res) { 
    try {
      const places = await Place.find()
      res.json(places)      
    } catch (error) {
      res.status(400).json(err);
    }
  };
  async function listPlace(req, res) {
    try {
      const place = await Place.findById(req.params.id)
      if(!place) return res.status(404).json("Place not found")
      res.json(place)
    } catch (err) {
      res.status(400).json(err);
    }
   };
  async function deletePlace(req, res) {
    try {
      const place = await Place.findByIdAndDelete(req.params.id)
      if(!place) return res.status(404).json("Place not found")
      res.json(place)     
    } catch (error) {
      res.status(400).json(err);
    }
   };
  async function updatePlace(req, res) {
    try {
      const place = await Place.findByIdAndUpdate(req.params.id,req.body)
      if(!place) return res.status(404).json("Place not found")
      res.json(place)     
    } catch (error) {
      res.status(400).json(err);
    }
  };


