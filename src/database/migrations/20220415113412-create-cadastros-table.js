'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cadastros',

      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },

        nome: {
          type: Sequelize.STRING,
          allowNull: false
        },


        nome_social: {
          type: Sequelize.STRING,
          allowNull: true
        },

        num_cartao_nacional_saude: {
          type: Sequelize.STRING,
          allowNull: false
        },

        cpf: {
          type: Sequelize.STRING,
          allowNull: false
        },

        data_nascimento: {
          type: Sequelize.DATE,
          allowNull: false
        },

        raca: {
          type: Sequelize.STRING,
          allowNull: false
        },

        naturalidade: {
          type: Sequelize.STRING,
          allowNull: false
        },

        endereco: {
          type: Sequelize.STRING,
          allowNull: false
        },

        bairro: {
          type: Sequelize.STRING,
          allowNull: false
        },

        cidade: {
          type: Sequelize.STRING,
          allowNull: false
        },

        estado: {
          type: Sequelize.STRING,
          allowNull: false
        },

        cep: {
          type: Sequelize.STRING,
          allowNull: false
        },

        id_usuario: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'usuarios', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },

        id_referencia: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'unidades_referencia', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
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

    return queryInterface.dropTable('cadastros');

  }

};
