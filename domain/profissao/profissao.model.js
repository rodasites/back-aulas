var express = require('express');
var router = express.Router();
var Utils = require('../../shared/utils/utils');
var knex = require('../../shared/db/db').connect();
exports.getTodasProfissoes = async ()=>{
    try{
        var result = await knex('profissoes');
        return result;
    }catch(err){
        console.log(err);
        return null;
    }
}
