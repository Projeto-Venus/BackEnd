import Sequelize, { Model } from 'sequelize';


class DistanciaMoradia extends Model {
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
        
        this.hasMany(models.Cadastro, { foreignKey: 'id_distancia_moradia', as: 'cadastro' });
    
}

}
export default DistanciaMoradia;