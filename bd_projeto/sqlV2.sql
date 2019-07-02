CREATE TABLE login (
    id_login INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    usuario VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

CREATE TABLE usuario (
    id_usuario INTEGER PRIMARY KEY NOT NULL,
    id_login INTEGER NOT NULL,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    data_hora_registro TIMESTAMP NOT NULL,
    ativo BOOLEAN DEFAULT true
);

CREATE TABLE usuario_hash (
    id_usuario_hash INTEGER PRIMARY KEY NOT NULL,
    id_usuario INTEGER NOT NULL,
    data_hora_valido TIMESTAMP NOT NULL,
    ativo BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE ordem_servico (
    id_ordem_servico INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    codigo INTEGER NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    local VARCHAR(100) NOT NULL,
    equipamento VARCHAR(100) NOT NULL,
    grupo_planejado VARCHAR(100) NOT NULL,
    responsavel_ordem VARCHAR(100) NOT NULL,
    tipo_manutencao VARCHAR(100) NOT NULL,
    requer_parada VARCHAR(3) NOT NULL,
    codigo_abc VARCHAR(50) NOT NULL,
    inicio_planejado TIMESTAMP NOT NULL,
    fim_planejado TIMESTAMP NOT NULL,
    inicio_programado TIMESTAMP NOT NULL,
    fim_programado TIMESTAMP NOT NULL,
    data_emissao TIMESTAMP NOT NULL
);

CREATE TABLE acesso_menu (
    id_acesso_menu INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(50) NOT NULL,
    icone VARCHAR(20) NOT NULL,
    rota VARCHAR(50) NOT NULL
);

CREATE TABLE acesso_menu_grupo (
    id_acesso_menu_grupo INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_acesso_menu INTEGER NOT NULL,
    id_grupo INTEGER NOT NULL
)

CREATE TABLE grupo (
    id_grupo INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
)

CREATE grupo_usuario (
    id_grupo_usuario INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_grupo INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL
)

SELECT

FROM acesso_menu_grupo
    INNER JOIN acesso_menu
        ON acesso_menu.id_acesso_menu = acesso_menu_grupo.id_acesso_menu
    INNER JOIN grupo
        ON grupo.id_grupo = acesso_menu_grupo.id_grupo
WHERE grupo.id_grupo = 1