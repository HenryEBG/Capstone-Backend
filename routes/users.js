const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');
const {validateToken }= require('../middlewares/validateToken.js')
const router = Router();

router.post('/', usersCtrl.createUser);



router.post('/login', usersCtrl.loginUser);

router.post('/logout', usersCtrl.logoutUser);

// the next routes are protected routes that use validateToken before
// execute

router.get('/', validateToken,usersCtrl.listUsers);

router.get('/:id', validateToken, usersCtrl.showUser);

router.delete('/:id', validateToken, usersCtrl.deleteUser);

router.put('/:id', validateToken, usersCtrl.updateUser);

module.exports = router;
