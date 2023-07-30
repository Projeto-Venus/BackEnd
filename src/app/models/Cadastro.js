import Sequelize, { Model } from 'sequelize';
import { INTEGER } from 'sequelize';

class Cadastro extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                nome_social: Sequelize.STRING,
                num_cartao_nacional_saude: Sequelize.STRING,
                data_nascimento: Sequelize.DATE,
                raca: Sequelize.STRING,
                naturalidade: Sequelize.STRING,
                endereco: Sequelize.STRING,
                bairro: Sequelize.STRING,
                cidade: Sequelize.STRING,
                estado: Sequelize.STRING,
                cep: Sequelize.STRING,

                //novos campos
                celular: Sequelize.STRING,
                email: Sequelize.STRING,
                whatsapp: Sequelize.STRING,
                acessa_internet: Sequelize.STRING,
                mensagem_celular: Sequelize.STRING,
                nome_mae: Sequelize.STRING,
                nome_representante: Sequelize.STRING,
                beneficio: Sequelize.STRING,
                num_nis: Sequelize.STRING,
                profissao: Sequelize.STRING,
                comodos: Sequelize.INTEGER,
                rede_esgoto: Sequelize.STRING,
                coleta_lixo: Sequelize.STRING,
                distancia_moradia: Sequelize.STRING, //Verificar tipo de dado
                religiao: Sequelize.STRING,
                escolaridade: Sequelize.STRING,
                estado_civil: Sequelize.STRING,
                renda: Sequelize.INTEGER,
                condicao_moradia: Sequelize.STRING,
                agua_domiciliar: Sequelize.STRING,


            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'id_usuario', as: 'usuario' });
        this.belongsTo(models.UnidadeReferencia, { foreignKey: 'id_referencia', as: 'unidade_referencia' });
        this.belongsTo(models.Renda, { foreignKey: 'id_renda', as: 'tb_renda' });
        this.belongsTo(models.Religiao, { foreignKey: 'id_religiao', as: 'tb_religiao' });
        this.belongsTo(models.Raca, { foreignKey: 'id_raca', as: 'tb_raca' });
        this.belongsTo(models.Escolaridade, { foreignKey: 'id_escolaridade', as: 'tb_escolaridade' });
        this.belongsTo(models.EstadoCivil, { foreignKey: 'id_estado_civil', as: 'tb_estado_civil' });
        this.belongsTo(models.DistanciaMoradia, { foreignKey: 'id_distancia_moradia', as: 'tb_distancia_moradia' });
        this.belongsTo(models.AguaDomiciliar, { foreignKey: 'id_agua_domiciliar', as: 'tb_agua_domiciliar' });
    }
}
export default Cadastro;