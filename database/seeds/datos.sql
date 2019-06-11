
--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`id`, `nombre`, `bandera`, `continente`) VALUES
(1, 'Argentina', '/images/argentina.png', 'Sudamerica'),
(2, 'Brasil', '/images/brasil.png', 'Sudamerica'),
(3, 'Colombia', '/images/colombia.png', 'Sudamerica'),
(4, 'Uruguay', '/images/uruguay.png', 'Sudamerica'),
(5, 'Mexico', '/images/mexico.png', 'Norte y CentroAmerica'),
(6, 'Alemania', '/images/alemania.png', 'Europa'),
(7, 'Belgica', '/images/belgica.png', 'Europa'),
(8, 'Croacia', '/images/croacia.png', 'Europa'),
(9, 'España', '/images/espana.png', 'Europa'),
(10, 'Francia', '/images/francia.png', 'Europa'),
(11, 'Inglaterra', '/images/inglaterra.png', 'Europa'),
(12, 'Italia', '/images/italia.png', 'Europa'),
(13, 'Holanda', '/images/holanda.png', 'Europa'),
(14, 'Portugal', '/images/portugal.png', 'Europa'),
(15, 'Egipto', '/images/egipto.png', 'Africa'),
(16, 'Nigeria', '/images/nigeria.png', 'Africa');


--
-- Volcado de datos para la tabla `cruces_iniciales`
--

INSERT INTO `cruces_iniciales` (`id`, `llave_nro`, `id_A`, `id_B`) VALUES
(1, 1, 13, 16),
(2, 2, 9, 5),
(3, 3, 11, 6),
(4, 4, 2, 14),
(5, 5, 10, 8),
(6, 6, 4, 15),
(7, 7, 3, 12),
(8, 8, 1, 7);