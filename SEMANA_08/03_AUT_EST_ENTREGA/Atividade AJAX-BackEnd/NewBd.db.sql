BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "experiencia" (
	"id_experiencia"	INTEGER NOT NULL,
	"nome_empresa"	TEXT,
	"data_inicio"	CHAR(10),
	"data_fim"	CHAR(10),
	"cargo"	TEXT,
	"descricao"	TEXT,
	PRIMARY KEY("id_experiencia" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "realizacoes" (
	"id_realizacoes"	INTEGER NOT NULL,
	"realizaçoes"	TEXT,
	"ano"	INTEGER,
	"descricao"	TEXT,
	PRIMARY KEY("id_realizacoes" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "formacao" (
	"id_formacao"	INTEGER NOT NULL,
	"curso"	TEXT,
	"data_inicio"	CHAR(10),
	"data_fim"	CHAR(10),
	"descricao"	INTEGER,
	PRIMARY KEY("id_formacao" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "habilidades" (
	"id_habilidade"	INTEGER NOT NULL,
	"habilidade"	TEXT,
	"00-->05"	INTEGER,
	PRIMARY KEY("id_habilidade")
);
CREATE TABLE IF NOT EXISTS "sobre" (
	"id_sobre"	INTEGER NOT NULL,
	"Logradouro"	TEXT NOT NULL,
	"Telefone"	INTEGER NOT NULL,
	"Email"	TEXT NOT NULL,
	"Sobre você"	TEXT,
	PRIMARY KEY("id_sobre" AUTOINCREMENT)
);
INSERT INTO "experiencia" ("id_experiencia","nome_empresa","data_inicio","data_fim","cargo","descricao") VALUES (1,'Inteli','06-06-2022','06-06-2026','Engenheiro','A entregar');
INSERT INTO "realizacoes" ("id_realizacoes","realizaçoes","ano","descricao") VALUES (1,'4° Lugar no Hackathon',2022,'Eu e minha equipe ficamos em 4° Lugar no Hackathon da NASA');
INSERT INTO "formacao" ("id_formacao","curso","data_inicio","data_fim","descricao") VALUES (1,'Egenharia ','28-04-2003','28-06-2003','Tenho 18 Anos'),
 (2,NULL,NULL,NULL,NULL);
INSERT INTO "habilidades" ("id_habilidade","habilidade","00-->05") VALUES (1,'Programador',4);
INSERT INTO "sobre" ("id_sobre","Logradouro","Telefone","Email","Sobre você") VALUES (1,'MMDC',739999999,'kakoalenda@gmail.com','Tudo');
COMMIT;
