import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs'; 

class Usuario extends Model {
    static init(sequelize) {
        super.init(
            {
                cpf: Sequelize.STRING,
                senha_hash: Sequelize.VIRTUAL,
                senha: Sequelize.STRING,
            },
            {
                sequelize
            }
        );

            this.addHook('beforeSave', async (usuario) => {
                if(usuario.senha_hash) {
                    usuario.senha = await bcrypt.hash(usuario.senha_hash, 8)
                }
            })

        return this;

    }

    checkPassword(senha_hash){
        return bcrypt.compare(senha_hash, this.senha);
    }

    static associate(models) {

        this.hasOne(models.Cadastro, { foreignKey: 'id_usuario', as: 'cadastro' });

    }

}
export default Usuario;