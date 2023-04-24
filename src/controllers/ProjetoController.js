const ProjetoService = require('../services/ProjetoService'); /* Caminho para pegar as informações do Service.*/

module.exports = {
    buscartodos: async (req, res)=> {
        let json = {error:"", result:[]};

        let Projeto1 = await ProjetoService.buscartodos

        for (let i in Projeto1){
            json.result.push({
                codigo_pedido: Projeto1[i].codigo_pedido,
                nome_cliente: Projeto1[1].nome_cliente,
                cpf_cliente: Projeto1[1].cpf_cliente,
                email_cliente: Projeto1[1].email_cliente,
                data_pedido: Projeto[1].data_pedido,
                sku_produto: Projeto1[1].sku_produto,
                titulo_produto: Projeto1[1].titulo_produto,
                preco: Projeto1[1].preco,
                estoque: Projeto1[1].estoque
            });
        }
        res.json(json);
    }
}