import DistanciaMoradia from "../models/DistanciaMoradia";

class DistanciaMoradiaController {

    async create(req, res) {
        const { descricao } = req.body;

        if(!descricao){
            return res.status(404).json({erro: 'Não tem descrição'});
        }

        const createdDistanciaMoradia = await DistanciaMoradia.create(req.body);

        return res.json(createdDistanciaMoradia);
    }

    async index(req, res){
         const distanciaMoradia = await DistanciaMoradia.findByPk(req.params.id);

         if(!distanciaMoradia){

            return res.status(404).json({error: 'Descrição não encontrada'});
         }

         return res.json(distanciaMoradia);
    }

    //para atualizar
    async update(req, res){
        const distanciaMoradia = await DistanciaMoradia.findByPk(req.params.id);

        if(!distanciaMoradia){

           return res.status(404).json({error: 'Descrição não encontrada'});
        }

        await distanciaMoradia.update(req.body); //verificar se está dando erro
        
        return res.json(distanciaMoradia);
   }

}

export default new DistanciaMoradiaController();