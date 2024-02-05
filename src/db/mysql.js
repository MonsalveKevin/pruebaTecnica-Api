const mysql = require('mysql');
const config = require('../config');
const { error } = require('../red/respuestas');

const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

//Conectar a la base de datos
let conexion;

function conectarMysql() {
    conexion = mysql.createConnection(dbConfig);

    conexion.connect((err) => {
        if (err) {
            console.log(['db err'], err);
            setTimeout(conectarMysql, 2000);
        } else {
            console.log("Base de datos conectada");
        }
    });

    conexion.on('error', err => {
        console.log('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conectarMysql();
        } else {
            throw err;
        }
    })
}

conectarMysql();

function usuarios(tabla) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function usuario(tabla, idUsuario) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE idUsuario = ${idUsuario}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function agregarUsuario(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO ${tabla} SET ? ON DUPLICATE KEY UPDATE ?`, [data,data], (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}


function eliminarUsuario(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`DELETE FROM ${tabla} WHERE idUsuario = ?`, data.idUsuario, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

function query(tabla, consulta) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE ? `, consulta, (error, result) => {
            return error ? reject(error) : resolve(result[0]);
        });
    });
}

module.exports = {
    usuarios,
    usuario,
    agregarUsuario,
    eliminarUsuario,
    query
}