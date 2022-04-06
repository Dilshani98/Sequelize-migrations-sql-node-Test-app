const db = require('../models');
const Task = db.tasks;

const createTask = (req, res) => {
   
    
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a user
    // const user = {
    //   name: req.body.name,
    //   address: req.body.address,
    // };
    const task = req.body;
    // Save task in the database
    Task.create(task)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      });
  };

  const getTasks = async(req, res) => {

    return Task.findAll({}).then(data => {

        res.send(data);}).catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."})
            ;})

  };

  const getTaskByID = async(req, res) => {
    const { id } = req.params;

    const user = await Task.findOne({
      where: {
        id,
      },
    });
  
    if (!user) {
      return res.status(400).send({
        message: `No user found with the id ${id}`,
      });
    }
  
    return res.send(user);
  };



 const deleteTask = async (req, res) => {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).send({
        message: 'Please provide a id for the user you are trying to delete!',
      });
    }
  
    const user = await Task.findOne({
      where: {
        id,
      },
    });
  
    if (!user) {
      return res.status(400).send({
        message: `No user found with the id ${id}`,
      });
    }
  
    try {
      await user.destroy();
      return res.send({
        message: `User ${id} has been deleted!`,
      });
    } catch (err) {
      return res.status(500).send({
        message: `Error: ${err.message}`,
      });
    }
  };

  
  module.exports = {
    createTask,
    getTaskByID,
    deleteTask,
    getTasks
  };
