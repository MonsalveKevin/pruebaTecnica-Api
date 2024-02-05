const autenticacion = require("../../auntenticacion")

module.exports = function chequearAutorizacion() {
    function middleware(req, res, next) {
        autenticacion.chequearToken.confirmarToken(req);
        next();
    }

    return middleware;
}