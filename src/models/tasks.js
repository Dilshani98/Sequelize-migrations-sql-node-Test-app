// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Task extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Task.init({
//     id: {
//       allowNull: false,
//       primaryKey: true,
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4
//     },
//     name: DataTypes.STRING,
//     done: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'Task',
//   });
//   return Task;
// };

module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define(
    "tasks",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // userId: {
      //   allowNull: true,
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "users", // 'user' refers to table name
      //     key: "userId", // 'id' refers to column name in user table
      //   },
      // },

      done: {
        type: Sequelize.BOOLEAN,
      },
    },

    {
      classMethods: {
        associate: function (models) {
          Task.belongsTo(models.users, {
            foreignKey: "userId",
            as: "AssignTo",
            foreignKey: { allowNull: false },
          });
        },
      },
    }
  );

  return Task;
};
