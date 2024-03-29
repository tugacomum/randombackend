import express from "express";

import { GetAlunos, PostAluno } from './Controllers/Alunos';
import { GetProdutos, PostProduto } from './Controllers/Produtos';

const routes = express.Router();

routes.get('/getalunos', GetAlunos);
routes.post('/postaluno', PostAluno);
routes.get('/getprodutos', GetProdutos);
routes.post('/postproduto', PostProduto);

export default routes;