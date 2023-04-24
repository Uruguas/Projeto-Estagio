const express = require('express');
const router = express.Router();

const ProjetoController = require('./controllers/ProjetoController') /* Rota para o controlador do projeto*/

router.get('/Projeto1',ProjetoController.buscartodos);

module.exports = router;

