'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios',

      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },

        login: {
          type: Sequelize.STRING,
          allowNull: false
        },

        senha: {
          type: Sequelize.STRING,
          allowNull: false
        },

        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },

        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
      })
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('usuarios');

  }

};
