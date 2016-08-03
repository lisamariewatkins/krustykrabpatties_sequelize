var Sequelize = require('sequelize');

var connection = new Sequelize('kks_schema', 'lisamwatkins', '');

connection.sync().then(function(){
    var Patties = connection.define('patties',{
        patty_name: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        devoured: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }, {
            freezeTableName: true
        }
    });
});

module.exports = connection;
