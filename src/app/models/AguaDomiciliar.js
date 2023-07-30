import Sequelize, { Model } from 'sequelize';


class AguaDomiciliar extends Model {
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
        
        this.hasMany(models.Cadastro, { foreignKey: 'id_agua_domiciliar', as: 'cadastro' });
    
}

}
export default AguaDomiciliar;