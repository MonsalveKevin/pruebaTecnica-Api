const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./index');
const { usuario } = require('../../db/mysql');

const router = express.Router();

router.get('/login', login);

async function login(req, res, next) {
    try {
        const token = await controlador.login(req.body.user, req.body.password);
        respuesta.success(req, res, token, 200);
    } catch (err) {
        next(err);
    }
}

module.exports = router;