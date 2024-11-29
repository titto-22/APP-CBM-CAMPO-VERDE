CREATE SCHEMA IF NOT EXISTS app193;

-- Define o schema padrão
USE app193;

CREATE TABLE IF NOT EXISTS USER (
  idUSER INT NOT NULL AUTO_INCREMENT,
  USERNAME VARCHAR(45) NOT NULL,
  CPF VARCHAR(14) NOT NULL,
  ADRESS VARCHAR(255) NOT NULL,
  TELEFON VARCHAR(15) NOT NULL,
  EMAIL VARCHAR(45) NOT NULL,
  PASSWORD VARCHAR(150) NOT NULL,
  DATE_CREATE DATETIME NOT NULL,
  PRIMARY KEY (idUSER),
  UNIQUE INDEX CPF_UNIQUE (CPF),
  UNIQUE INDEX EMAIL_UNIQUE (EMAIL)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS USERADMIN (
  idUSERADMIN INT NOT NULL AUTO_INCREMENT,
  IDUSER INT NOT NULL,
  MATRICULA VARCHAR(45) NOT NULL,
  USERMASTER TINYINT NOT NULL,
  USERCREATE INT NULL,
  PRIMARY KEY (idUSERADMIN),
  UNIQUE INDEX MATRICULA_UNIQUE (MATRICULA),
  CONSTRAINT fk_USERADMIN_IDUSER FOREIGN KEY (IDUSER)
    REFERENCES USER (idUSER)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_USERADMIN_USERCREATE FOREIGN KEY (USERCREATE)
    REFERENCES USERADMIN (idUSERADMIN)
    ON DELETE SET NULL
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS OCORRENCIAS (
  idOCORRENCIAS INT NOT NULL AUTO_INCREMENT,
  DATECREATE DATETIME NOT NULL,
  IDUSER INT NOT NULL,
  NAT_OCOR VARCHAR(45) NOT NULL,
  ADRESS_NUM VARCHAR(20) NOT NULL,
  GEOLOCATION_LAT DECIMAL(10,8) NULL,
  GEOLOCATION_LONG DECIMAL(10,8) NULL,
  ADRESS_LOGRADOURO VARCHAR(100) NOT NULL,
  ADRESS_BAIRRO VARCHAR(100) NOT NULL,
  ADRESS_CITY VARCHAR(100) NULL,
  ADRESS_STATE VARCHAR(100) NULL,
  DESCRIPTION VARCHAR(500) NOT NULL,
  PRIMARY KEY (idOCORRENCIAS),
  CONSTRAINT fk_OCORRENCIAS_IDUSER FOREIGN KEY (IDUSER)
    REFERENCES USER (idUSER)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS VIATURAS (
  idVIATURAS INT NOT NULL AUTO_INCREMENT,
  PLACA VARCHAR(45) NOT NULL,
  TIPO VARCHAR(45) NOT NULL,
  PREFIXO VARCHAR(45) NOT NULL,
  DATE_CREATE DATETIME NOT NULL,
  USERCREATE INT NOT NULL,
  PRIMARY KEY (idVIATURAS),
  UNIQUE INDEX PLACA_UNIQUE (PLACA),
  UNIQUE INDEX PREFIXO_UNIQUE (PREFIXO),
  CONSTRAINT fk_VIATURAS_USERCREATE FOREIGN KEY (USERCREATE)
    REFERENCES USERADMIN (idUSERADMIN)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS ATENDIMENTO (
  idATENDIMENTO INT NOT NULL AUTO_INCREMENT,
  DATE_INICIO DATETIME NOT NULL,
  IDOCORENCIA INT NOT NULL,
  IDVIATURA INT NULL,
  DATE_SAIDA DATETIME NULL,
  DATE_CHEGADA_LOCAL DATETIME NULL,
  DATE_HOSPITAL DATETIME NULL,
  DATE_RETORNO DATETIME NULL,
  IDATENDENTE INT NOT NULL,
  COMPLEMENTO_ATENDENTE VARCHAR(255) NULL,
  DATE_ENCERRAMENTO DATETIME NULL,
  DRESCRIPTION_FINISH VARCHAR(500) NULL,
  PRIMARY KEY (idATENDIMENTO),
  CONSTRAINT fk_ATENDIMENTO_IDOCORENCIA FOREIGN KEY (IDOCORENCIA)
    REFERENCES OCORRENCIAS (idOCORRENCIAS)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_ATENDIMENTO_IDVIATURA FOREIGN KEY (IDVIATURA)
    REFERENCES VIATURAS (idVIATURAS)
    ON DELETE SET NULL
    ON UPDATE NO ACTION,
  CONSTRAINT fk_ATENDIMENTO_IDUSERADMIN FOREIGN KEY (IDATENDENTE)
    REFERENCES USERADMIN (idUSERADMIN)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;
