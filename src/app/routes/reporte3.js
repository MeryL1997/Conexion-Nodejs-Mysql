const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/reporte3', (req, res) => {
    connection.query('SELECT * FROM Spotify.Reproducion_Cancion_Usuario', (err, result) => {
      res.render('reportes/reporte3', {
        reporte3: result
      });
    });
  });

};
