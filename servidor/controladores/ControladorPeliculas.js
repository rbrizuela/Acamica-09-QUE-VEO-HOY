var con = require('../lib/conexionbd');

function buscarPeliculas(req, res) {

    var anio = req.query.anio;
    var titulo = req.query.titulo;
    var genero = req.query.genero;
    var columna_orden = req.query.columna_orden;
    var tipo_orden = req.query.tipo_orden;
    var pagina = req.query.pagina;
    var cantidad = req.query.cantidad;

    var sql = "select * from pelicula";
    var sqlWhere = "";

    //agregar palabra where si se informa algun criterio
    if ((anio) || (titulo) || (genero)) {

        sqlWhere = " where ";

        //genero el where segun esten informados los criterios
        if (anio)   {sqlWhere = sqlWhere + " anio = " + anio + " and";}
        if (titulo) {sqlWhere = sqlWhere + " titulo like '%" + titulo + "%' and";}
        if (genero) {sqlWhere = sqlWhere + " genero_id = " + genero + " and";}

        //eliminar and final del where
        sqlWhere = sqlWhere.substr(0, sqlWhere.length - 3)
    }

    //agreguo el order by
    sql = sql + sqlWhere + " order by " + columna_orden + " " +  tipo_orden;

    //agrego el limit
    sql = sql + " limit " + (cantidad * (pagina - 1)) + "," +  cantidad;

    //consulta de resultados
    con.query(sql, function(error, resultado, fields) {
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }

        //consulta de cantidad
        var sqlCount = "select count(*) as cant from pelicula " + sqlWhere;

        con.query(sqlCount, function(errorCount, resultadoCount, fieldsCount) {
            if (errorCount) {
                console.log("Hubo un error en la consulta", error.message);
                return res.status(404).send("Hubo un error en la consulta");
            }

            var response = {'peliculas': resultado,
                            'total': resultadoCount[0].cant};

            res.send(JSON.stringify(response));

          });
    });
}

module.exports = {
  buscarPeliculas: buscarPeliculas
};
