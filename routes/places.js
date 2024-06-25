const { Router } = require('express');
const placesCtrl = require('../controllers/places.js');
const {validateToken }= require('../middlewares/validateToken.js')
const router = Router();

router.post('/',validateToken, placesCtrl.createPlace);

router.get('/', validateToken, placesCtrl.listPlaces);

router.get('/:id', validateToken, placesCtrl.listPlace);

router.delete('/:id', validateToken, placesCtrl.deletePlace);

router.patch('/:id', validateToken, placesCtrl.updatePlace);



module.exports = router;