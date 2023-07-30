'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('usuarios', 'login', 'cpf')
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.renameColumn('usuarios', 'cpf', 'login')


  }

};
