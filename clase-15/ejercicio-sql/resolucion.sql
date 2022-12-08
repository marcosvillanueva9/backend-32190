-- 1)

create dabatabe mibase;
use mibase;

-- 2)

CREATE TABLE usuario(id int unsigned not null auto_increment, nombre varchar(50) not null,
apellido varchar(50) not null, edad int unsigned, email varchar(50) not null, primary key(id));

-- 3) 

insert into usuario (nombre, apellido, edad, email) values 
("alan", "sherar", 22, "tualansito@gmail.com"),
("emiliano", "caballero", 23, "emilianobienflow@gmail.com"),
("eros", "gomez", 27, "eroselmejor@gmail.com");

-- 4)

SELECT * FROM usuario;

-- 5)

DELETE from usuario WHERE id = 2;

-- 6)

UPDATE usuario SET edad = 24 where id = 1;

-- 7)

SELECT * FROM usuario;