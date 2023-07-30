import EstadoCivil from "../models/EstadoCivil";

class EstadoCivilController {

    async create(req, res) {
        const { descricao } = req.body;

        if(!descricao){
            return res.status(404).json({erro: 'Não tem descrição'});
        }

        const createdEstadoCivil = await EstadoCivil.create(req.body);

        return res.json(createdEstadoCivil);
    }

    async index(req, res){
         const estadoCivil = await EstadoCivil.findByPk(req.params.id);

         if(!estadoCivil){

            return res.status(404).json({error: 'Descrição não encontrada'});
         }

         return res.json(estadoCivil);
    }

    //para atualizar
    async update(req, res){
        const estadoCivil = await EstadoCivil.findByPk(req.params.id);

        if(!estadoCivil){

           return res.status(404).json({error: 'Descrição não encontrada'});
        }

        await estadoCivil.update(req.body); //verificar se está dando erro
        
        return res.json(estadoCivil);
   }

}

export default new EstadoCivilController();