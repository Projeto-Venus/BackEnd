'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('unidades_referencia', 'unidade_referencia')
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.renameTable('unidades_referencia', 'unidade_referencia')


  }

};
