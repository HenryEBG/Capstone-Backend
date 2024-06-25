const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');

const router = Router();

router.post('/', usersCtrl.createUser);

router.get('/', usersCtrl.listUsers);

router.get('/login', usersCtrl.loginUser);

router.get('/:id', usersCtrl.showUser);

router.delete('/:id', usersCtrl.deleteUser);

router.patch('/:id', usersCtrl.modifyUser);

module.exports = router;
