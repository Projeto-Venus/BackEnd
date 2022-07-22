'use strict';

//Novos campos

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('cadastros', 'celular',

      
        {
          type: Sequelize.STRING,
          allowNull: false,
        })

        queryInterface.addColumn('cadastros', 'email',

        {
          type: Sequelize.STRING,
          allowNull: false,
        })

        queryInterface.addColumn('cadastros', 'email',
        {
        type: Sequelize.STRING,
        allowNull: false,
        })

        queryInterface.addColumn('cadastros', 'whatsapp': {
          type: Sequelize.STRING,
          allowNull: false
        })

        acessa_internet: {
          type: Sequelize.STRING,
          allowNull: true
        },

        mensagem_celular: {
          type: Sequelize.STRING,
          allowNull: false
        },

        nome_mae: {
          type: Sequelize.STRING,
          allowNull: false
        },

        nome_representante: {
          type: Sequelize.STRING,
          allowNull: false
        },

        beneficio: {
          type: Sequelize.STRING,
          allowNull: false
        },

        num_nis: {
          type: Sequelize.STRING,
          allowNull: false
        },

        profissao: {
          type: Sequelize.STRING,
          allowNull: false
        },

        comodos: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        rede_esgoto: {
          type: Sequelize.STRING,
          allowNull: false
        },

        coleta_lixo: {
          type: Sequelize.STRING,
          allowNull: false
        },

        distancia_moradia: {
          type: Sequelize.STRING, //Verificar tipo de dado
          allowNull: false
        },

        id_religiao: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'religiao', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },

        id_raca: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'racas', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },

        id_escolaridade: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'escolaridade', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },

        id_estado_civil: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'estado_civil', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },

        id_renda: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'renda', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },

        id_distancia_moradia: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'distancia_moradia', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },

        condicao_moradia: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        id_agua_domiciliar: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'agua_domiciliar', key: 'id' },
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

    return queryInterface.removeColumn('cadastros');

  }

};