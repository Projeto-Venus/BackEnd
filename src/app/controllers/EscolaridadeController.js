import Escolaridade from "../models/Escolaridade";

class EscolaridadeController {

    async create(req, res) {
        const { descricao } = req.body;

        if(!descricao){
            return res.status(404).json({erro: 'Não tem descrição'});
        }

        const createdEscolaridade = await Escolaridade.create(req.body);

        return res.json(createdEscolaridade);
    }

    async index(req, res){
         const unidadeReferencia = await Escolaridade.findByPk(req.params.id);

         if(!unidadeReferencia){

            return res.status(404).json({error: 'Descrição não encontrada'});
         }

         return res.json(unidadeReferencia);
    }

    //para atualizar
    async update(req, res){
        const unidadeReferencia = await Escolaridade.findByPk(req.params.id);

        if(!unidadeReferencia){

           return res.status(404).json({error: 'Descrição não encontrada'});
        }

        await unidadeReferencia.update(req.body); //verificar se está dando erro
        
        return res.json(unidadeReferencia);
   }

}

export default new EscolaridadeController();