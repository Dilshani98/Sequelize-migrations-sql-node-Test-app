const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

module.exports = function () {

    router.post('/createTask', taskController.createTask);
    router.get('/getAll', taskController.getTasks);
    router.get('/:id', taskController.getTaskByID);
    // router.patch('/updateuser/:id', userController.updateUser);
    router.delete('/deleteTask/:id', taskController.deleteTask);
    
    
    return router;
}