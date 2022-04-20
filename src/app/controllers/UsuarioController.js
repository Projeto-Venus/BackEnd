import Usuario from "../models/usuario";

class UsuarioController {

    async create(req, res) {
        const { login, senha } = req.body;

        if (!login || !senha) return res.status(400).json({ error: 'Bad Request' })

        const createdUsario = await Usuario.create(req.body);

        return res.json(createdUsario);
    }

    async index(req, res){
         const login = await Usuario.findByPk(req.params.id);

         if(!login){

            return res.status(404).json({error: 'login not found'});
         }

         return res.json(login);
    }
}

export default new UsuarioController();