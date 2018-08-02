
use QueVeoHoy;

CREATE TABLE pelicula(
 	  id int NOT NULL auto_increment,
 	  titulo varchar(100) NOT NULL,
 	  duracion decimal(5,0) NOT NULL,
	  director varchar(400) NOT NULL,
    anio decimal(5,0) NOT NULL,
    fecha_lanzamiento date NOT NULL,
    puntuacion decimal(2,0) NOT NULL,
    poster varchar(300) NOT NULL,
    trama varchar(700) NOT NULL,
 	PRIMARY KEY (id)
);
