import Sequelize, { Model } from 'sequelize';


class Usuario extends Model {
    static init(sequelize) {
        super.init(
            {
                cpf: Sequelize.STRING,
                senha: Sequelize.STRING,
            },
            {
                sequelize
            }
        )

        return this;

    }

    static associate(models) {

        this.hasOne(models.Cadastro, { foreignKey: 'id_usuario', as: 'cadastro' });

    }

}
export default Usuario;