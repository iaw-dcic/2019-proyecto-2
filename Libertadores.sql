-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-06-2019 a las 05:04:17
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `homestead`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teams`
--

CREATE TABLE `teams` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `teams`
--

INSERT INTO `teams` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'River Plate (ARG)', NULL, NULL),
(2, 'Cruzeiro (BRA)', NULL, NULL),
(3, 'San Lorenzo (ARG)', NULL, NULL),
(4, 'Cerro Porteño (PAR)', NULL, NULL),
(5, 'LDU de Quito (ECU)', NULL, NULL),
(6, 'Olimpia (PAR)', NULL, NULL),
(7, 'Paranaense (BRA)', NULL, NULL),
(8, 'Boca Jrs (ARG)', NULL, NULL),
(9, 'Godoy Cruz (ARG)', NULL, NULL),
(10, 'Palmeiras (BRA)', NULL, NULL),
(11, 'Gremio (BRA)', NULL, NULL),
(12, 'Libertad (PAR)', NULL, NULL),
(13, 'Emelec (ECU)', NULL, NULL),
(14, 'Flamengo (BRA)', NULL, NULL),
(15, 'Nacional (PAR)', NULL, NULL),
(16, 'Internacional (BRA)', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `teams`
--
ALTER TABLE `teams`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
