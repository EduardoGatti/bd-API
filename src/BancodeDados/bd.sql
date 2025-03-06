
USE raiway;
CREATE TABLE anuncios(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100) NOT NULL,
body VARCHAR(200) NOT NULL
);
CREATE TABLE livro(  
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,  
    titulo VARCHAR(100) NOT NULL,  
    autor VARCHAR(60) NOT NULL,  
    genero VARCHAR(255) NOT NULL,
    descricao VARCHAR(200) NOT NULL,  
    isbn VARCHAR(20) NOT NULL, -- ISBN como texto  
    editora VARCHAR(255) NOT NULL,  
    publicacao DATE NOT NULL  
);
CREATE TABLE users(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(60) NOT NULL,
email VARCHAR(100) NOT NULL,
telefone BIGINT NOT NULL
);

-- mysql://root:sOhxxsQNuZQsOPvSfRedyLLNFrVnZsZI@trolley.proxy.rlwy.net:42849/railway