const mysql = require('mysql');


const config = {
    host : '54.226.53.92',
    user : 'imanol',
    database: 'dbecol',
    password: 'password',
};

const conn = mysql.createConnection(config);


conn.connect(function(err) {
    if (err) throw err;
    console.log('La conexion de la base de datos a sido exitosa!!');
});
module.exports = conn;