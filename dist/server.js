"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Conexao = require('./config');
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var conexao = new Conexao('localhost', 3306, 'root', '', 'bd_projeto');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));
var port = 3000;
app.post('/login', function (req, res) {
    var user = req.body.user;
    var password = req.body.password;
    try {
        conexao.getUser(res, user, password);
    }
    catch (error) {
        console.log("Erro ao obter dados de login: " + user, error);
    }
});
app.get('/ordem', function (req, res) {
    try {
        conexao.getAllServiceOrder(res);
    }
    catch (error) {
        console.log('Erro ao obter Ordens de Serviço', error);
    }
});
app.get('/ordem/:codigo', function (req, res) {
    var codigo = req.params.codigo;
    try {
        conexao.getByIdServiceOrder(res, codigo);
    }
    catch (error) {
        console.log("Erro ao obter Ordem de servi\u00E7o: " + codigo);
    }
});
app.listen(port, function () {
    console.log("Servidor rodando na porta " + port + "!");
});
