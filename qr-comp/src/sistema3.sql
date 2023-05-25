-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-03-2023 a las 01:10:58
-- Versión del servidor: 5.6.21
-- Versión de PHP: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `sistema3`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
`id_usuario` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`name`, `email`, `password`, `id_usuario`) VALUES
('Erick Leonardo', 'erick123@gmail.com', '$2b$12$GLoXh2IU6it1W3y9GLBM7uK7dwOzEtIGKXDMeVoTibJ1uaAA5IV6O', 1),
('Daira', 'dairita@gmail.com', '$2b$12$K1hj0MzBAEPLz928iBkqqu82cn8ZLMa6BdlBcRfaNqQQXAuyhV6sS', 2),
('Kevin', '21301061550104@cetis155.edu.mx', '$2b$12$O/BY4GoksEU1LOUVOBy2xuS5JbXnltU5FmDk55IEXdFB62/8na1Ja', 3),
('newuser', 'newuser@gmail.com', '$2b$12$P8JZ8FQbk9OF9rY/rxgF8uM5Ujhz/rnvlNQw4VYMsF1bEkhkV5O56', 5),
('Judith', 'micasita46@gmail.com', '$2b$12$f26MhMRR6eumwDkTzmRivunTqJ/7VtyQ3hR.4mizgzc/t/a9H0X5W', 6),
('DanLolero', 'pilin34@gmai.com', '$2b$12$FVBxl.i5QCgvjhIhLpZvoehloH1zC7RRwIEu2aIVVdg6pGRBhXTya', 7),
('Duketo', 'duketo@gmail.com', '$2b$12$kQ3a3UYbH4PfCVGWPZOLOuHxxs2Px1fWJLBzAhsAKBtb0WDZVVBvy', 8),
('test', 'test@gmail.com', '$2b$12$iR4.Ux0Ocayg9eu/ZjNXW.jv2G4CxzBjz.CqzlhAcCqP4lWJv72KK', 12);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
