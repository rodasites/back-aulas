var express = require('express');
var networkHandler = require('../../shared/network/response-handle');
var Cadastro = require('./cadastro');
var cadastroModel = require('./cadastro.model')
var CODE = require('../../shared/codes/code');
var Utils = require('../../shared/utils/utils');

exports.salvar = async (req, res) => {
    var parseCadastro = new Cadastro(req.body)
    if(parseCadastro){
        var result = await cadastroModel.salvar(parseCadastro)
        if(result){
            networkHandler.responseSuccess(CODE.SUCCESS, result, res)
        }else{
            networkHandler.responseError(CODE.BAD_REQUEST, "Erro ao Salvar", res)
        }
    }else{
        networkHandler.responseError(CODE.BAD_REQUEST, "Os dados enviados estão incorretos", res)
    }
}


