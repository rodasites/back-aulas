var express = require('express');
var router = express.Router();
var profissaoController = require('./profissao.controller');

router.get('/getTodasProfissoes', function (req, res) {
    profissaoController.getTodasProfissoes(req, res);
});

module.exports = router;