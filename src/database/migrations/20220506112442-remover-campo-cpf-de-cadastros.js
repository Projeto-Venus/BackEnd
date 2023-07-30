'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('cadastros', 'cpf')
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.createColumn('cadastros', 'cpf', {
          type: Sequelize.STRING,
          allowNull: false
    });

  }

};
