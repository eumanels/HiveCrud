import mysql from "mysql2"
import config from "../Config.js";

class PessoaModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db);
    }

    create(numero_telefone, nome, sobrenome, cpf, data_nascimento, senha, email){
        let sql = `INSERT INTO pessoas (numero_telefone, nome, sobrenome, cpf, data_nascimento, senha, email) VALUES("${numero_telefone}", "${nome}", "${sobrenome}", "${cpf}", "${data_nascimento}", "${senha}", "${email}");`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql, (erro,retorno)=>{
                if(erro){
                    reject([400, erro])
                }
                resolve([201, "Pessoa registrada"])
            })
        });
    }

    read(){
       let sql = `SELECT * FROM pessoas;`

       return new Promise((resolve,reject)=>{
        this.conexao.query(sql, (erro,retorno)=>{
            if(erro){
                reject([400, erro])
            }
            resolve([201, retorno])
        })
       });
        
    }

    update(id_pessoa,numero_telefone, nome, sobrenome, cpf, data_nascimento, senha, email){
        let sql = `UPDATE pessoas SET numero_telefone="${numero_telefone}", nome="${nome}", sobrenome="${sobrenome}", cpf="${cpf}", data_nascimento="${data_nascimento}", senha="${senha}", email="${email}" WHERE id_pessoa="${id_pessoa}"`
        
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400, erro])
                }else if(retorno.affectedRows>0){
                    resolve([200, "Cadastro Atualizado!"])
                }else{
                    resolve([404, "Cadastro não encontrado :("])
                }
                
            })
        });
    }

    delete(id_pessoa){
        let sql = `DELETE FROM pessoas WHERE id_pessoa="${id_pessoa}"`
        
        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, (erro,retorno)=>{
                if(erro){
                    reject([400, erro])
                }
                resolve([200, "CADASTRO DELETADO"])
            })
        })
        
    }
}

export default new PessoaModel();