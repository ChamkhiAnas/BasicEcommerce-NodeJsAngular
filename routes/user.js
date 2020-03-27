const express = require('express');
const UserController = require('./../controllers/UserController');

const router = express.Router();

router.get('/users',UserController.getAllUsers);
router.get('/users/create', UserController.createUser);
router.post('/users', UserController.storeUser);
router.get('/users/:id/edit', UserController.editUser)
router.get('/users/:id', UserController.showOneUser)
router.patch('/users/:id', UserController.patchUser)
router.post('/users/:id', UserController.updateUser);

router.get('/users/:id/delete', UserController.deleteUser)


module.exports = router;