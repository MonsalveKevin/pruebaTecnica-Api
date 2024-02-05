const jwt = require('jsonwebtoken');
config = require('../config');

const secret = config.jwt.secret;

function asignarToken(data) {
    return jwt.sign(data, secret);
}

function verificarToken(token) {
    return jwt.verify(token, secret);
}

const chequearToken = {
    confirmarToken: function(req) {
        const decodificado = decodificarCabecera(req);
    }
}

function decodificarCabecera(req) {
    const autorizacion = req.headers.autorizacion || '';
    const token = obtenerToken(autorizacion);
    const decodificado = verificarToken(token);

    req.user = decodificado;

    return decodificado;
}

function obtenerToken(autorizacion) {
    if (!autorizacion) {
        throw new Error('No viene el token');
    }

    if (autorizacion.indexOf('Bearer ') === -1) {
        throw new Error ('Formato invalido');
    }

    let token = autorizacion.replace('Bearer ', '');
    return token;
}


module.exports = {
    asignarToken,
    chequearToken
}