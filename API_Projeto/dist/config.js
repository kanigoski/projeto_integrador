"use strict";
var mysql = require('mysql');
var Conexao = /** @class */ (function () {
    function Conexao(host, port, user, password, dataBase) {
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        this.dataBase = dataBase;
        var validate = this.validateParams();
    }
    Conexao.prototype.validateParams = function () {
        if (!this.host)
            return 'Campo <Host> não definido';
        if (!this.port)
            return 'Campo <Port> não definido';
        if (!this.user)
            return 'Campo <User> não definido';
        if (!this.password)
            return 'Campo <Password> não definida';
        if (!this.dataBase)
            return 'Campo <DataBase> não definida';
    };
    Conexao.prototype.execSQLQuery = function (sqlQuery, res) {
        console.log('Executando', sqlQuery);
        var connection = mysql.createConnection({
            host: this.host,
            port: this.port,
            user: this.user,
            password: this.password,
            database: this.dataBase
        });
        connection.query(sqlQuery, function (error, results, fields) {
            if (error) {
                res.json({
                    status: 500,
                    error: error
                });
            }
            else {
                res.json({
                    status: 200,
                    results: results
                });
                connection.end();
            }
        });
    };
    Conexao.prototype.getAllServiceOrder = function (res, code) {
        return this.execSQLQuery("\n            SELECT \n                id_ordem_servico,\n                codigo,\n                titulo,\n                local\n            FROM ordem_servico\n            WHERE situacao = " + code, res);
    };
    ;
    Conexao.prototype.getByIdServiceOrder = function (res, code) {
        return this.execSQLQuery("\n            SELECT\n                *\n            FROM ordem_servico\n            WHERE id_ordem_servico = " + code, res);
    };
    ;
    Conexao.prototype.getUser = function (res, user, password) {
        return this.execSQLQuery("\n            SELECT\n                usuario AS user,\n                senha AS password\n            FROM login \n            WHERE usuario = '" + user + "' \n            AND senha = '" + password + "'", res);
    };
    ;
    return Conexao;
}());
module.exports = Conexao;
