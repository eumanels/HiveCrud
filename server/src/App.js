import express from 'express'; //Importanto o express
import PessoaController from './controllers/pessoaController.js';
const server = express(); //Iniciando o express

server.use(express.json()) //Configurando o json

server.get('/', (req,res)=>{
    res.status(200).json("Servidor Funcionando :)")
})


server.get('/pessoas', PessoaController.read);
server.post('/pessoas', PessoaController.create);
server.put('/pessoas/:id_pessoa', PessoaController.update);
server.delete('/pessoas/:id_pessoa', PessoaController.delete)


server.listen(5000);