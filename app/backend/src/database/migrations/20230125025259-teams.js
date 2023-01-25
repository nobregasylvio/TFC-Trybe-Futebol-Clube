'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      team_name: {
        type: Sequelize.STRING,
        allowNull: false,
        underscored: true,
      },
    })
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.createTable('teams');
  }
};