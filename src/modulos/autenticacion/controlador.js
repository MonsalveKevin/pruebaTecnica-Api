const TABLA = 'autenticacion';
const bcrypt = require('bcrypt');
const autenticacion = require('../../auntenticacion');

module.exports = function(dbInyectada){
    
    let db = dbInyectada;

    if (!db) {
        db = require('../../db/mysql');
    }

    async function login(user, password) {
        const data = await db.query(TABLA, {user: user});
        return bcrypt.compare(password, data.password)

        .then(resultado => {
            if (resultado === true) {
                
                return autenticacion.asignarToken({...data});

            } else {
                throw new Error('Contraseña invalida');
            }
        });
    }
    
    async function agregarUsuario(data) {
        const auntData = {
            idUser: data.idUser,
        }

        if (data.user) {
            auntData.user = data.user;
        }

        if (data.password) {
            auntData.password = await bcrypt.hash(data.password.toString(), 5);
        }

        return db.agregarUsuario(TABLA, auntData);
    
    }
    
    return {
        agregarUsuario,
        login
    }
}