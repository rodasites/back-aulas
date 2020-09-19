module.exports = class Cadastro {
    constructor(cadastro) {
        this.nome = cadastro.nome
        this.endereco = cadastro.endereco
        this.telefone = cadastro.telefone
        this.empregado = cadastro.empregado
        this.profissao = cadastro.profissao
        this.email = cadastro.email
        this.senha = cadastro.senha
    }
}