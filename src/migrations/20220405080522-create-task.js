'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      done: {
        type: Sequelize.BOOLEAN
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // 'user' refers to table name
          key: 'userId', // 'id' refers to column name in user table
       }      
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
    // Task.associate = (models) => {
    //   Task.belongsTo(models.users, {
    //     foreignKey: 'userId',
    //     as: 'AssignTo',
        
    //   });
    // };
  
  
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};