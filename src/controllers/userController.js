const db = require('../models');
const User = db.users;

const createUser = (req, res) => {
    console.log(User)
    
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
    const user = req.body;
    // Save dog in the database
    User.create(user)
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

  const getUser = async(req, res) => {
    const { id } = req.params;

    const user = await User.findOne({
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




  
  module.exports = {
    createUser,
    getUser
  };
