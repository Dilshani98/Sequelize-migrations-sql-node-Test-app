const db = require("../models");
const User = db.users;

const createUser = (req, res) => {
  console.log(User);

  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
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
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};

const getUserByID = async (req, res) => {
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

const getUsers = async (req, res) => {
  const user = User.findAll({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

const deleteUserById = async (req, res) => {
  const userId = req.params.id;
  console.log("req", userId);
  if (!userId) {
    return res.status(400).send({
      message: "Please provide a id for the user you are trying to delete!",
    });
  }

  const user = await User.findOne({
    where: {
      userId: userId,
    },
  });

  if (!user) {
    return res.status(400).send({
      message: `No user found with the id ${userId}`,
    });
  }

  try {
    await user.destroy();
    return res.send({
      message: `User ${userId} has been deleted!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

module.exports = {
  createUser,
  getUsers,
  deleteUserById,
  getUserByID,
};
