const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'contraseña',
    database: 'nombre de la base de datos',
    port: el que es el tuyo
  });
}
