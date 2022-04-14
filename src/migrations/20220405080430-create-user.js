'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()")
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()")
      }
    });
    // User.belongsToMany(Task, { through: 'id' });\

  //   User.associate = (models) => {
  //     User.hasMany(models.tasks, {
  //       as:"tasks",
  //       onDelete: 'CASCADE',
  //       hooks: true
  //     });
  //   };
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};