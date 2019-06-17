CREATE TABLE usuario (
    id_usuario INTEGER NOT NULL PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    sobrenome VARCHAR(60) NOT NULL
)

CREATE TABLE usuario_hash (
    id_usuario_hash INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuario INTEGER NOT NULL,
    hash VARCHAR(100) NOT NULL,
    data_hora_expira TIMESTAMP NOT NULL
)