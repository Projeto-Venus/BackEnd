import Sequelize from 'sequelize';
import Usuario from '../app/models/Usuario';
import Cadastro from '../app/models/Cadastro';
import dbConfig from '../config/db';
import UnidadeReferencia from '../app/models/UnidadeReferencia';
import AguaDomiciliar from '../app/models/AguaDomiciliar';
import DistanciaMoradia from '../app/models/DistanciaMoradia';
import Escolaridade from '../app/models/Escolaridade';
import EstadoCivil from '../app/models/EstadoCivil';
import Raca from '../app/models/Raca';
import Religiao from '../app/models/Religiao';
import Renda from '../app/models/Renda';

const models = [Usuario, Cadastro, UnidadeReferencia, AguaDomiciliar, DistanciaMoradia, Escolaridade, EstadoCivil, Raca, Religiao, Renda]

class Database {
    constructor() {

        this.init();
    }

    init() {
        this.connection = new Sequelize(dbConfig);
        console.log('Conexão realizada com sucesso!');
        models
            .map((model) => model.init(this.connection)).map((model) => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();