const Place = require('../models/Place');
module.exports = {
  createPlace, listPlaces, listPlace, deletePlace, updatePlace};
  
  async function createPlace(req, res) { 
    try {
      const createdPlace = await Place.create(req.body);
      res.status(201).send(createdPlace);
    } catch (error) {
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
    } catch (error) {
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


