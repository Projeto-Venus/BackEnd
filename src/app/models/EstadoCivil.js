import Sequelize, { Model } from 'sequelize';


class EstadoCivil extends Model {
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
        
        this.hasMany(models.Cadastro, { foreignKey: 'id_estado_civil', as: 'cadastro' });
    
}

}
export default EstadoCivil;