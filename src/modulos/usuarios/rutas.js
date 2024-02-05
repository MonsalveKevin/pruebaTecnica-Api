const express = require('express');

const seguridad = require('./seguridad');
const respuesta = require('../../red/respuestas');
const controlador = require('./index');

const router = express.Router();

router.get('/', usuarios);
router.get('/:idUsuario', usuario);
router.post('/', seguridad(), agregarUsuario);
router.put('/', seguridad(), eliminarUsuario);

async function usuarios (req, res, next) {
    try {
        const items = await controlador.usuarios();
        respuesta.success(req, res, items, 200)
    } catch (err) {
        next(err);
    }
    
};

async function usuario (req, res, next) {
    try {
        const items = await controlador.usuario(req.params.idUsuario)
        respuesta.success(req, res, items, 200)
    } catch (err) {
        next(err);
    }
};

async function agregarUsuario (req, res, next) {
    try {
        const items = await controlador.agregarUsuario(req.body)
        if (req.body.idUsuario == 0) {
            mensaje = "Usuario agregado correctamente";
        } else {
            mensaje = "Usuario actualizado correctamente";
        }
        respuesta.success(req, res, mensaje, 201);
    } catch (err) {
        next(err);
    }
};

async function eliminarUsuario (req, res, next) {
    try {
        const items = await controlador.eliminarUsuario(req.body)
        respuesta.success(req, res, "Usuario eliminado correctamente", 200)
    } catch (err) {
        next(err);
    }
};

module.exports = router;