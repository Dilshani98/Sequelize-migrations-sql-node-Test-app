// 'use strict';
// const {
//   Model
// } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     id: {
//       allowNull: false,
//       primaryKey: true,
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4
//     },
//     name: DataTypes.STRING,
//     email: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };


// module.exports = (sequelize, Sequelize) => {
//   const Dog = sequelize.define("dogs", {
    
//   });
//   return Dog;
// };

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    
    userId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      
    },
    email: {
      type: Sequelize.STRING,
    }

  },
  
  {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.tasks, { 
          onDelete: 'cascade',
          as:"tasks",
         })
      }
    }
  }
  
  );
 
  // User.hasMany(db.comments, { as: "comments" });
  // User.associate = (models) => {
  //   User.hasMany(models.tasks, {
  //     as:"tasks",
  //     onDelete: 'CASCADE',
  //     hooks: true
  //   });
  // };

  return User;
};




