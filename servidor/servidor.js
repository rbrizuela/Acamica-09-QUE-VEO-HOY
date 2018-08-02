//paquetes necesarios para el proyecto
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var controladorPeliculas = require('./controladores/controladorPeliculas');
var controladorGeneros = require('./controladores/controladorGeneros');
var controladorInformacionDePelicula = require('./controladores/controladorInformacionDePelicula');
var controladorRecomendaciones = require('./controladores/controladorRecomendaciones');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


//IMPORTANTE
//primero deben ir todas las funciones que utilizan query params
app.get('/peliculas', controladorPeliculas.buscarPeliculas);
app.get('/generos', controladorGeneros.buscarGeneros);
app.get('/peliculas/recomendacion', controladorRecomendaciones.recomendacion);

//y luego las que utilizan path params
//si estan mezcladas no me funcionan las que estan a continuacion de esta!!!!!!!!!!!!!!!
app.get('/peliculas/:id', controladorInformacionDePelicula.obtenerPelicula);



//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = '8080';

app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});
