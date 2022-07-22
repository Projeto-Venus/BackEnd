import Renda from "../models/Renda";

class RendaController {

    async create(req, res) {
        const { descricao } = req.body;

        if(!descricao){
            return res.status(404).json({erro: 'Não tem descrição'});
        }

        const createdRenda = await Renda.create(req.body);

        return res.json(createdRenda);
    }

    async index(req, res){
         const renda = await Renda.findByPk(req.params.id);

         if(!renda){

            return res.status(404).json({error: 'Descrição não encontrada'});
         }

         return res.json(renda);
    }

    //para atualizar
    async update(req, res){
        const renda = await Renda.findByPk(req.params.id);

        if(!renda){

           return res.status(404).json({error: 'Descrição não encontrada'});
        }

        await renda.update(req.body); //verificar se está dando erro
        
        return res.json(renda);
   }

}

export default new RendaController();