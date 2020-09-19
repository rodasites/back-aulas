
var Utils = require('../../shared/utils/utils');
var knex = require('../../shared/db/db').connect();

exports.salvar = async (cadastro) =>{
    try {
        await knex('dadosCadastrais').insert(cadastro)
        return true
    } catch (error) {
        return false
    }
}