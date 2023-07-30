import Sequelize, { Model } from 'sequelize';


class Renda extends Model {
    static init(sequelize) {
        super.init(
            {
                descricao: Sequelize.STRING, //observar o diagrama (!tabela somente com a coluna ID)
            },
            {
                sequelize,
            }
        );

        return this;

    }

    static associate(models) {
        
        this.hasMany(models.Cadastro, { foreignKey: 'id_renda', as: 'cadastro' });
    
}

}
export default Renda;