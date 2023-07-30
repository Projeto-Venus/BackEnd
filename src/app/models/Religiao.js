import Sequelize, { Model } from 'sequelize';


class Religiao extends Model {
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
        
        this.hasMany(models.Cadastro, { foreignKey: 'id_religiao', as: 'cadastro' });
    
}

}
export default Religiao;