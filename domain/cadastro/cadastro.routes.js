var express = require('express');
var router = express.Router();
var cadastroController = require('./cadastro.controller');

router.post('/salvar', function (req, res) {
    cadastroController.salvar(req, res);
});

module.exports = router;