import express = require("express");

const Conexao = require('./config');
const cors = require("cors");
const bodyParser = require("body-parser");

const app: express.Application = express();

const conexao = new Conexao('localhost', 3306, 'root', '', 'projeto_integrador');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));

const port: number = 3000;

app.post('/login', (req: any, res: any) => {
    console.log('Req', req);
    const user = req.body.user;
    const password = req.body.password; 
    
    try {
        conexao.getUser(res, user, password);
    } catch (error) {
        console.log(`Erro ao obter dados de login: ${user}`, error);
    }
});

app.get('/ordem/:codigo', (req: any, res:any) => {
    const value = req.params.codigo;
    try {
        conexao.getAllServiceOrder(res, value);
    } catch (error) {
        console.log('Erro ao obter Ordens de Serviço', error);
    }
});

app.get('/ordem/servico/:codigo', (req: any, res:any) => {
    const codigo = req.params.codigo;

    try {
        conexao.getByIdServiceOrder(res, codigo);
    } catch (error) {
        console.log(`Erro ao obter Ordem de serviço: ${codigo}`);
    }
});

app.listen(port, function () {
    console.log(`Servidor rodando na porta ${port}!`);
});
