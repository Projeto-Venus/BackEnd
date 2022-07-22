import Religiao from "../models/Religiao";

class ReligiaoController {

    async create(req, res) {
        const { descricao } = req.body;

        if(!descricao){
            return res.status(404).json({erro: 'Não tem descrição'});
        }

        const createdReligiao = await Religiao.create(req.body);

        return res.json(createdReligiao);
    }

    async index(req, res){
         const religiao = await Religiao.findByPk(req.params.id);

         if(!religiao){

            return res.status(404).json({error: 'Descrição não encontrada'});
         }

         return res.json(religiao);
    }

    //para atualizar
    async update(req, res){
        const religiao = await Religiao.findByPk(req.params.id);

        if(!religiao){

           return res.status(404).json({error: 'Descrição não encontrada'});
        }

        await religiao.update(req.body); //verificar se está dando erro
        
        return res.json(religiao);
   }

}

export default new ReligiaoController();