const mysql = require('mysql');


const config = {
    host : 'localhost',
    user : 'root',
    database: 'epic-cloud-of-links-bd-pruebas',
    password: 'Hacker2020',
};

const conn = mysql.createConnection(config);


conn.connect(function(err) {
    if (err) throw err;
    console.log('La conexion de la base de datos a sido exitosa!!');
});
module.exports = conn;