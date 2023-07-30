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

        queryInterface.addColumn('cadastros', 'whatsapp',
        {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        })

        queryInterface.addColumn('cadastros', 'acessa_internet',
        {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        })

        queryInterface.addColumn('cadastros', 'mensagem_celular', {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        })

        queryInterface.addColumn('cadastros', 'nome_mae',
        {
          type: Sequelize.STRING,
          allowNull: false,
        })

        queryInterface.addColumn('cadastros', 'nome_representante',
        {
          type: Sequelize.STRING,
          allowNull: false,
        })

        queryInterface.addColumn('cadastros', 'beneficio',
        {
          type: Sequelize.STRING,
          allowNull: false,
        })

        queryInterface.addColumn('cadastros', 'num_nis',
        {
          type: Sequelize.STRING,
          allowNull: false,
        })

        queryInterface.addColumn('cadastros', 'profissao',
        {
          type: Sequelize.STRING,
          allowNull: false,
        })

        queryInterface.addColumn('cadastros', 'comodos',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
        })

        queryInterface.addColumn('cadastros', 'rede_esgoto',
        {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        })

        queryInterface.addColumn('cadastros', 'coleta_lixo',
        {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        })

        queryInterface.addColumn('cadastros', 'distancia_moradia',
        {
          type: Sequelize.STRING, //Verificar tipo de dado
          allowNull: false,
        })

        queryInterface.addColumn('cadastros', 'religiao',
        {
          type: Sequelize.STRING,
          allowNull: false,
          references: { model: 'religiao', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        })

        queryInterface.addColumn('cadastros', 'raca',
        {
          type: Sequelize.STRING,
          allowNull: false,
          references: { model: 'racas', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        })

        queryInterface.addColumn('cadastros', 'escolaridade',
        {
          type: Sequelize.STRING,
          allowNull: false,
          references: { model: 'escolaridade', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        })

        queryInterface.addColumn('cadastros', 'estado_civil',
        {
          type: Sequelize.STRING,
          allowNull: false,
          references: { model: 'estado_civil', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        })

        queryInterface.addColumn('cadastros', 'renda',
        {
          type: Sequelize.STRING,
          allowNull: false,
          references: { model: 'renda', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        })

        queryInterface.addColumn('cadastros', 'id_distancia_moradia',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'distancia_moradia', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        })

        queryInterface.addColumn('cadastros', 'condicao_moradia',
        {
          type: Sequelize.STRING,
          allowNull: false,
        })

        queryInterface.addColumn('cadastros', 'agua_domiciliar',
        {
          type: Sequelize.STRING,
          allowNull: false,
          references: { model: 'agua_domiciliar', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        })

        queryInterface.addColumn('cadastros', 'created_at',
        {
          type: Sequelize.DATE,
          allowNull: false,
        })

        queryInterface.addColumn('cadastros', 'updated_at',
        {
          type: Sequelize.DATE,
          allowNull: false,
        })
      },
  

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('cadastros');

  }

};