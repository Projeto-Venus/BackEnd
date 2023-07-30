import Raca from "../models/UnidadeReferencia";

class RacaController {

    async create(req, res) {
        const { descricao } = req.body;

        if(!descricao){
            return res.status(404).json({erro: 'Não tem descrição'});
        }

        const createdRaca = await Raca.create(req.body);

        return res.json(createdRaca);
    }

    async index(req, res){
         const Raca = await Raca.findByPk(req.params.id);

         if(!raca){

            return res.status(404).json({error: 'Descrição não encontrada'});
         }

         return res.json(raca);
    }

    //para atualizar
    async update(req, res){
        const raca = await Raca.findByPk(req.params.id);

        if(!raca){

           return res.status(404).json({error: 'Descrição não encontrada'});
        }

        await raca.update(req.body); //verificar se está dando erro
        
        return res.json(raca);
   }

}

export default new RacaController();