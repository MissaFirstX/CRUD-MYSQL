require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')

function getAll() {
    connection.query('SELECT * FROM tarea', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
    });
}

function guardar(name, descripcion) {
    connection.query('INSERT INTO tarea (nombre,descripcion) VALUES ("' + name + '","' + descripcion + '")');
    connection.query('SELECT * FROM tarea WHERE nombre = "' + name + '"', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
    });
    console.log("guardado");
}

//guardar("Discurso", "escribir un discurso que dure al menos 2 minutos");

function actualizar(id, descripcion) {
    connection.query('UPDATE tarea SET descripcion ="' + descripcion + '" WHERE id = ' + id + ';');
    connection.query('SELECT * FROM tarea WHERE descripcion = "' + descripcion + '"', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
    });
    console.log("actualizado");
}

//actualizar(6,"escribir un discurso que dure al menos 2 minutos y maximo 4");


function eliminar(id) {
    connection.query('DELETE FROM tarea WHERE id =' + id);
    connection.query('SELECT * FROM tarea', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
    });
    console.log("eliminado");
}

//eliminar(5);

//getAll();


