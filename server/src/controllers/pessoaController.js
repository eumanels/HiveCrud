import PessoaModel from "../models/pessoaModel.js";

class PessoaController{
    constructor(){
        
    }

    create(req,res){
        const numero_telefone = req.body.numero_telefone;
        const nome = req.body.nome;
        const sobrenome = req.body.sobrenome;
        const cpf = req.body.cpf;
        const data_nascimento = req.body.data_nascimento;
        const senha = req.body.senha;
        const email = req.body.email;
        
        PessoaModel.create(numero_telefone, nome, sobrenome, cpf, data_nascimento, senha, email).then(
            resposta => {
                console.debug("CADASTRANDO PESSOA")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro ao cadastrar pessoa")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req,res){
        PessoaModel.read().then(
            resposta => {
                console.debug("LISTANDO PESSOAS")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro ao listar pessoas")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req,res){
        const id_pessoa = req.params.id_pessoa;
        const numero_telefone = req.body.umero_telefone;
        const nome = req.body.nome;
        const sobrenome = req.body.sobrenome;
        const cpf = req.body.cpf;
        const data_nascimento = req.body.data_nascimento;
        const senha = req.body.senha;
        const email = req.body.email;
        
        PessoaModel.update(id_pessoa, numero_telefone, nome, sobrenome, cpf, data_nascimento, senha, email).then(
            resposta =>{
                console.debug("Atualizando o pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao atualizar pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_pessoa = req.params.id_pessoa;

        PessoaModel.delete(id_pessoa).then(
            resposta =>{
                console.debug("Pessoa Deletado")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao deletar pessoa")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }
}

export default new PessoaController();