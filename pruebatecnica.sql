-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-02-2024 a las 21:07:28
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pruebatecnica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autenticacion`
--

CREATE TABLE `autenticacion` (
  `idUser` int(10) NOT NULL,
  `user` varchar(30) NOT NULL,
  `password` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `autenticacion`
--

INSERT INTO `autenticacion` (`idUser`, `user`, `password`) VALUES
(20, 'prueba', '123478'),
(21, 'prueba5', '12347867'),
(22, 'prueba5', '12347867'),
(23, 'prueba9', '$2b$05$C8uceZ7ljzyBETrh1ifhnuS'),
(24, 'kevin2002', '$2b$05$PbRdObu9kFVhDgaa.Y2.xOCpvTkav02Hskfgtl7WsFRAiJHCOhhyC');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `nombreUsuario` varchar(55) NOT NULL,
  `edad` int(3) NOT NULL,
  `activo` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nombreUsuario`, `edad`, `activo`) VALUES
(1, 'Kevin Monsalve Meza', 21, 1),
(2, 'Mauricio Meza', 30, 1),
(3, 'Mauricio ', 25, 1),
(4, 'Juan', 30, 1),
(5, 'stiven', 64, 1),
(6, 'manuel', 44, 1),
(7, 'stiwar', 40, 1),
(9, 'carlos', 40, 1),
(10, 'prueba', 80, 1),
(11, 'prueba', 80, 1),
(12, 'prueba', 80, 1),
(13, 'prueba2', 80, 1),
(14, 'prueba2', 80, 1),
(15, 'prueba2', 80, 1),
(16, 'prueba2', 80, 1),
(17, 'prueba2', 80, 1),
(18, 'prueba2', 80, 1),
(19, 'prueba2', 80, 1),
(20, 'prueba4', 80, 1),
(21, 'prueba5', 8, 1),
(22, 'prueba5', 8, 1),
(23, 'prueba5', 8, 1),
(24, 'Kevin', 21, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `autenticacion`
--
ALTER TABLE `autenticacion`
  ADD PRIMARY KEY (`idUser`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
