
use QueVeoHoy;

CREATE TABLE actor(
 	  id int NOT NULL auto_increment,
 	  nombre varchar(70) NOT NULL,
 	PRIMARY KEY (id)
);

CREATE TABLE actor_pelicula(
 	  id int NOT NULL auto_increment,
    actor_id int NOT NULL,
    pelicula_id int NOT NULL,
 	PRIMARY KEY (id)
);

ALTER TABLE actor_pelicula
ADD FOREIGN KEY (actor_id)
REFERENCES actor(id);

ALTER TABLE actor_pelicula
ADD FOREIGN KEY (pelicula_id)
REFERENCES pelicula(id);
