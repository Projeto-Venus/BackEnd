import { Router } from 'express'
import UsuarioController from './app/controllers/UsuarioController';
import CadastroController from './app/controllers/CadastroController';
import UnidadeReferenciaController from './app/controllers/UnidadeReferenciaController';
import AguaDomiciliarController from './app/controllers/AguaDomiciliarController';
import DistanciaMoradiaController from './app/controllers/DistanciaMoradiaController';
import EscolaridadeController from './app/controllers/EscolaridadeController';
import EstadoCivilController from './app/controllers/EstadoCivilController';
import RacaController from './app/controllers/RacaController';
import ReligiaoController from './app/controllers/ReligiaoController';
import RendaController from './app/controllers/RendaController';
import AguaDomiciliar from './app/models/AguaDomiciliar';

const routes = new Router();

//usuario
routes.post('/usuario', UsuarioController.create);
routes.get('/usuario/:id', UsuarioController.index);
routes.put('/usuario/:id', UsuarioController.update);
routes.delete('/usuario/:id', UsuarioController.delete);

//cadastro
routes.post('/cadastro', CadastroController.create);
routes.get('/cadastro/:id', CadastroController.index);
routes.put('/cadastro/:id', CadastroController.update);

//unidade referencia
routes.post('/unidades_referencia', UnidadeReferenciaController.create);
routes.get('/unidades_referencia/:id', UnidadeReferenciaController.index);
routes.put('/unidades_referencia/:id', UnidadeReferenciaController.update);

//Novos Campos

//Agua domiciliar
routes.post('/aguadomiciliar', AguaDomiciliarController.create);
routes.get('/aguadomiciliar/:id', AguaDomiciliarController.index);
routes.put('/aguadomiciliar/:id', AguaDomiciliarController.update);

//distancia moradia
routes.post('/distanciamoradia', DistanciaMoradiaController.create);
routes.get('/distanciamoradia/:id', DistanciaMoradiaController.index);
routes.put('/distanciamoradia/:id', DistanciaMoradiaController.update);

//escolaridade
routes.post('/escolaridade', EscolaridadeController.create);
routes.get('/escolaridade/:id', EscolaridadeController.index);
routes.put('/escolaridade/:id', EscolaridadeController.update);

//estado civil
routes.post('/Estadocivil', EstadoCivilController.create);
routes.get('/Estadocivil/:id', EstadoCivilController.index);
routes.put('/Estadocivil/:id', EstadoCivilController.update);

//raça
routes.post('/raca', RacaController.create);
routes.get('/raca/:id', RacaController.index);
routes.put('/raca/:id', RacaController.update);

//religião
routes.post('/religiao', ReligiaoController.create);
routes.get('/religiao/:id', ReligiaoController.index);
routes.put('/religiao/:id', ReligiaoController.update);

//renda
routes.post('/renda', RendaController.create);
routes.get('/renda/:id', RendaController.index);
routes.put('/renda/:id', RendaController.update);


export default routes;