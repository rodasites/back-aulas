var express = require('express');
var router = express.Router();
var networkHandler = require('../../shared/network/response-handle');
var Profissao = require('./profissao');
var profissaoModel = require('./profissao.model')
var CODE = require('../../shared/codes/code');
var Utils = require('../../shared/utils/utils');

exports.getTodasProfissoes = async (req, res) => {
    var result = await profissaoModel.getTodasProfissoes()
    if(result){
        networkHandler.responseSuccess(CODE.SUCCESS, result, res)
    }else{
        networkHandler.responseError(CODE.BAD_REQUEST, "Erro ao buscar todos as profissões", res)
    }
}


