import Sequelize, { Model } from 'sequelize';


class Escolaridade extends Model {
    static init(sequelize) {
        super.init(
            {
                descricao: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        return this;

    }

    static associate(models) {
        
        this.hasMany(models.Cadastro, { foreignKey: 'id_escolaridade', as: 'cadastro' });
    
}

}
export default Escolaridade;