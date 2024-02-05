const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const usuarios = require('./modulos/usuarios/rutas');
const autenticacion = require('./modulos/autenticacion/rutas');
const error = require('./red/errores');

const app = express();

//Middlewared
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Configuración
app.set('port', config.app.port);

//Gestión de rutas
app.use('/api/usuarios', usuarios);
app.use('/api/autenticacion', autenticacion);

app.use(error);

module.exports = app;