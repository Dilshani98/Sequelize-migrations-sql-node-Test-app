const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

module.exports = function () {

    router.post('/createUser', userController.createUser);
    router.get('/getAll', userController.getUsers);
    router.get('/:id', userController.getUserByID);
    // router.patch('/updateuser/:id', userController.updateUser);
    router.delete('/deleteUserById/:id', userController.deleteUserById);
    
    
    return router;
}