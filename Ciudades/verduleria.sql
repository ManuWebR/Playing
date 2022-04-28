-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-12-2021 a las 09:09:05
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `verduleria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`


CREATE TABLE `grupos` (
  `A` varchar(7) DEFAULT NULL,
  `B` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `grupos`
--

INSERT INTO `grupos` (`A`, `B`) VALUES
('IdGrupo', 'NombreGrupo'),
('1', 'Frutas'),
('2', 'Verduras'),
('3', 'Hortalizas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `A` varchar(10) DEFAULT NULL,
  `B` varchar(11) DEFAULT NULL,
  `C` varchar(7) DEFAULT NULL,
  `D` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`A`, `B`, `C`, `D`) VALUES
('IdProducto', 'NomProducto', 'IdGrupo', 'Precio'),
('1', 'Mandarinas', '1', '3,93'),
('2', 'Lechugas', '2', '1,63'),
('3', 'Melones', '1', '1,94'),
('4', 'Coles', '2', '0,61'),
('5', 'Berenjenas', '3', '2,54'),
('6', 'Platanos', '1', '2,42'),
('7', 'Tomates', '2', '0,97'),
('8', 'Uvas', '1', '3,63'),
('9', 'Esparragos', '3', '1,21'),
('10', 'Zanaorias', '3', '0,61'),
('11', 'Naranjas', '1', '1,21'),
('12', 'Malocoton', '1', '2,42'),
('13', 'Pimientos', '3', '0,24'),
('14', 'Manzana', '1', '3,63'),
('15', 'Patatas', '3', '2,42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedores`
--

CREATE TABLE `vendedores` (
  `A` varchar(10) DEFAULT NULL,
  `B` varchar(14) DEFAULT NULL,
  `C` varchar(10) DEFAULT NULL,
  `D` varchar(9) DEFAULT NULL,
  `E` varchar(10) DEFAULT NULL,
  `F` varchar(18) DEFAULT NULL,
  `G` varchar(22) DEFAULT NULL,
  `H` varchar(9) DEFAULT NULL,
  `I` varchar(11) DEFAULT NULL,
  `J` varchar(11) DEFAULT NULL,
  `K` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `vendedores`
--

INSERT INTO `vendedores` (`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`) VALUES
('IdVendedor', 'NombreVendedor', 'FechaAlta', 'NIF', 'FechaNac', 'Direccion', 'Poblacion', 'CodPostal', 'Telefon', 'EstalCivil', 'Guap@'),
('1', 'Pepito', '15/03/2004', '32456645D', '15/05/2019', 'cvbmcvbmcvb', 'Barcelona', '08782', '937745214', 'Soltero', 'VERDADERO'),
('2', 'Carmen', '12/04/2004', '12121213G', '15/11/1951', 'jkkhjkjhkhjk', 'Madrid', '28257', '914556565', 'Separado', 'FALSO'),
('3', 'Rosa', '23/12/2003', '11313155O', '12/11/1977', 'jhjhgjhgjhgjg', 'Martorell', '13131', '937754585', 'Casado', 'VERDADERO'),
('4', 'Gloria', '01/01/2001', '13131333E', '13/01/1960', 'dfsdgdfgdfg', 'badalona', '15344', '464646466', 'Divorciado', 'FALSO'),
('5', 'Fran', '12/12/2000', '11213123O', '15/02/1955', 'ghfghgfh', 'Barcelona', '23131', '13123123123', 'Viudo', 'VERDADERO'),
('6', 'Monica', '12/02/2000', '13131313O', '12/11/1970', 'hfghfghfghfg', 'malaga', '13131', '4454564646', 'Arrejuntado', 'FALSO'),
('7', 'Quima', '12/12/2002', '46464646F', '12/04/1944', 'jghjghjghjghjgh', 'Madrid', '45456', '464646456', 'Separado', 'VERDADERO'),
('8', 'Ramon', '12/12/2002', '12113133G', '12/02/1958', NULL, 'Sant Esteve sesrovires', '32311', '231313131', 'Divorciado', 'VERDADERO'),
('9', 'Carlos', '12/02/2004', '13131313F', '11/02/1980', 'lkljkljkljkljkljkl', 'Madrid', '43434', '464646464', 'Arrejuntado', 'FALSO'),
('10', 'Antonio', '03/02/1931', '13131113G', '12/02/1967', 'fghfghfghfghfgh', 'Sant Esteve sesrovires', '12121', NULL, 'Separado', 'VERDADERO'),
('11', 'Enrique', '12/11/2001', '31113131G', '12/12/1970', 'dfgdfgdfgdfgdfgd', 'Sant Esteve sesrovires', '12111', NULL, 'Divorciado', 'FALSO'),
('12', 'Carla', '12/11/2001', '31311313E', '12/01/1969', 'sfsdfsdfsdfsdf', 'La Beguda Alta', '31331', '434464646', 'Arrejuntado', 'VERDADERO'),
('13', 'Federico', '21/02/1999', '11313131C', '31/01/1966', 'xcvxcvxcvxcv', 'Sant Esteve sesrovires', '21545', '131131311', 'Casado', 'VERDADERO'),
('14', 'Amadeu', '20/02/2002', '46811136H', '25/09/1977', 'asdasdasdasdas', 'Sant Esteve sesrovires', '08635', '1465464646', 'Casado', 'VERDADERO');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
