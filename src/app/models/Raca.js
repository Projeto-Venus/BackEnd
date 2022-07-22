import Sequelize, { Model } from 'sequelize';


class Raca extends Model {
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
        
        this.hasMany(models.Cadastro, { foreignKey: 'id_raca', as: 'cadastro' });
    
}

}
export default Raca;