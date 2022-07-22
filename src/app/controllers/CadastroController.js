import Cadastro from "../models/Cadastro";
import Usuario from "../models/Usuario";

class CadastroController {

    async create(req, res) {
        const { nome, nome_social, num_cartao_nacional_saude, cpf, data_nascimento, raca, naturalidade, endereco, bairro, cidade, estado, cep, id_referencia, id_usuario, celular, email, whatsapp, acessa_internet, mensagem_celular, nome_mae, nome_representante, beneficio, num_nis, profissao, comodos, rede_esgoto, coleta_lixo, distancia_moradia, religiao, escolaridade, estado_civil, renda, condicao_moradia, agua_domiciliar,  } = req.body;

       const usuarioExiste = await Usuario.findByPk(id_usuario);

       if(!usuarioExiste){
         return res.status(400).json({error: "Usuário não existe"});
       }

        const cadastroExiste = await Cadastro.findOne({where: {id_usuario}});

        if(cadastroExiste){
           return res.status(400).json({error: "Usuário já possui cadastro vinculado"});
        }
        const createdCadastro = await Cadastro.create(req.body);

        return res.json(createdCadastro);
    }

    async index(req, res){
         const cadastro = await Cadastro.findByPk(req.params.id);

         if(!cadastro){

            return res.status(404).json({error: "Cadastro não encontrado"});
         }

         return res.json(cadastro);
    }

    //para atualizar
    async update(req, res){
        const cadastro = await Cadastro.findByPk(req.params.id);

        if(!cadastro){

           return res.status(404).json({error: 'Usuário não encontrado'});
        }

        await cadastro.update(req.body); 
        
        return res.json(cadastro);
   }

}

export default new CadastroController();