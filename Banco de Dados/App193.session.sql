CREATE SCHEMA usuario

-- Define o esquema padrão para "meu_esquema"
SET search_path TO usuario;


CREATE TABLE nome (
    nome varchar (20) not null,
    cpf varchar (12) not null
)

DROP TABLE nome