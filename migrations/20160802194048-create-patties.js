'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('patties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patty_name: {
        type: Sequelize.STRING
      },
      devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      date: {
        type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.DATE      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('patties');
  }
};