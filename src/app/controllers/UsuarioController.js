import Usuario from "../models/Usuario";

class UsuarioController {

   //criando login
   async create(req, res) {
      const { cpf, senha } = req.body;

      if (!cpf || !senha) return res.status(400).json({ error: 'Bad Request' })
      
      //verificar cpf válido
      
      const userExists = await Usuario.findOne({
         where: {cpf}
      })

      if(userExists) return res.status(400).json({error: 'Já existe um usuário com este cpf'})

      const createdUsario = await Usuario.create(req.body);

      return res.json(createdUsario);
   }

   //procurando login 
   async index(req, res) {
      const login = await Usuario.findByPk(req.params.id, {
         attributes: {exclude: ['senha']}
      });

      if (!login) {

         return res.status(404).json({ error: 'Usuário não localizado' });
      }

      return res.json(login);
   }

   //atualizando login
   async update(req, res) {
      const usuario = await Usuario.findByPk(req.params.id);

      if (!usuario) {

         return res.status(404).json({ error: 'Login atualizado' });
      }

      await usuario.update(req.body); //verificar se está dando erro

      return res.json(usuario);
   }

   //deletando login
   async delete(req, res) {
      const usuario = await Usuario.findByPk(req.params.id);

      if (!usuario) {

         return res.status(404).json({ error: 'Usuário deletado' });
      }

      await usuario.destroy();

      return res.status(204).json();//void 
   }


}

export default new UsuarioController();