const mysql = require('mysql');

class Conexao {
    private host: String;
    private port: Number;
    private user: String;
    private password: String;
    private dataBase: String;
    private conexao: any;

    constructor(host: String, port: Number, user: String, password: String, dataBase: String) {
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        this.dataBase = dataBase;

        const validate = this.validateParams();
    }

    private validateParams() {
        if (!this.host) return 'Campo <Host> não definido';
        if (!this.port) return 'Campo <Port> não definido';
        if (!this.user) return 'Campo <User> não definido';
        if (!this.password) return 'Campo <Password> não definida';
        if (!this.dataBase) return 'Campo <DataBase> não definida';
    }

    public execSQLQuery(sqlQuery: String, res: any) {
        console.log('Executando', sqlQuery);

        const connection = mysql.createConnection({
            host: this.host,
            port: this.port,
            user: this.user,
            password: this.password,
            database: this.dataBase
        });

        connection.query(sqlQuery, function(error: any, results: any, fields: any){
            if(error) {
                res.json({
                    status: 500,
                    error: error
                });
            } else {
                res.json({
                    status: 200,
                    results: results
                });
                connection.end();
            }
        });
    }

    public getAllServiceOrder(res: any, code: Number) {
        return this.execSQLQuery(`
            SELECT 
                id_ordem_servico,
                codigo,
                titulo,
                local
            FROM ordem_servico
            WHERE situacao = ${code}`, res);
    };

    public getByIdServiceOrder(res: any, code: Number) {
        return this.execSQLQuery(`
            SELECT
                *
            FROM ordem_servico
            WHERE id_ordem_servico = ${code}`, res);
    };

    public getUser(res: any, user: String, password: String) {
        return this.execSQLQuery(`
            SELECT
                usuario AS user,
                senha AS password
            FROM login 
            WHERE usuario = '${user}' 
            AND senha = '${password}'`, res);
    };
}

export = Conexao;