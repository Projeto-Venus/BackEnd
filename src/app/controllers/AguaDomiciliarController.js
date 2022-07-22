import AguaDomiciliar from "../models/AguaDomiciliar";

class AguaDomiciliarController {

    async create(req, res) {
        const { descricao } = req.body;

        if(!descricao){
            return res.status(404).json({erro: 'Não tem descrição'});
        }

        const createdAguaDomiciliar = await AguaDomiciliar.create(req.body);

        return res.json(createdAguaDomiciliar);
    }

    async index(req, res){
         const aguaDomiciliar = await AguaDomiciliar.findByPk(req.params.id);

         if(!aguaDomiciliar){

            return res.status(404).json({error: 'Descrição não encontrada'});
         }

         return res.json(aguaDomiciliar);
    }

    //para atualizar
    async update(req, res){
        const aguaDomiciliar = await AguaDomiciliar.findByPk(req.params.id);

        if(!aguaDomiciliar){

           return res.status(404).json({error: 'Descrição não encontrada'});
        }

        await aguaDomiciliar.update(req.body); //verificar se está dando erro
        
        return res.json(aguaDomiciliar);
   }

}

export default new AguaDomiciliarController();