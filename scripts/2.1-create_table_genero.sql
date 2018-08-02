
use QueVeoHoy;

CREATE TABLE genero(
 	  id int NOT NULL auto_increment,
 	  nombre varchar(30) NOT NULL,
 	PRIMARY KEY (id)
);

ALTER TABLE pelicula
ADD COLUMN genero_id int;

ALTER TABLE pelicula
ADD FOREIGN KEY (genero_id)
REFERENCES genero(id);
