const db = require('../../db/mysql');
const autenticacion = require('../autenticacion');

const TABLA = 'usuarios';

module.exports = function(dbInyectada){
    
    let db = dbInyectada;

    if (!db) {
        db = require('../../db/mysql');
    }

    function usuarios() {
        return db.usuarios(TABLA);
    }
    
    function usuario(idUsuario) {
        return db.usuario(TABLA, idUsuario);
    
    }
    
    async function agregarUsuario(body) {
        const usuario = {
            idUsuario: body.idUsuario,
            nombreUsuario: body.nombreUsuario,
            edad: body.edad,
            activo: body.activo
        }

        const respuesta = await db.agregarUsuario(TABLA, usuario);
        console.log("respuesta", respuesta);

        var insertId = 0;
        if (body.idUsuario == 0) {
            insertId = respuesta.insertId;
        } else {
            insertId = body.idUsuario;
        }

        var respuesta2 = '';
        if (body.usuario || body.password) {
            respuesta2 = await autenticacion.agregarUsuario({
                idUser: insertId,
                user: body.usuario ,
                password: body.password
            })
        }

        return respuesta2;
    
    }
    
    function eliminarUsuario(body) {
        return db.eliminarUsuario(TABLA, body);
    
    }
    
    return {
        usuarios,
        usuario,
        agregarUsuario,
        eliminarUsuario
    }
}