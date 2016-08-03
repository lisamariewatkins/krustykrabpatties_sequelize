'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('patties', [
        {patty_name: 'Primetime', devoured: true, date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        {patty_name: 'Terulingua', devoured: false, date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        {patty_name: 'Bison Burger', devoured: true, date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        {patty_name: 'Ahi Tuna', devoured: false, date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        {patty_name: 'Magic Shroom', devoured: true, date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        {patty_name: 'El Diablo', devoured: true, date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        {patty_name: 'Buffalo Bill', devoured: false, date: new Date(), createdAt: new Date(), updatedAt: new Date()}
        ])
    
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('patties'//, [
        //{patty_name: 'Primetime', devoured: true},
        // {patty_name: 'Terulingua', devoured: false, date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        // {patty_name: 'Bison Burger', devoured: true, date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        // {patty_name: 'Ahi Tuna', devoured: false, date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        // {patty_name: 'Magic Shroom', devoured: true, date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        // {patty_name: 'El Diablo', devoured: true, date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        // {patty_name: 'Buffalo Bill', devoured: false, date: new Date(), createdAt: new Date(), updatedAt: new Date()}
        //]
        );
  }
};
