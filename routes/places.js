const { Router } = require('express');
const usersCtrl = require('../controllers/places.js');

const router = Router();

router.post('/', usersCtrl.createPlace);

router.get('/', usersCtrl.listPlaces);

router.get('/:id', usersCtrl.showPlace);

router.delete('/:id', usersCtrl.deletePlace);

router.patch('/:id', usersCtrl.modifyPlace);



module.exports = router;