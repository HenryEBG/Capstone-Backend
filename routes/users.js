const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');
const {validateToken }= require('../middlewares/validateToken.js')
const router = Router();
const upload = require('../libs/storage.js')

// const multer  = require('multer')
// const upload = multer({dest:'images/'});

//router.post('/', upload.single('photo'), usersCtrl.createUser);
router.post('/',  usersCtrl.createUser);
router.post('/login',  usersCtrl.loginUser);

router.post('/logout', usersCtrl.logoutUser);

// the next routes are protected routes that use validateToken before
// execute

// router.get('/', validateToken,usersCtrl.listUsers);
router.get('/', usersCtrl.listUsers);
// router.get('/:id', validateToken, usersCtrl.showUser);
router.get('/:id',  usersCtrl.showUser);

//router.delete('/:id', validateToken, usersCtrl.deleteUser);
router.delete('/:id',  usersCtrl.deleteUser);
// router.put('/:id', validateToken, usersCtrl.updateUser);
router.put('/:id', usersCtrl.updateUser);
module.exports = router;
