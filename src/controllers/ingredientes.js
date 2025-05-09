const db = require('../dataBase/connection');

module.exports = {
    async listarIngredientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de ingredientes',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async cadastrarIngredientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastro de ingredientes',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async editarIngredientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Alteração no cadastro de ingrediente',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async apagarIngredientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Exclusão de ingrediente',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
};  