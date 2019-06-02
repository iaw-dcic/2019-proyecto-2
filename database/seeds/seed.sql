
--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Gaetano', 'gaeprivi@gmail.com', NULL, '$2y$10$uTWuY0ahjOqRBvmzrtCIUeR2BeZo.3u1K3EA/T7sM1DhY3YKOEyRK', NULL, '2019-05-29 20:17:09', '2019-05-29 20:17:09');

-- --------------------------------------------------------

--
-- Volcado de datos para la tabla `prodes`
--

INSERT INTO `prodes` (`id`, `user_id`, `nombre`, `plantilla`, `created_at`, `updated_at`) VALUES
(1, 1, 'Copa Libertadores', 1, '2019-05-29 17:00:00', NULL);

-- --------------------------------------------------------

--
-- Volcado de datos para la tabla `teams`
--

INSERT INTO `teams` (`id`, `nombre`, `created_at`, `updated_at`) VALUES
(1, 'Godoy Cruz', NULL, NULL),
(2, 'Palmeiras', NULL, NULL),
(3, 'Gremio', NULL, NULL),
(4, 'Libertad', NULL, NULL),
(5, 'Independiente', NULL, NULL),
(6, 'Emelec', NULL, NULL),
(7, 'Nacional', NULL, NULL),
(8, 'Iternacional', NULL, NULL),
(9, 'River Plate', NULL, NULL),
(10, 'Cruzeiro', NULL, NULL),
(11, 'San Lorenzo', NULL, NULL),
(12, 'Cerro Porteño', NULL, NULL),
(13, 'Olimpia', NULL, NULL),
(14, 'LDU Quito', NULL, NULL),
(15, 'Boca Juniors', NULL, NULL),
(16, 'Paranaense', NULL, NULL),
(17, '', NULL, NULL);

-- --------------------------------------------------------

--
-- Volcado de datos para la tabla `partidos`
--

INSERT INTO `partidos` (`id`, `prode_id`, `nro_partido`, `nro_partidoProximo`, `nro_partidoEquipo1`, `nro_partidoEquipo2`, `id_equipo1`, `id_equipo2`, `created_at`, `updated_at`) VALUES
(1, 1, 0, 8, 0, 0, 1, 2, NULL, NULL),
(2, 1, 1, 8, 0, 0, 3, 4, NULL, NULL),
(3, 1, 2, 9, 0, 0, 5, 6, NULL, NULL),
(4, 1, 3, 9, 0, 0, 7, 8, NULL, NULL),
(5, 1, 4, 10, 0, 0, 9, 10, NULL, NULL),
(6, 1, 5, 10, 0, 0, 11, 12, NULL, NULL),
(7, 1, 6, 11, 0, 0, 13, 14, NULL, NULL),
(8, 1, 7, 11, 0, 0, 15, 16, NULL, NULL),
(9, 1, 8, 12, 0, 1, 17, 17, NULL, NULL),
(10, 1, 9, 12, 2, 3, 17, 17, NULL, NULL),
(11, 1, 10, 13, 4, 5, 17, 17, NULL, NULL),
(12, 1, 11, 13, 6, 7, 17, 17, NULL, NULL),
(13, 1, 12, 14, 8, 9, 17, 17, NULL, NULL),
(14, 1, 13, 14, 10, 11, 17, 17, NULL, NULL),
(15, 1, 14, 0, 12, 13, 17, 17, NULL, NULL);

-- --------------------------------------------------------


