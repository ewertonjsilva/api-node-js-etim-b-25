const express = require('express'); 
const router = express.Router(); 

const UsuariosController = require('../controllers/usuarios');
const IngredientesController = require('../controllers/ingredientes'); 
const ProdutosController = require('../controllers/produtos');

router.get('/usuarios', UsuariosController.listarUsuarios); 
router.post('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch('/usuarios', UsuariosController.editarUsuarios); 
router.delete('/usuarios', UsuariosController.apagarUsuarios); 

router.get('/ingredientes', IngredientesController.listarIngredientes); 
router.post('/ingredientes', IngredientesController.cadastrarIngredientes); 
router.patch('/ingredientes', IngredientesController.editarIngredientes); 
router.delete('/ingredientes', IngredientesController.apagarIngredientes); 

router.get('/produtos', ProdutosController.listarProdutos); 
router.post('/produtos', ProdutosController.cadastrarProdutos); 
router.patch('/produtos', ProdutosController.editarProdutos); 
router.delete('/produtos', ProdutosController.apagarProdutos); 


module.exports = router;