'use strict';
module.exports = function(sequelize, DataTypes) {
  var patties = sequelize.define('patties', {
    patty_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return patties;
};