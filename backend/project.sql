-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 12, 2024 at 05:07 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `Coupons`
--

CREATE TABLE `Coupons` (
  `couponID` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `salePercentage` decimal(5,2) NOT NULL,
  `couponCode` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Coupons`
--

INSERT INTO `Coupons` (`couponID`, `productID`, `salePercentage`, `couponCode`) VALUES
(1, 1, 63.00, ''),
(2, 2, 71.00, ''),
(3, 3, 31.00, ''),
(4, 4, 26.00, ''),
(5, 5, 61.00, ''),
(6, 6, 46.00, ''),
(7, 7, 69.00, ''),
(8, 8, 56.00, ''),
(9, 9, 16.00, ''),
(10, 10, 27.00, ''),
(11, 11, 74.00, ''),
(12, 12, 37.00, ''),
(13, 13, 16.00, ''),
(14, 14, 66.00, ''),
(15, 15, 30.00, ''),
(16, 16, 46.00, ''),
(17, 17, 45.00, ''),
(18, 18, 43.00, ''),
(19, 19, 60.00, ''),
(20, 20, 65.00, ''),
(21, 21, 15.00, ''),
(22, 22, 17.00, ''),
(23, 23, 33.00, ''),
(24, 24, 57.00, ''),
(25, 25, 72.00, ''),
(26, 26, 16.00, ''),
(27, 27, 67.00, ''),
(28, 28, 27.00, ''),
(29, 29, 72.00, ''),
(30, 30, 26.00, ''),
(31, 31, 40.00, ''),
(32, 32, 59.00, ''),
(33, 33, 60.00, ''),
(34, 34, 66.00, ''),
(35, 35, 29.00, ''),
(36, 36, 56.00, ''),
(37, 37, 37.00, ''),
(38, 38, 45.00, ''),
(39, 39, 61.00, ''),
(40, 40, 22.00, ''),
(41, 41, 39.00, ''),
(42, 42, 43.00, ''),
(43, 43, 48.00, ''),
(44, 44, 52.00, ''),
(45, 45, 50.00, ''),
(46, 46, 29.00, ''),
(47, 47, 69.00, ''),
(48, 48, 25.00, ''),
(49, 49, 18.00, ''),
(50, 50, 26.00, ''),
(51, 51, 15.00, ''),
(52, 52, 24.00, ''),
(53, 53, 26.00, ''),
(54, 54, 75.00, ''),
(55, 55, 40.00, ''),
(56, 56, 26.00, ''),
(57, 57, 20.00, ''),
(58, 58, 27.00, ''),
(59, 59, 11.00, ''),
(60, 60, 31.00, ''),
(61, 61, 16.00, ''),
(62, 62, 60.00, ''),
(63, 63, 14.00, ''),
(64, 64, 17.00, ''),
(65, 65, 27.00, ''),
(66, 66, 23.00, ''),
(67, 67, 39.00, ''),
(68, 68, 17.00, ''),
(69, 69, 10.00, ''),
(70, 70, 32.00, ''),
(71, 71, 47.00, ''),
(72, 72, 65.00, ''),
(73, 73, 51.00, ''),
(74, 74, 64.00, ''),
(75, 75, 40.00, ''),
(76, 76, 25.00, ''),
(77, 77, 42.00, ''),
(78, 78, 34.00, ''),
(79, 79, 39.00, ''),
(80, 80, 69.00, ''),
(81, 81, 58.00, ''),
(82, 82, 58.00, ''),
(83, 83, 31.00, ''),
(84, 84, 50.00, ''),
(85, 85, 18.00, ''),
(86, 86, 25.00, ''),
(87, 87, 21.00, ''),
(88, 88, 38.00, ''),
(89, 89, 43.00, ''),
(90, 90, 10.00, ''),
(91, 91, 20.00, ''),
(92, 92, 25.00, ''),
(93, 93, 70.00, ''),
(94, 94, 15.00, ''),
(95, 95, 31.00, ''),
(96, 96, 20.00, ''),
(97, 97, 17.00, ''),
(98, 98, 19.00, ''),
(99, 99, 35.00, ''),
(100, 100, 12.00, ''),
(101, 1, 32.00, ''),
(102, 2, 16.00, ''),
(103, 3, 28.00, ''),
(104, 4, 71.00, ''),
(105, 5, 66.00, ''),
(106, 6, 31.00, ''),
(107, 7, 15.00, ''),
(108, 8, 29.00, ''),
(109, 9, 11.00, ''),
(110, 10, 42.00, ''),
(111, 11, 44.00, ''),
(112, 12, 30.00, ''),
(113, 13, 10.00, ''),
(114, 14, 30.00, ''),
(115, 15, 28.00, ''),
(116, 16, 37.00, ''),
(117, 17, 37.00, ''),
(118, 18, 21.00, ''),
(119, 19, 36.00, ''),
(120, 20, 18.00, ''),
(121, 21, 74.00, ''),
(122, 22, 31.00, ''),
(123, 23, 22.00, ''),
(124, 24, 49.00, ''),
(125, 25, 12.00, ''),
(126, 26, 38.00, ''),
(127, 27, 28.00, ''),
(128, 28, 24.00, ''),
(129, 29, 74.00, ''),
(130, 30, 27.00, ''),
(131, 31, 33.00, ''),
(132, 32, 40.00, ''),
(133, 33, 48.00, ''),
(134, 34, 67.00, ''),
(135, 35, 28.00, ''),
(136, 36, 20.00, ''),
(137, 37, 15.00, ''),
(138, 38, 35.00, ''),
(139, 39, 60.00, ''),
(140, 40, 73.00, ''),
(141, 41, 62.00, ''),
(142, 42, 64.00, ''),
(143, 43, 74.00, ''),
(144, 44, 19.00, ''),
(145, 45, 57.00, ''),
(146, 46, 69.00, ''),
(147, 47, 49.00, ''),
(148, 48, 30.00, ''),
(149, 49, 66.00, ''),
(150, 50, 50.00, ''),
(151, 51, 41.00, ''),
(152, 52, 48.00, ''),
(153, 53, 67.00, ''),
(154, 54, 60.00, ''),
(155, 55, 67.00, ''),
(156, 56, 32.00, ''),
(157, 57, 39.00, ''),
(158, 58, 32.00, ''),
(159, 59, 11.00, ''),
(160, 60, 28.00, ''),
(161, 61, 33.00, ''),
(162, 62, 45.00, ''),
(163, 63, 33.00, ''),
(164, 64, 59.00, ''),
(165, 65, 74.00, ''),
(166, 66, 24.00, ''),
(167, 67, 73.00, ''),
(168, 68, 47.00, ''),
(169, 69, 52.00, ''),
(170, 70, 30.00, ''),
(171, 71, 26.00, ''),
(172, 72, 46.00, ''),
(173, 73, 16.00, ''),
(174, 74, 47.00, ''),
(175, 75, 27.00, ''),
(176, 76, 69.00, ''),
(177, 77, 57.00, ''),
(178, 78, 64.00, ''),
(179, 79, 58.00, ''),
(180, 80, 54.00, ''),
(181, 81, 30.00, ''),
(182, 82, 53.00, ''),
(183, 83, 47.00, ''),
(184, 84, 14.00, ''),
(185, 85, 45.00, ''),
(186, 86, 42.00, ''),
(187, 87, 22.00, ''),
(188, 88, 42.00, ''),
(189, 89, 29.00, ''),
(190, 90, 13.00, ''),
(191, 91, 28.00, ''),
(192, 92, 50.00, ''),
(193, 93, 43.00, ''),
(194, 94, 53.00, ''),
(195, 95, 10.00, ''),
(196, 96, 20.00, ''),
(197, 97, 49.00, ''),
(198, 98, 57.00, ''),
(199, 99, 69.00, ''),
(200, 100, 71.00, ''),
(201, 1, 56.00, ''),
(202, 2, 38.00, ''),
(203, 3, 23.00, ''),
(204, 4, 69.00, ''),
(205, 5, 55.00, ''),
(206, 6, 51.00, ''),
(207, 7, 48.00, ''),
(208, 8, 18.00, ''),
(209, 9, 37.00, ''),
(210, 10, 71.00, ''),
(211, 11, 44.00, ''),
(212, 12, 40.00, ''),
(213, 13, 12.00, ''),
(214, 14, 34.00, ''),
(215, 15, 67.00, ''),
(216, 16, 22.00, ''),
(217, 17, 62.00, ''),
(218, 18, 65.00, ''),
(219, 19, 70.00, ''),
(220, 20, 28.00, ''),
(221, 21, 63.00, ''),
(222, 22, 32.00, ''),
(223, 23, 75.00, ''),
(224, 24, 22.00, ''),
(225, 25, 34.00, ''),
(226, 26, 23.00, ''),
(227, 27, 50.00, ''),
(228, 28, 25.00, ''),
(229, 29, 17.00, ''),
(230, 30, 62.00, ''),
(231, 31, 74.00, ''),
(232, 32, 39.00, ''),
(233, 33, 53.00, ''),
(234, 34, 32.00, ''),
(235, 35, 74.00, ''),
(236, 36, 62.00, ''),
(237, 37, 46.00, ''),
(238, 38, 10.00, ''),
(239, 39, 75.00, ''),
(240, 40, 22.00, ''),
(241, 41, 70.00, ''),
(242, 42, 62.00, ''),
(243, 43, 18.00, ''),
(244, 44, 21.00, ''),
(245, 45, 67.00, ''),
(246, 46, 71.00, ''),
(247, 47, 45.00, ''),
(248, 48, 58.00, ''),
(249, 49, 65.00, ''),
(250, 50, 30.00, '');

-- --------------------------------------------------------

--
-- Table structure for table `OrderItems`
--

CREATE TABLE `OrderItems` (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_name` varchar(200) NOT NULL,
  `product_price` decimal(21,9) NOT NULL,
  `product_qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `OrderItems`
--

INSERT INTO `OrderItems` (`order_id`, `product_id`, `product_name`, `product_price`, `product_qty`) VALUES
(1, 19, '', 2.141619199, 75),
(2, 16, '', 1.132822812, 88),
(3, 85, '', 5054336.341008600, 25);

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_value` decimal(21,9) NOT NULL,
  `order_date` date NOT NULL DEFAULT current_timestamp(),
  `status` enum('pending','completed','cancelled','') NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Orders`
--

INSERT INTO `Orders` (`order_id`, `user_id`, `order_value`, `order_date`, `status`) VALUES
(1, 1, 96.000000000, '1987-02-20', 'pending'),
(2, 2, 171290105.000000000, '2024-06-14', 'pending'),
(3, 3, 2220439.000000000, '1980-08-25', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `ProductImages`
--

CREATE TABLE `ProductImages` (
  `image_id` int(11) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ProductImages`
--

INSERT INTO `ProductImages` (`image_id`, `image_url`, `product_id`) VALUES
(101, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dw6fa700a4/original/80104492_original_original_A.jpg?sw=680&sh=680', 1),
(106, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dw6fa700a4/original/80104492_original_original_A.jpg?sw=680&sh=680', 1),
(107, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw369b038c/original/80104492_original_original_C.jpg?sw=1000&sh=1000', 1),
(108, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dwbf74d90f/original/80104492_original_original_E.jpg?sw=1000&sh=1000', 1),
(109, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dwf36d66a7/original/80107455_original_original_A.jpg?sw=680&sh=680', 2),
(110, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dwa7b4dc47/original/80107455_original_original_B.jpg?sw=680&sh=680', 2),
(111, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw1c309f65/original/80107455_original_original_D.jpg?sw=680&sh=680', 2),
(112, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dwdd195252/original/80107455_original_original_E.jpg?sw=680&sh=680', 2),
(113, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwbdbfab71/original/80095098_original_original_X.jpg?sw=680&sh=680', 3),
(114, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dwae2a9804/original/80095098_original_original_2.jpg?sw=680&sh=680', 3),
(115, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwe5c55ac9/original/80095098_original_original_3.jpg?sw=680&sh=680', 3),
(116, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dwdd843c7a/original/80095098_original_original_4.jpg?sw=680&sh=680', 3),
(117, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwa8b1af34/original/80083849_original_original_A.jpg?sw=680&sh=680', 4),
(118, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw59cd6f47/original/80083849_original_original_B.jpg?sw=680&sh=680', 4),
(119, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dwde4b22e6/original/80083849_original_original_C.jpg?sw=680&sh=680', 4),
(120, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw73dc1b01/original/80083849_original_original_D.jpg?sw=680&sh=680', 4),
(121, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw4a290d40/original/0129521_original_original_1.jpg?sw=680&sh=680', 5),
(122, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw63c83dc3/original/80106602_original_original_2.jpg?sw=680&sh=680', 5),
(123, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw00f5e20d/original/80106602_original_original_3.jpg?sw=680&sh=680', 5),
(124, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw3911eb97/original/80106602_original_original_5.jpg?sw=680&sh=680', 5),
(125, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwfc02f733/original/80099349_original_original_A.jpg?sw=680&sh=680', 6),
(126, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw341081cc/original/80099349_original_original_B.jpg?sw=680&sh=680', 6),
(127, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw854fca1d/original/80099349_original_original_C.jpg?sw=680&sh=680', 6),
(128, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dwdb0150c6/original/80099349_original_original_F.jpg?sw=680&sh=680', 6),
(129, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwc846db4b/original/80102843_original_original_A.jpg?sw=680&sh=680', 7),
(130, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw7ce659ab/original/80102843_original_original_B.jpg?sw=680&sh=680', 7),
(131, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dwcf4b1b1c/original/80102843_original_original_C.jpg?sw=680&sh=680', 7),
(132, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw22481c8b/original/80102843_original_original_D.jpg?sw=680&sh=680', 7),
(133, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dw9abb819a/original/80027223_original_original_X.jpg?sw=680&sh=680', 8),
(134, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwf1bee239/original/0158010_original_original_3.jpg?sw=680&sh=680', 8),
(135, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dw1494c743/original/80027223_original_original_3.jpg?sw=680&sh=680', 8),
(136, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwd6517d4d/original/80027223_original_original_4.jpg?sw=680&sh=680', 8),
(137, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwb5b4fd7e/original/80094249_original_original_X.jpg?sw=680&sh=680', 9),
(138, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dw8d267063/original/80094249_original_original_2.jpg?sw=680&sh=680', 9),
(139, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dwd6db83d0/original/80094249_original_original_3.jpg?sw=680&sh=680', 9),
(140, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw7e11567d/original/80094249_original_original_8.jpg?sw=680&sh=680', 9),
(141, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dw2ac0b768/original/80104068_original_original_A.jpg?sw=680&sh=680', 10),
(142, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dw8b96d213/original/80104068_original_original_B.jpg?sw=680&sh=680', 10),
(143, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwb8b68c12/original/80104068_original_original_C.jpg?sw=680&sh=680', 10),
(144, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwdd9ffa6b/original/80104068_original_original_D.jpg?sw=680&sh=680', 10),
(145, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwc0667642/original/80087595_original_original_A.jpg?sw=680&sh=680', 11),
(146, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dwb1579ba1/original/80087595_original_original_B.jpg?sw=680&sh=680', 11),
(147, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw21d41a0b/original/80087595_original_original_C.jpg?sw=680&sh=680', 11),
(148, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw2ddd3929/original/80087595_original_original_E.jpg?sw=680&sh=680', 11),
(153, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dw9c53fc23/original/80044967_original_original_x.jpg?sw=680&sh=680', 12),
(154, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dw6b4a4b4c/original/80044967_original_original_B.jpg?sw=680&sh=680', 12),
(155, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dw97e4b588/original/80044967_original_original_C.jpg?sw=680&sh=680', 12),
(156, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwf372c13e/original/80044967_original_original_D.jpg?sw=680&sh=680', 12),
(157, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dwa8791d35/original/80088226_original_original_A.jpg?sw=680&sh=680', 13),
(158, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dwaf2f20df/original/80088226_original_original_B.jpg?sw=680&sh=680', 13),
(159, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw7c51b8a8/original/80088226_original_original_C.jpg?sw=680&sh=680', 13),
(160, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dwf943694d/original/80088226_original_original_D.jpg?sw=680&sh=680', 13),
(161, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwf17e730a/original/80098705_original_original_X.jpg?sw=680&sh=680', 14),
(162, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dwd6a6f5c2/original/80098705_original_original_2.jpg?sw=680&sh=680', 14),
(163, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw24df10b2/original/80098705_original_original_3.jpg?sw=680&sh=680', 14),
(164, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dwd9e9e28e/original/80098705_original_original_9.jpg?sw=680&sh=680', 14),
(165, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dw22498a58/original/80026978_original_original_1.jpg?sw=680&sh=680', 15),
(166, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwba3a66e0/original/80026978_original_original_3.jpg?sw=680&sh=680', 15);

-- --------------------------------------------------------

--
-- Table structure for table `ProductRating`
--

CREATE TABLE `ProductRating` (
  `rating_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `review_date` date NOT NULL,
  `rating` int(11) NOT NULL,
  `rating_comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ProductRating`
--

INSERT INTO `ProductRating` (`rating_id`, `product_id`, `user_id`, `review_date`, `rating`, `rating_comment`) VALUES
(1, 1, 1, '1976-07-09', 1, 'Quia libero nihil eum perferendis eaque similique non ipsa. Asperiores dolor autem nulla rerum possimus error. Consequatur tempora dolorem officiis est laudantium eos. Sint voluptas facilis qui similique ea quidem quibusdam. Mollitia harum id ea facere. E'),
(2, 2, 2, '2024-03-18', 3, 'Perspiciatis aut cupiditate quis porro eligendi. Ut qui ea sunt et laboriosam itaque libero. Laboriosam ut est qui aut exercitationem. Provident dignissimos reiciendis quia vel rerum. Mollitia qui non dolor accusamus. Quam ut ea voluptate.'),
(3, 3, 3, '2012-02-28', 4, 'Tempore aut consequuntur quas. Explicabo laborum aliquid voluptas non laboriosam. Dolor qui vel deserunt sed tempora eaque. Voluptate aliquam perspiciatis suscipit cupiditate. Facilis corrupti odio quo in nihil. Minus provident veniam eum nihil quaerat ex'),
(4, 4, 4, '1979-01-16', 4, 'Ratione et voluptatibus quidem temporibus vero distinctio deserunt et. Aut quae animi commodi in cum doloremque. Est consequatur nihil tempore eos maiores voluptatem. Libero odit suscipit consequatur.'),
(5, 5, 5, '2002-12-25', 3, 'Omnis maiores nihil eligendi tempore possimus cupiditate sint. Et modi dolores provident expedita id. Est voluptas praesentium alias praesentium consectetur mollitia expedita. Qui hic animi velit ex est.'),
(6, 6, 6, '1997-01-20', 2, 'Ut quo iste id debitis nihil. Sit quos dignissimos dolorem quod quis facere voluptatum. Non itaque adipisci et debitis consequatur perspiciatis. Quas adipisci velit quas aut dolor ea. Enim laboriosam ea porro ipsam optio in.'),
(7, 7, 7, '1994-03-02', 4, 'Molestiae omnis quibusdam deleniti iure. Sit sed voluptatem animi et. Tempore ea nisi quod est. Sit mollitia omnis optio illo rem deleniti quod. Natus corporis repellat laboriosam. Similique fuga voluptatem eos cum.'),
(8, 8, 8, '2018-06-11', 3, 'Sint dolorem maiores nulla quis. Animi optio ipsum quas quia ipsa enim aspernatur. Rem sunt cumque id eos.'),
(9, 9, 9, '2002-03-09', 0, 'Quis qui non nisi facere cupiditate dolore laudantium. Nihil quam reiciendis dolorem quasi et. Maxime sint consequatur ut nam earum illum. Ex dicta qui dolore id omnis ut magnam vitae. Quae voluptatem omnis dolore cumque magnam. Sed sed quis eligendi vel '),
(10, 10, 10, '2012-07-16', 1, 'Quia maiores recusandae quas. Dicta est velit sint aut numquam. Sed recusandae velit ut sunt laudantium dicta. Facilis dolorem ducimus ut sunt optio. Harum voluptatem sapiente sint incidunt explicabo placeat.'),
(11, 11, 11, '1995-05-31', 3, 'Quo est minus voluptatem provident quaerat optio eum eos. Cupiditate cupiditate iure dolore quibusdam dolores autem. Aut quo maiores debitis porro sequi est error. Natus aut est rem adipisci debitis nihil.'),
(12, 12, 12, '2013-10-17', 4, 'Quibusdam impedit molestiae ut ipsum itaque est aut. Esse aut quod ea expedita exercitationem sed dolores. Est error reiciendis accusantium magni. Itaque voluptatibus tempora voluptatem magni quas. Omnis maxime ab est distinctio est dolorem ut libero. Tem'),
(13, 13, 13, '2003-04-23', 4, 'Eius eaque qui accusantium repellendus nostrum sint. Voluptates distinctio qui esse assumenda iusto. Voluptatibus unde unde doloremque quia. Debitis praesentium rerum ullam sunt. Quia est doloribus est fugit expedita ut id.'),
(14, 14, 14, '2005-06-01', 2, 'Quasi a ex doloribus iusto. Sed expedita dolor optio ipsum officia quia ad. Libero dicta quos est recusandae. Et velit molestiae odit voluptas nostrum. Nulla omnis sint excepturi nihil nostrum. Molestiae sed non corporis dolorem molestiae molestias veniam'),
(15, 15, 15, '1981-04-11', 3, 'Dicta iure eligendi nesciunt impedit. Ullam officia provident soluta sunt qui qui ea. Eos praesentium corrupti qui aperiam. Explicabo minus cum maiores iure minima. Aliquid soluta ratione aut alias ut nihil perferendis.'),
(16, 16, 16, '2021-03-13', 3, 'Earum dolores consequuntur enim. Cum fuga impedit iure voluptatum quo quia voluptas. Accusantium rerum nulla consequuntur distinctio. Est dolores voluptas ullam eos minima. Corporis voluptatem repellendus voluptatem sint. Minus molestiae quos nesciunt non'),
(17, 17, 17, '1993-07-05', 5, 'Doloribus est rerum dolorum. Aut neque aperiam est dolorem ut. Quos ratione illum nihil a cumque rem. Velit nemo hic dolor qui. Eos qui velit quia rerum a sint saepe mollitia.'),
(18, 18, 18, '1984-12-01', 2, 'Voluptas optio ut iure consequuntur voluptatem aspernatur aspernatur. Qui possimus distinctio ad. Iusto id quia et voluptatem dicta consectetur. Qui fuga rerum et.'),
(19, 19, 19, '1993-12-07', 1, 'Exercitationem quia ut iste harum. A magnam quas repellendus autem sit. Laborum voluptas repellendus vel voluptas iusto aliquam sunt est.'),
(20, 20, 20, '1984-05-23', 0, 'Delectus vel voluptatem in id. Debitis quaerat porro sint recusandae molestiae. Dolorem animi totam eum officia blanditiis magni.'),
(21, 21, 21, '2002-04-16', 2, 'Non optio similique nostrum accusantium ut. Iure repellendus voluptatem praesentium voluptatem soluta. Eum sint voluptatem illo reprehenderit omnis vel quidem. Et atque velit qui natus vero repellat voluptatem. Et sint ut ad et dolores.'),
(22, 22, 22, '1991-08-18', 2, 'Soluta et molestiae ipsam dolorem. Laborum ducimus nemo vel ipsum ea beatae sit. Et eveniet consectetur et nihil eligendi omnis reiciendis. Beatae enim est id quo consequatur. Quisquam fuga explicabo quas sequi explicabo. Quam voluptas ea ut ex corrupti b'),
(23, 23, 23, '1996-12-03', 0, 'Ab consectetur et quod sed et. Voluptatem ea perspiciatis voluptatibus est facilis error veniam facilis. Similique voluptatem quis sit nam commodi perferendis.'),
(24, 24, 24, '2000-04-19', 1, 'Sapiente molestiae ab similique. Sint occaecati distinctio labore fuga laborum. Exercitationem voluptate enim non id aliquid.'),
(25, 25, 25, '1984-10-23', 1, 'Repellendus quos tempore voluptatem labore in aliquam saepe. Natus quo consectetur similique sit enim officia. Occaecati quis nam soluta rerum nesciunt eligendi et quia.'),
(26, 26, 26, '2004-03-29', 3, 'Consequatur nostrum qui ducimus quasi. Consequatur doloribus itaque sint dolorum iure sequi quasi recusandae. Eveniet quia tempore porro magni optio quasi exercitationem. Aut mollitia porro qui laboriosam. Est ipsam repudiandae et tenetur eius.'),
(27, 27, 27, '1996-03-25', 1, 'Omnis officiis voluptas quae est consequatur mollitia asperiores. Nesciunt aperiam dicta possimus aperiam quia iusto maxime. Ut quod eveniet hic ipsum nulla. Id et nulla quo quibusdam aut. Nihil eligendi mollitia ex rerum eius quia id mollitia.'),
(28, 28, 28, '1978-02-15', 1, 'Sint delectus laudantium eius tenetur. Nemo adipisci quod harum repellat qui. Fugit rerum laudantium sequi odio et exercitationem rerum provident. Autem dolores modi aliquid quia cupiditate ea.'),
(29, 29, 29, '1994-09-09', 2, 'Consequatur quis quas eos dolor enim iusto expedita. Ut ea impedit autem error delectus. Doloribus itaque provident et necessitatibus occaecati sed consequuntur.'),
(30, 30, 30, '1987-07-13', 3, 'Atque debitis non debitis quo. Eveniet quasi laudantium cum. Et saepe rem facilis. Aliquid est pariatur minima a doloremque blanditiis. Facilis omnis sed hic odit non repellendus.'),
(31, 31, 31, '1970-06-22', 2, 'Assumenda cupiditate qui ut quisquam ipsum quidem sed saepe. Minima enim et minus autem alias error. Suscipit quo harum porro debitis quam. Velit eaque non dolor numquam similique optio nulla. Tempora nemo atque nemo aliquam nesciunt dolores. Quidem quisq'),
(32, 32, 32, '2001-08-08', 5, 'Deserunt qui quos error. Aliquam in molestiae temporibus voluptas perspiciatis. Dolores fugiat et iste cumque sed amet. Eligendi soluta mollitia voluptas saepe repudiandae eaque saepe. Beatae consequatur ullam dolore id ut consequuntur molestiae quod.'),
(33, 33, 33, '1999-08-11', 5, 'Nulla et ea assumenda numquam doloremque. Qui deserunt esse totam quis omnis. Labore magnam et quia est voluptatem minus. Quaerat quaerat voluptatum sed at commodi et. Assumenda occaecati officiis porro possimus soluta id. Voluptas magnam impedit est sapi'),
(34, 34, 34, '1993-01-08', 4, 'In distinctio eum necessitatibus ex molestiae. Totam quia deleniti ea dolor nam impedit itaque. Molestias consequatur et nobis quam eos nam. Ratione voluptas aut molestiae repellendus sapiente iste quae aut.'),
(35, 35, 35, '1977-07-27', 5, 'Voluptatem libero sapiente molestias quis et et odio. Quas dicta ratione et animi. Mollitia voluptas est quas unde magni sunt a. Ut ratione et nihil excepturi aut sit dolore. In quibusdam quaerat autem quia officiis.'),
(36, 36, 36, '1994-08-15', 0, 'Aliquid consequatur temporibus non illum facere fuga ratione laudantium. Consequatur vitae consequuntur voluptatem sint et dolor corporis. Eum aut consequatur magnam maiores est soluta velit. Occaecati laborum ullam fugit magnam dignissimos ut non aut. Au'),
(37, 37, 37, '2019-09-01', 3, 'Asperiores non nostrum commodi sint cumque quasi. Soluta labore rerum est qui sit ex praesentium. Omnis odio voluptate distinctio deserunt tempore. Debitis quia sit voluptas voluptatem tenetur omnis maxime molestiae.'),
(38, 38, 38, '1990-04-23', 4, 'Ratione quibusdam excepturi molestiae. Rerum sed id sint ut nam. In accusamus quia placeat dolores eaque. Iusto et tempore numquam nesciunt sit porro.'),
(39, 39, 39, '1995-12-25', 0, 'Culpa quo deleniti repellat eos velit cumque. Sed laudantium voluptatem sint eum. Eligendi molestiae quia velit tempore. Deleniti illo aut molestiae natus qui consequuntur.'),
(40, 40, 40, '2018-05-04', 0, 'Officia alias voluptates aut et error id. Consequuntur in cumque iusto qui exercitationem. Qui assumenda beatae quae nam maxime. Voluptas quia maiores labore odit dolores enim. Et quia fuga molestiae quia voluptatem. Ratione in tenetur amet.'),
(41, 41, 41, '1994-09-12', 3, 'Consequatur veritatis eveniet illum id quaerat doloribus ad. Aut est quisquam molestiae unde molestias voluptatem expedita. Voluptatibus vel hic neque recusandae. Occaecati quae non dolor necessitatibus nihil eveniet et. Natus quis quam et distinctio cons'),
(42, 42, 42, '2013-05-30', 4, 'Et beatae vero explicabo ab. Laudantium delectus distinctio eveniet fuga. Dolores quis assumenda possimus rerum deleniti.'),
(43, 43, 43, '2022-02-17', 3, 'Non rerum laborum molestiae. Et ut doloribus totam et. Veniam totam praesentium repellat est ad. Eum doloremque qui est sed in. Quam autem molestiae voluptas eveniet.'),
(44, 44, 44, '1985-08-01', 3, 'Esse incidunt sint occaecati perferendis ab sunt. Iure sit quod atque qui aut quasi cumque fugit. Laborum hic est beatae veritatis. Beatae repellendus vitae exercitationem architecto.'),
(45, 45, 45, '1970-11-02', 2, 'Consequatur et omnis ut voluptas magni. Eaque provident nesciunt aut. Ullam esse quia sequi expedita hic asperiores tempora. Laboriosam magni quia voluptas dolores. Et quo non nemo quia reiciendis consectetur.'),
(46, 46, 46, '2010-05-24', 2, 'Similique et nulla atque est sit repellendus voluptatem non. Autem eum corrupti illum. Sit tenetur id deserunt et. In quos itaque hic necessitatibus rem nam natus. Porro minima quam est vero. Aut laudantium et est tenetur impedit et necessitatibus.'),
(47, 47, 47, '1977-12-26', 3, 'Corporis sed debitis quis sequi asperiores omnis atque. Id blanditiis at corporis consequatur ipsum occaecati. Eligendi autem asperiores blanditiis quo. Voluptates natus unde enim fugiat.'),
(48, 48, 48, '2024-05-12', 3, 'Quidem eum quia impedit possimus odio voluptatem. Cum est dicta rerum quibusdam molestiae sed. Quia qui consectetur voluptatem quas adipisci aut earum. Laboriosam ducimus repudiandae blanditiis et totam totam quasi. Dolor consectetur laudantium ad qui.'),
(49, 49, 49, '1989-12-27', 2, 'Velit unde repellendus aut animi distinctio nisi. Sit animi aut blanditiis qui voluptas ut. Inventore minima ut cum sit ut eum.'),
(50, 50, 50, '1998-07-20', 3, 'Molestiae aut veritatis quia sit quaerat voluptas. Deserunt nulla aut quibusdam. Qui consequuntur et at eius corporis perferendis quae. Optio aut non ut et dolore. Quisquam laborum cumque quo rerum vero.'),
(51, 51, 1, '2015-12-26', 4, 'Labore et at sapiente sed distinctio. Voluptas et aut sunt mollitia ex. Facere et quos et eum. Ipsum consequatur facere quae praesentium.'),
(52, 52, 2, '2013-04-02', 0, 'Quas quam ut et qui temporibus voluptates. Possimus et velit distinctio sapiente aut iusto. Nesciunt dolor sint omnis qui veniam corporis. Aut eveniet numquam sed ea alias maiores dolores. Sunt asperiores vero a. Et magnam enim ipsam consequatur rem.'),
(53, 53, 3, '2006-06-02', 5, 'Sit numquam laudantium sequi consectetur qui numquam sint necessitatibus. Non omnis eaque quam dolores sint qui animi accusantium. Minima minus sunt autem rerum explicabo. Magni vel reiciendis ut nihil sit a. Et enim in sit et.'),
(54, 54, 4, '2012-02-03', 4, 'Aut quaerat aliquam maiores aut aut deleniti qui. Quae et distinctio minus soluta facilis eveniet adipisci. Officiis numquam sed doloribus a nihil nostrum. Consequuntur eum dolor consectetur totam veniam ut.'),
(55, 55, 5, '2024-08-25', 0, 'Dignissimos consequuntur veniam magnam sapiente optio pariatur enim aut. Voluptatem alias et tenetur minus ullam quidem. Deleniti est in nemo illo quisquam. Sunt sed debitis et vel asperiores necessitatibus voluptatibus. Nihil quos nam aut consequatur. Mi'),
(56, 56, 6, '2013-09-23', 0, 'Perspiciatis quibusdam voluptatem quaerat minima facilis molestiae voluptatibus. Asperiores voluptatem nostrum nam iure recusandae non quis. Et iste iusto aut ut sequi enim quaerat. Qui voluptas eius autem.'),
(57, 57, 7, '1970-09-10', 2, 'Neque voluptatum vel officia repellat fugit. Explicabo quaerat omnis et beatae ipsum. Et ad ut sit repudiandae dolorem dolorem. Voluptates et officia rerum ut laborum eos repellat. Neque est expedita magni quibusdam aperiam nobis et.'),
(58, 58, 8, '1996-06-26', 4, 'Non accusamus autem temporibus quae qui ducimus. Et ullam natus quia necessitatibus ut aut. Placeat assumenda in vel. Omnis aut dicta a repellat incidunt quas optio qui.'),
(59, 59, 9, '1992-12-22', 2, 'Qui quia mollitia culpa quis sed dolorem. Blanditiis et nobis deleniti rerum alias ipsam. Tempore non repellendus fugit officiis voluptate. Et et magnam ut corrupti a unde. Dicta quis modi voluptas tenetur aspernatur porro.'),
(60, 60, 10, '1972-04-17', 1, 'Aspernatur voluptatem quia quae omnis eligendi fuga excepturi. Illo molestiae quibusdam commodi quis consequatur dolores. Quisquam iusto sed repellat alias in delectus. Ipsum ut modi non cupiditate. Sed quia rerum blanditiis totam corrupti enim iusto.'),
(61, 61, 11, '2017-07-05', 3, 'Soluta dignissimos ducimus animi est sapiente architecto sit. Omnis qui suscipit possimus. Est error eos ullam non. Quae architecto ut vero est sequi facere.'),
(62, 62, 12, '2007-05-13', 0, 'Vel dicta aperiam tempora ipsa nostrum ducimus quis. Recusandae dignissimos accusantium accusamus voluptatem dicta repudiandae. At ipsum atque sequi est molestiae officiis. Et asperiores exercitationem praesentium dolorem error ipsum. Quasi voluptas sit t'),
(63, 63, 13, '2023-04-18', 2, 'Earum iure ab pariatur provident. Aliquam quia et ut expedita minus. Qui voluptas est in rerum illo. Accusamus facere consequatur qui aliquid enim. Dicta aut aut soluta.'),
(64, 64, 14, '1971-07-08', 4, 'Sunt cupiditate voluptatem sed. Neque omnis voluptatibus eius occaecati ab ut ut. Aut ratione doloribus porro autem. Animi impedit qui cum et fugit aut aut.'),
(65, 65, 15, '1980-11-01', 1, 'Eaque debitis porro in deleniti numquam reiciendis. Soluta corrupti dolor sunt nihil. Dicta assumenda praesentium quis odit vel error. Porro ut animi tempore dolorem. Illo perspiciatis quisquam et animi placeat.'),
(66, 66, 16, '1990-12-16', 4, 'Aliquid reprehenderit similique ipsam rerum ut et dignissimos. Ipsa consequatur numquam aliquam assumenda illum consequuntur. Nulla ut et fugiat labore in maiores voluptas. Quo praesentium ea eum delectus minima. Quas consectetur repellendus iusto sapient'),
(67, 67, 17, '1995-01-18', 2, 'Cumque debitis maxime ut sapiente nobis est labore vel. Iusto dolores explicabo quisquam ea. Doloremque quaerat nulla ea reiciendis. Facilis tempora voluptatibus iure excepturi.'),
(68, 68, 18, '2023-07-13', 2, 'Nisi ut ut optio. Architecto voluptatem voluptatem quia porro. Et ducimus qui aliquam et cupiditate. Quia itaque voluptas et voluptatem tempora id qui. In provident eligendi corporis.'),
(69, 69, 19, '1980-12-13', 4, 'Et ducimus libero sed qui fuga. Inventore error sint expedita molestiae. Qui illum vitae assumenda ut. Rerum ipsum omnis consequatur totam sint blanditiis.'),
(70, 70, 20, '1983-09-11', 4, 'Amet impedit hic autem dolor et. Officia quam voluptas quia id voluptatem recusandae expedita. Modi consequatur totam officia est sequi repellat voluptatem. Corporis id inventore dolorem tenetur sunt voluptatem. Occaecati sapiente ea consequuntur ut venia'),
(71, 71, 21, '1974-04-14', 3, 'Non ad reprehenderit quod in. Delectus alias facilis aut alias esse suscipit. Unde consequatur et porro ipsam provident officia.'),
(72, 72, 22, '2009-08-15', 3, 'Laborum perspiciatis recusandae consequuntur tempore nobis atque. Illo qui quos tenetur voluptas dolores ratione ipsam. Sit tempora et aut et explicabo ratione sint. Laudantium consequatur voluptates sunt unde repellendus. Sapiente temporibus a assumenda '),
(73, 73, 23, '1999-12-07', 2, 'Deserunt itaque quo dolor voluptas necessitatibus quibusdam. Sit eum ipsam veniam sint sint aut quos dolorem. Recusandae reiciendis nisi voluptate mollitia. Beatae veritatis laudantium recusandae temporibus veniam. Rerum id ea numquam rerum voluptatem ass'),
(74, 74, 24, '2014-09-02', 4, 'Corrupti velit voluptate exercitationem. Tempora est eum distinctio ratione quis. Officia ducimus rerum rem et eos repudiandae. Laudantium saepe culpa voluptatem eum voluptas neque eaque cum. Porro sed ullam ipsa saepe possimus molestias et vel. Dolores s'),
(75, 75, 25, '2021-03-04', 4, 'Sed at fuga accusamus minus accusantium nemo error. Beatae placeat possimus sunt sed maiores temporibus facilis. Porro et voluptatum magnam tenetur eligendi. Non aut rerum nobis molestias molestias. Illum similique officia modi et et dolorem quam.'),
(76, 76, 26, '1980-03-19', 3, 'Aspernatur accusantium rerum non dolore non magni et. Amet adipisci eos nihil corrupti et illo. Modi ea neque natus illum odio aut voluptas. Id consequatur qui iusto. Numquam nemo fugit ea nihil odit.'),
(77, 77, 27, '1997-08-26', 3, 'Quod quae et aliquam quidem laborum dolore incidunt. Similique culpa aliquid dolores accusamus. Molestias vitae ipsum accusamus eius tempore similique qui maxime. Facere eveniet et occaecati doloremque. Quia tenetur occaecati illo dolores iste explicabo b'),
(78, 78, 28, '1992-01-27', 5, 'Ea similique molestiae earum ullam vel. Molestiae vero ut atque sit. Dicta harum doloremque rerum ut. Deleniti eaque ullam vero commodi quia.'),
(79, 79, 29, '1984-08-10', 4, 'Alias nobis esse ea non. Atque et et eius minima nemo. In est a mollitia. Similique amet iusto nihil. Itaque vero quos necessitatibus odio vitae voluptatem.'),
(80, 80, 30, '1976-04-06', 0, 'Atque expedita fuga in officiis corporis eligendi quaerat deleniti. Ea est recusandae repellat dolorem. Soluta illo numquam velit enim ad. Est sapiente facilis delectus ut sed. Ea omnis suscipit asperiores. Perspiciatis aut quis et quo.'),
(81, 81, 31, '2013-09-04', 2, 'Recusandae necessitatibus qui animi illum. Consequatur voluptatem est illum. Perspiciatis et similique id quisquam nam ut totam.'),
(82, 82, 32, '2018-09-07', 3, 'Commodi doloremque sapiente sunt. Quidem aut adipisci inventore reprehenderit dolorum possimus eos. Corrupti vel itaque possimus possimus qui qui. Animi qui quia suscipit voluptatem laboriosam.'),
(83, 83, 33, '2004-03-15', 3, 'Rerum rerum eius ipsa molestiae quos deserunt doloremque temporibus. Ipsam est illum impedit totam porro facilis eveniet. Explicabo eaque quos iure laudantium perspiciatis. Quia cumque rerum cupiditate ut nihil minima sed.'),
(84, 84, 34, '2023-06-03', 3, 'Sequi qui consequuntur ducimus dolore. Asperiores est placeat error praesentium qui. Molestias quos aut fugit architecto. Fugit enim nobis cum minima. Suscipit ducimus odit illo dolorem dolore eos est.'),
(85, 85, 35, '2021-06-08', 5, 'Rerum omnis et in non dolorum quaerat esse. Ullam molestiae molestias nihil ut vitae earum. Iste eius quam voluptatem autem consequatur.'),
(86, 86, 36, '1979-03-04', 5, 'Distinctio accusantium ex error dolorem dolores. Quam minima consequuntur dolores aspernatur molestiae. Commodi nesciunt dolores dicta nam reprehenderit error.'),
(87, 87, 37, '1987-08-23', 2, 'Sapiente maiores eos vel. Veniam doloremque in distinctio non tenetur consequatur. Similique ad rerum nostrum molestias alias. Suscipit quaerat et laboriosam veritatis. Molestiae facilis qui sed veniam et aut at.'),
(88, 88, 38, '1983-12-28', 0, 'Delectus nihil ea qui dignissimos. Aperiam consequatur velit rem iusto. Animi soluta sint est placeat qui enim culpa. Placeat voluptates cumque et id autem ea. Cum sit consequatur quod aperiam. Sed cumque rerum ducimus.'),
(89, 89, 39, '1992-08-12', 2, 'Aspernatur blanditiis quos cum asperiores eos assumenda. Ipsam mollitia accusantium aut velit omnis quidem qui. Eum aut rem commodi eum labore fuga. Aut esse molestiae quia ea nihil.'),
(90, 90, 40, '2013-10-11', 5, 'Excepturi sunt sint molestias pariatur unde maiores adipisci recusandae. Et sit ducimus possimus in. In perspiciatis quisquam debitis aut dolorem adipisci culpa. Mollitia totam est odio quas harum voluptatem.'),
(91, 91, 41, '2015-01-28', 4, 'Qui est sint et nam et repudiandae esse. Qui facilis quibusdam sed. Qui ipsa distinctio porro at. Temporibus est inventore aliquam id et. Nihil perspiciatis dignissimos et delectus. Quas temporibus omnis at est vel neque nisi.'),
(92, 92, 42, '1980-04-13', 1, 'Doloribus natus id blanditiis velit. Modi rerum blanditiis recusandae autem sed id. Tempore ipsum ea eos ad ut beatae. Est quibusdam id provident molestiae. Omnis quos et minima explicabo inventore magnam sint quasi. Libero rerum libero aut voluptas at at'),
(93, 93, 43, '1993-10-04', 1, 'Voluptas voluptas ducimus minima est ipsa fugiat. Nulla quaerat laborum voluptatem suscipit eaque error. Reprehenderit enim nisi quia laboriosam. Pariatur repudiandae repellendus animi a quos.'),
(94, 94, 44, '2013-05-28', 2, 'Illo ut accusantium autem qui. Voluptas ea autem officiis ipsum qui voluptatibus. Ipsa et voluptas et dolor quia qui incidunt. Molestias iure placeat vel animi laboriosam et. Enim consequatur sed numquam maiores dolores aspernatur ullam molestias. Maiores'),
(95, 95, 45, '1995-03-10', 3, 'Qui minus sapiente et eius. Omnis qui aut facere sunt odit quaerat. Et exercitationem voluptatem id fugiat quisquam. Et iste rerum qui necessitatibus et voluptas eveniet. Harum quasi reiciendis suscipit voluptates molestiae.'),
(96, 96, 46, '1989-05-11', 4, 'Iusto quae enim qui aut consequatur animi. Aut officia ut voluptatem ad rerum. In illo voluptatibus dolor et. Laudantium dolorum laudantium quo enim a qui saepe error. Velit ea asperiores possimus officia laudantium.'),
(97, 97, 47, '1995-04-26', 5, 'Nulla rem neque consequatur ad. Recusandae omnis eum qui non. Enim quos qui voluptas aspernatur explicabo et. Consequuntur et nostrum odit aut. Earum cumque officia fuga consequatur aut quos et. Molestiae mollitia perferendis enim iusto veritatis similiqu'),
(98, 98, 48, '2011-06-17', 4, 'Fugit aut nihil eum perspiciatis impedit sint et recusandae. Quia quae ipsam quasi vitae nam. Et aut repellat ut id. Vero fuga possimus cupiditate. In eligendi non quam non laudantium provident.'),
(99, 99, 49, '1974-08-26', 0, 'Dolore est qui dolor. Neque laboriosam vero veniam impedit quo rerum sunt. Sit in reprehenderit vitae. Eos magni et qui omnis enim rem fugit. Aut rem porro fugit laudantium enim sit.'),
(100, 100, 50, '2024-01-08', 1, 'Ut omnis enim laudantium ipsam. Quia aut sit ea sit. Est sunt sunt aut dignissimos dolorem ut.'),
(101, 1, 1, '1977-04-29', 0, 'Ut dolores cumque possimus praesentium. In reprehenderit voluptatem temporibus voluptatem quasi unde. Consequuntur a dolorem a sit. Quam et velit omnis. Aut in modi ex doloremque. Esse modi autem officiis quia.'),
(102, 2, 2, '2023-04-10', 2, 'Officia veniam porro velit nesciunt cupiditate nemo molestiae. Et blanditiis saepe nisi qui distinctio porro fugiat. Eius perferendis debitis corrupti et. Libero est hic dicta repellendus quae rerum corporis delectus.'),
(103, 3, 3, '2013-01-10', 4, 'Architecto exercitationem natus impedit mollitia dolorum autem. Qui tempora iusto expedita. Voluptate nisi ab itaque.'),
(104, 4, 4, '1990-10-13', 5, 'Quis eius quia ut fugit. Veritatis accusantium tenetur quo et et velit suscipit. Sit et vitae quasi.'),
(105, 5, 5, '2018-01-12', 4, 'Quas possimus quibusdam vero et. Nemo deleniti maiores blanditiis quidem fuga quisquam laudantium. Dolor facilis non nisi fugit quia nihil. Omnis ullam mollitia ut minus at. Aut esse eveniet nisi consequatur quasi debitis. Provident sint quam dolor quidem'),
(106, 6, 6, '2010-10-04', 5, 'Ad consequuntur quas consequuntur nobis ducimus. Sunt voluptas vitae occaecati voluptas. Sint expedita odio placeat et voluptatem repellendus et. Repudiandae aut impedit numquam quibusdam. Doloribus est esse unde quaerat. Et consequatur sunt dignissimos a'),
(107, 7, 7, '2001-05-20', 2, 'In voluptas accusantium deserunt sed et. Suscipit qui dicta numquam vero. Consequatur numquam ipsum iste asperiores est. Ipsam exercitationem ab quis voluptates et. Quia quisquam illum inventore laborum.'),
(108, 8, 8, '1986-05-14', 1, 'Omnis aut inventore exercitationem placeat totam debitis qui. Tempore voluptas magni provident mollitia. Sapiente corrupti tenetur repellat corrupti assumenda non.'),
(109, 9, 9, '2010-07-17', 2, 'At at eveniet culpa assumenda sed tenetur a. Iusto minima animi sint a eius. Cupiditate maxime consequuntur autem aut. Ut recusandae nesciunt natus soluta cupiditate. Consectetur magni quia odit eaque impedit voluptatum blanditiis.'),
(110, 10, 10, '2005-07-04', 2, 'Ut quibusdam eum rem dolorem eaque. Inventore vero repellat alias fugiat. Debitis recusandae voluptas non dicta. Mollitia sit a qui voluptatem sit. Et fugiat ducimus hic nihil voluptas veniam eaque reiciendis. Maiores non maxime aut.'),
(111, 11, 11, '1987-07-02', 4, 'Et voluptas ut eum adipisci autem dignissimos. Sed rerum dolor quas consectetur. Ipsum enim tempore laboriosam beatae reprehenderit.'),
(112, 12, 12, '2015-06-09', 4, 'Explicabo magnam delectus minima ipsum fugiat et ut. Voluptas libero qui quia sequi et alias. Est ipsa nobis distinctio quae odio nam illum. Voluptatem non et itaque provident odit perspiciatis eum. Aliquam repellat odio aliquid exercitationem molestias n'),
(113, 13, 13, '2022-09-21', 5, 'Suscipit similique aut illum at dignissimos optio. Exercitationem aperiam natus minima hic exercitationem. Ut corrupti nemo occaecati cupiditate vel blanditiis molestiae eius. Amet repellendus facilis neque mollitia dolore non. Dolore aperiam repellat por'),
(114, 14, 14, '2002-04-12', 1, 'Temporibus illum sed et quam id. Non delectus qui placeat officiis. Placeat possimus commodi ut ad quidem at tempora. Voluptatem sequi fugit rerum cumque.'),
(115, 15, 15, '2002-12-29', 4, 'Est facilis culpa tenetur unde asperiores. Laudantium autem et aliquam facilis omnis saepe. Et excepturi earum enim eveniet doloribus. Quo nam eius quia provident sunt est. Assumenda odio aut impedit aut vero et.'),
(116, 16, 16, '2014-09-28', 0, 'Nam qui aut qui sunt rerum explicabo. Hic perferendis magnam unde harum. Nemo aut sed soluta voluptas. Fuga sed eligendi nulla molestiae. Repellendus placeat est impedit harum. Ratione sit quia explicabo vitae magni voluptatem aliquid sint.'),
(117, 17, 17, '1991-08-03', 5, 'Et consequatur distinctio est ut repellat laudantium. Enim rerum repudiandae voluptas consequatur eos porro nihil. Sed accusamus ut aut quia natus. Rerum quo fugit consequuntur sequi aliquam. Et nihil neque ipsam sunt aliquid quibusdam eius.'),
(118, 18, 18, '1998-02-26', 3, 'Nihil consequatur veniam voluptatem consequuntur fugit. Recusandae et et sapiente est voluptatum cum adipisci. Et in aperiam deleniti quis libero enim repudiandae nihil. Fuga eaque placeat quis quia aut qui quam. Veniam iure fuga aliquam accusamus. Necess'),
(119, 19, 19, '1985-11-17', 5, 'Ut veniam nulla vero blanditiis quis molestiae. Perferendis est ullam ullam facere. Necessitatibus in quam rerum ut quibusdam. A porro veritatis quia et. Necessitatibus natus sed culpa eum cum voluptatem.'),
(120, 20, 20, '2022-01-10', 4, 'Magnam ut enim rem aut qui. Maiores beatae quam eius et in. Sed deleniti quod saepe voluptas animi. Blanditiis ducimus est aut dolorem. Est blanditiis rem sit eius alias.'),
(121, 21, 21, '1980-11-08', 3, 'Et illum ratione debitis iste minima tenetur. Id veniam consequatur doloribus quis assumenda inventore accusantium. Optio dolores soluta qui corrupti cupiditate tempora alias quibusdam. Voluptatem omnis qui et dolorem est eos.'),
(122, 22, 22, '1976-12-19', 2, 'Ullam ut voluptates nostrum consequuntur occaecati reprehenderit aliquam numquam. Ea at asperiores nostrum unde distinctio cumque quaerat. Quis sit tempore repellat tempore asperiores id eius a. Illo vel temporibus qui beatae porro dolorem vitae.'),
(123, 23, 23, '1992-07-13', 5, 'Repellendus earum reiciendis mollitia laboriosam. Omnis harum excepturi sed eius veniam in tenetur. Aperiam voluptatum et consequuntur at. Est id officia aut commodi et. Ad maxime eum id cupiditate. Harum omnis cum temporibus perspiciatis quis.'),
(124, 24, 24, '2018-02-19', 3, 'Ullam eligendi qui dicta necessitatibus illo voluptatem. Odio modi ea aliquam dolorem. Rem inventore aut corrupti molestiae doloremque et. Itaque quo occaecati quia asperiores debitis. Fuga repudiandae ut velit velit aliquam aut neque.'),
(125, 25, 25, '1994-09-29', 4, 'Sed consectetur qui sit eos dolor. Ratione illo praesentium eius maiores. Accusamus praesentium voluptatem qui temporibus. Consequatur ratione quae consequatur dolor voluptatum eveniet.'),
(126, 26, 26, '1994-02-05', 1, 'Aut sit autem aliquam. Voluptas in aliquid quia consequatur. Ullam velit in quia nisi. Dolor est similique libero. Dicta consectetur reiciendis maiores blanditiis. Facilis enim tempora magni eaque dolor fugit eos perspiciatis.'),
(127, 27, 27, '2021-01-16', 5, 'Maxime est rerum laborum aut natus. Voluptates aut incidunt et mollitia nihil fugit sequi. Porro possimus recusandae molestiae repellat placeat quo. Dolores repellat officiis modi sed.'),
(128, 28, 28, '2001-12-07', 3, 'Libero doloremque consectetur quia voluptas libero. Qui ea occaecati occaecati dolorum et voluptatibus. Animi harum dolorem delectus totam nemo aliquam facere. Consequatur porro odio ipsa repellendus est. Fuga aspernatur qui iste dolorum ut est est. Ut co'),
(129, 29, 29, '2000-08-06', 4, 'Quidem reiciendis repellendus ipsum sit. Sunt quia itaque voluptatem eum. Deleniti praesentium beatae dolores laudantium cum itaque voluptatem. Quis quas ut molestias quibusdam.'),
(130, 30, 30, '2024-08-26', 4, 'Harum modi tenetur nesciunt distinctio exercitationem enim voluptas. Voluptas sed rerum quam inventore. Dolor non quasi quia ratione dolorum autem. Quibusdam sed dolor qui sed laudantium omnis iusto. Laboriosam sapiente facilis impedit asperiores vel quis'),
(131, 31, 31, '1987-06-15', 2, 'Enim voluptatum sint et expedita voluptatum reprehenderit temporibus. Non occaecati eius ducimus alias ex. Praesentium architecto eum tempore sunt laboriosam cupiditate. Accusantium aut quia at non earum et est.'),
(132, 32, 32, '2002-12-27', 3, 'Aut rem fugiat veniam. Excepturi consequatur facilis velit qui. Cumque quidem et ipsa accusamus corporis debitis. Quibusdam totam natus et pariatur magni dicta quos.'),
(133, 33, 33, '2022-12-17', 0, 'Sit est qui dignissimos culpa consequuntur eum autem est. Deleniti deserunt ratione alias dolor et qui assumenda. Amet eos ipsa molestiae. Similique amet sit molestiae dignissimos reprehenderit repudiandae et.'),
(134, 34, 34, '1999-01-21', 1, 'Sapiente molestiae et voluptatum dolore nisi. Suscipit qui minima voluptatum modi soluta sed eos. Explicabo fugit autem ut voluptatem voluptas corrupti omnis.'),
(135, 35, 35, '2002-02-12', 4, 'Sequi qui architecto ullam et sed fugit perspiciatis. Laborum rerum optio perferendis et repudiandae. Officiis ut beatae cum et praesentium.'),
(136, 36, 36, '2021-04-19', 3, 'Pariatur ea enim aliquid saepe ab facere. Tenetur blanditiis vel autem et suscipit. Maiores voluptatibus quam distinctio tempora.'),
(137, 37, 37, '2008-04-15', 1, 'Iste excepturi explicabo voluptatem. Numquam et non sit amet eos et in. Cumque vel deserunt ut.'),
(138, 38, 38, '1977-05-19', 3, 'Sapiente sed sit ea praesentium sed. Amet sunt repellat magni veniam. Labore accusamus in et soluta consectetur illo sequi. Mollitia minus similique quae eos unde.'),
(139, 39, 39, '2002-05-19', 1, 'Praesentium cupiditate dolore aut voluptatem totam ut. Quod deleniti voluptatem consectetur. Deleniti rem eveniet perferendis commodi. Rerum consequatur qui quis minima. Provident illo quibusdam possimus quibusdam dignissimos dolore. Aliquid et nulla dist'),
(140, 40, 40, '2016-05-13', 2, 'Sint et aut omnis dolores ab. Et id omnis repellat totam alias ipsa eveniet aut. Quisquam eius fugiat suscipit tempora quaerat sint tenetur. Et molestias qui quibusdam accusamus.'),
(141, 41, 41, '1992-04-11', 3, 'Fuga quas quod in sit consectetur quae ipsam. Modi assumenda voluptas omnis qui quia eos. Quod eos ipsam animi quidem sequi. Non repudiandae eum earum recusandae voluptatibus exercitationem. Illum consectetur delectus eos velit vel.'),
(142, 42, 42, '1997-07-04', 0, 'Praesentium sit repellendus et quia. Blanditiis ipsam explicabo et eos. Tempore vero soluta tempora vel omnis laboriosam. Officiis ut odit dignissimos illum debitis.'),
(143, 43, 43, '2018-01-15', 5, 'Doloremque quisquam id voluptatem in. Est ea animi quis aliquam aliquid ut nam. Et molestiae deleniti dolores nesciunt totam exercitationem. Nam sit odio iste quo quo. Modi maiores dolores maxime natus. Numquam nemo assumenda esse corporis assumenda.'),
(144, 44, 44, '2006-05-17', 0, 'Occaecati architecto vero voluptates vel quia qui sunt. Natus qui eos excepturi veniam natus. Ut id molestiae velit molestiae quas adipisci aperiam. Aperiam deserunt doloribus tenetur consequatur. Ipsam ab consequuntur beatae cumque dolores debitis quia. '),
(145, 45, 45, '1986-07-27', 3, 'Tempora quibusdam architecto vero qui. Consectetur omnis sapiente voluptas at occaecati. Delectus beatae reprehenderit sit ea ab harum. Iusto accusamus dolor ad recusandae.'),
(146, 46, 46, '2000-07-07', 3, 'Quae consequatur sunt velit quo qui quia modi vitae. Aut sequi sint fugiat provident. Et eos assumenda reprehenderit. Rem consequatur neque et consequatur omnis mollitia odit.'),
(147, 47, 47, '1997-08-21', 5, 'Ipsam nobis enim voluptate ipsa. Quasi similique sunt error voluptatum. Maiores a voluptates aut deserunt doloremque. Ut molestiae ullam nulla soluta quia maxime culpa. Corrupti vitae earum et aspernatur quod rerum cupiditate. Praesentium rerum expedita e'),
(148, 48, 48, '1980-01-10', 3, 'Dolorem rerum accusantium dolores minima vel sit. Deserunt non nihil ipsam quam veritatis. Et quas dolorem alias voluptatum. Aut neque ut excepturi quisquam aspernatur et eius numquam.'),
(149, 49, 49, '1977-03-01', 1, 'Quis dolorem labore quasi officia excepturi ducimus. Ducimus nostrum nihil ratione qui corporis. Ut molestiae consequatur expedita dolorem voluptatem qui ut. Saepe corporis harum earum voluptatem cupiditate.'),
(150, 50, 50, '1993-05-09', 4, 'Maxime sed porro pariatur. Et voluptas qui quisquam placeat iste accusamus. Est modi est incidunt totam fuga occaecati quia. Neque illo adipisci aperiam illo recusandae. Eius beatae consequatur quaerat voluptatem esse aspernatur et eum.'),
(151, 51, 1, '1995-12-29', 3, 'Sapiente sint omnis iste quidem tempora ipsa esse. Autem animi labore modi magni neque sequi. Qui numquam labore ratione a repellendus temporibus totam. Adipisci id optio eos esse est tempore. Quidem recusandae excepturi architecto expedita cum optio aute'),
(152, 52, 2, '2018-11-09', 3, 'Dignissimos corporis dolorem totam quis qui. Aut eum aliquid dolor ipsa suscipit sed. Minima facilis sit sit ut. Et tenetur laboriosam sed consequatur sed est.'),
(153, 53, 3, '2000-05-13', 2, 'Dolor omnis fugit tempore id. Dignissimos eaque debitis fugiat doloremque. Vel eius repellat est odio. Doloribus atque rerum aut sint harum culpa aut.'),
(154, 54, 4, '2008-06-18', 2, 'Iusto quae rerum placeat earum repudiandae illo. Eveniet ut ex voluptatem architecto. Nostrum et ut tenetur soluta. Veniam officia cupiditate autem minus et illum.'),
(155, 55, 5, '1986-01-17', 5, 'Voluptatum optio neque quas alias. Sit nam et deleniti molestias nobis. Et nemo consequatur soluta mollitia.'),
(156, 56, 6, '1972-05-11', 2, 'Quis et enim dignissimos architecto possimus ea incidunt officia. Rerum possimus voluptate consectetur. Sunt facilis rerum modi quia est qui suscipit quis.'),
(157, 57, 7, '2021-11-04', 3, 'Vel accusantium explicabo consectetur non omnis. Eum qui autem ipsum ut facilis laboriosam. Ut non voluptates odit repellat perferendis. Fuga culpa ratione perferendis.'),
(158, 58, 8, '2022-08-18', 3, 'Aut ipsam aliquid qui cupiditate et sit pariatur exercitationem. Quidem et nostrum eius deleniti non aut ad. Animi dolorem vel ullam eum. Consequatur inventore odit cum.'),
(159, 59, 9, '2002-06-10', 5, 'Nesciunt dolores enim ad quaerat quis. Autem aliquam inventore adipisci sunt itaque. Suscipit ex numquam deserunt consequuntur beatae. Nihil eveniet dignissimos et asperiores et et voluptates dolore.'),
(160, 60, 10, '2002-03-08', 4, 'Quisquam laudantium architecto reprehenderit sit rerum voluptatibus fugit. Nisi pariatur iste maiores impedit doloribus est ut soluta. Ut repellendus voluptas est rerum. Qui nemo alias facilis assumenda inventore. Magni suscipit sint et sunt.'),
(161, 61, 11, '2003-05-05', 2, 'Nulla sed atque est ab ex molestias natus. Reiciendis est aliquam necessitatibus provident ab vel deleniti. Voluptatem iure voluptatem nihil libero blanditiis. Architecto et impedit nihil dolores quo. Velit molestias et adipisci corporis quod aspernatur. '),
(162, 62, 12, '1971-12-24', 1, 'Odio blanditiis asperiores et perspiciatis. Aut expedita rem molestiae quo. In quo qui qui consequatur maiores molestias.'),
(163, 63, 13, '2013-12-10', 1, 'Dolores eos ut itaque numquam mollitia. Eaque voluptatum provident cum soluta. Ad tempora repellat nam. Ducimus est recusandae quo est.'),
(164, 64, 14, '2012-03-08', 4, 'Nemo aperiam laboriosam delectus nesciunt modi totam adipisci. Modi et libero provident repudiandae vel sit maxime. Esse asperiores accusamus debitis atque fugit alias at quo. Est dolorem optio minima doloremque sit iure. Harum eveniet vitae aut nostrum e'),
(165, 65, 15, '2016-05-24', 3, 'Ut aliquid minima aperiam. Repudiandae voluptatem quibusdam enim ullam quasi. Doloribus quasi ut magnam. Placeat deserunt velit reprehenderit saepe. Blanditiis eius labore in quia.'),
(166, 66, 16, '2014-11-16', 1, 'Quo incidunt eligendi deleniti quia quas ipsa sed. Vel quidem aut debitis quidem omnis corporis consequuntur. Accusamus voluptatibus amet tenetur reprehenderit.'),
(167, 67, 17, '1988-06-27', 4, 'Dolores voluptas delectus et voluptatem. Animi placeat molestias sed beatae possimus. Rem dolores corporis dignissimos eos. Sed eligendi praesentium laborum pariatur inventore possimus. Qui nam minus id incidunt enim sit.'),
(168, 68, 18, '1985-05-20', 2, 'Molestiae delectus non quisquam modi sunt in. Deserunt et harum explicabo similique illo neque architecto voluptatem. Velit tenetur aperiam totam quia amet autem consequatur. Corrupti praesentium facere pariatur dolore sunt. Eaque cumque ipsam enim.'),
(169, 69, 19, '2010-05-10', 3, 'Ut blanditiis doloribus deserunt sapiente quia. Cupiditate aut nisi et repellendus. Quas voluptas placeat in et ducimus et. Molestias possimus sapiente nostrum officia natus aut voluptas magnam. Debitis aut totam est.'),
(170, 70, 20, '2010-05-24', 2, 'Aut consequatur sint ut error dolores in soluta. Beatae error laboriosam distinctio saepe. Ab quas aspernatur quasi dolore omnis. Enim quisquam earum sed harum suscipit.'),
(171, 71, 21, '1981-02-22', 5, 'Omnis dolor placeat dicta corporis consectetur non accusamus eum. Enim laboriosam voluptatem dignissimos. Sit aut ea ea iste accusamus. Vel sequi minima accusamus eos officiis cum dicta.'),
(172, 72, 22, '2010-07-17', 5, 'Veritatis non maxime quia dolores ea qui. Aut officia aut et harum ut. Mollitia et maxime ea velit cupiditate eaque vel. Voluptatem quis et autem animi odio. Non nobis et maxime ut.'),
(173, 73, 23, '1971-08-21', 3, 'Numquam nesciunt et sed. Rerum vero unde a illo tenetur deleniti. Id sit voluptate asperiores nam quis vitae et eveniet. Ut aperiam illo qui natus reprehenderit cumque voluptatem error. Iste eaque tempore nobis.'),
(174, 74, 24, '2006-10-24', 0, 'Natus sed dolorum voluptatibus consequatur. Rem nisi expedita enim aliquid est suscipit et. Odio dicta praesentium iste. Aliquid eaque sint eum placeat a unde. Voluptas optio maxime quia architecto.'),
(175, 75, 25, '1977-11-17', 4, 'Omnis non quibusdam officiis asperiores sint repudiandae voluptate. Voluptatum sint fugit reiciendis maxime eos. Asperiores accusantium est reprehenderit eum qui deserunt atque labore.'),
(176, 76, 26, '1970-03-22', 3, 'Sit reiciendis tempore alias fuga. Dolore vero ab illum possimus at suscipit. Corporis sit in sequi eius sint qui et voluptatem. Velit accusantium qui officia esse. Quas eum libero est atque adipisci. Maiores unde tempora ut non repellendus nulla.'),
(177, 77, 27, '2013-06-25', 1, 'Ut tempore inventore a aut nesciunt rem. Eos earum sed non veniam magnam non sit. Ut et aperiam non itaque. Incidunt qui culpa temporibus est dolores quia tenetur provident.'),
(178, 78, 28, '1976-08-14', 1, 'Unde non rerum aut pariatur ut consequatur sapiente assumenda. Ut et dolorum veniam officiis et in non. Qui culpa aut quos veritatis. Voluptatem reiciendis excepturi doloremque impedit repellat. Ut reprehenderit dolore alias deserunt.'),
(179, 79, 29, '1982-01-20', 2, 'Voluptas nobis similique voluptate fuga aut omnis fugiat. Itaque sit fugiat aut quos dolor et soluta. Distinctio qui et deserunt aut. Quidem maiores ipsam perspiciatis voluptatem repudiandae et molestias.'),
(180, 80, 30, '1987-11-16', 3, 'Sit dolorum quo alias sed qui in suscipit. Sit dolorem harum asperiores doloremque hic quia. Autem dignissimos facilis corrupti facere aliquid.'),
(181, 81, 31, '2008-03-20', 5, 'Praesentium voluptate quia perferendis. Omnis voluptate sint vel assumenda. Sed est temporibus asperiores amet sit. Voluptas omnis dolorem quia explicabo quisquam perspiciatis pariatur. Ipsa minus et atque distinctio omnis.'),
(182, 82, 32, '1996-05-17', 1, 'Neque ea consectetur tenetur unde eos asperiores. Deserunt unde et qui doloremque voluptatum. Odio laudantium magnam aut voluptatem. Libero quas atque molestiae reprehenderit excepturi nobis.'),
(183, 83, 33, '1975-02-03', 1, 'Sunt molestiae itaque dicta perferendis nostrum. Et quis amet sit vero amet. Quaerat dolorum in et esse ipsam reprehenderit. Voluptas id eius et nam.'),
(184, 84, 34, '1993-12-11', 1, 'Et quod recusandae quam debitis laboriosam officia facere. Est dolorum est rerum et dolores voluptas praesentium sapiente. Incidunt et sit doloremque labore rem aut ut adipisci. Impedit explicabo ea asperiores. Qui dicta ab enim est voluptatem. Consequunt'),
(185, 85, 35, '2003-04-12', 4, 'Autem necessitatibus soluta asperiores fugiat veritatis expedita quod. Dolorum et facilis ut omnis et atque sequi. Recusandae tempore suscipit ab dolores quo sunt sit.'),
(186, 86, 36, '1970-01-09', 1, 'Aut earum esse enim consequatur maxime expedita. Quia cumque sit architecto fuga veniam. Vero reiciendis natus provident. Aliquam minus perferendis animi.'),
(187, 87, 37, '2005-01-25', 1, 'Magnam fuga quisquam vitae et eius sapiente. Exercitationem quaerat eum porro pariatur. Error sint quidem blanditiis et. Sapiente beatae aliquid doloribus impedit neque aut.'),
(188, 88, 38, '1976-04-12', 3, 'Officiis ut rerum adipisci aliquid voluptas ut. Ratione et facere mollitia tempore unde molestias. Et sed ut laborum deserunt eveniet minima est. Aut ut facere sapiente sapiente. Nulla autem similique vitae repellendus.'),
(189, 89, 39, '1996-10-16', 4, 'Dignissimos voluptatem rerum eligendi impedit distinctio eos. Qui consequatur ut sed beatae. Vel aut voluptates quia totam hic labore ipsam. Tempora beatae qui fuga similique consequatur quia.'),
(190, 90, 40, '1991-12-24', 5, 'Quis non est ea esse quasi autem odio. Qui excepturi ipsa architecto corporis voluptate dolorem at. Iste doloremque iure rerum dicta modi. Sit qui quaerat provident aperiam sunt minus molestiae. Quidem fugiat et ut labore placeat rerum ipsum in. Maxime qu'),
(191, 91, 41, '1998-11-30', 3, 'Quis sed minima iusto ea iusto neque. Vel tenetur harum neque illo in qui. Et quibusdam accusantium quod odit accusantium voluptatem. Molestiae voluptatibus est omnis voluptatem praesentium.'),
(192, 92, 42, '2016-06-27', 5, 'Consequatur quod reprehenderit mollitia ratione. Dolorem aperiam odit odio possimus. Eveniet non dolores excepturi ex. Reprehenderit et laborum delectus aspernatur dolorum vel quod. Non ad magnam fugiat natus numquam sequi atque. Autem adipisci necessitat'),
(193, 93, 43, '2019-07-07', 5, 'Recusandae vel et incidunt et rerum. Voluptatibus ex doloremque ut distinctio optio. Est voluptatem a est aperiam.'),
(194, 94, 44, '1997-04-19', 2, 'Excepturi voluptatem molestiae itaque nulla ullam ad. Quibusdam recusandae ipsam quo quae quia et voluptatem minima. Omnis sequi aut earum quasi maxime aut quis. Dolor voluptatum voluptas quam deserunt. Aut eum expedita nostrum nihil suscipit.'),
(195, 95, 45, '2002-06-27', 2, 'Reiciendis reiciendis quasi fugiat quod consequatur porro eveniet. Error aliquid dolore aut et. Modi ut rem odit beatae architecto consequatur. Aperiam qui molestiae officiis sunt provident nemo iure. Dolorem repellat ipsa ullam voluptas ducimus beatae. Q'),
(196, 96, 46, '2007-04-12', 4, 'Natus eius corporis qui facilis ut aut sed. Id tempore voluptatem qui saepe laudantium commodi quod eveniet. Ut qui optio quos voluptas consectetur et vel. Et sit quo dolor numquam laudantium.'),
(197, 97, 47, '2021-01-16', 0, 'Nostrum et culpa repellat quo aspernatur fuga. Modi autem aut facilis consectetur tempore. Minima nesciunt consequatur facere consequatur temporibus ratione saepe voluptate. Ipsum eum quas sed voluptas.'),
(198, 98, 48, '1991-02-27', 0, 'Nihil dolorem qui possimus facere. Numquam fugit incidunt quo voluptatem praesentium eveniet minima. Nam occaecati fuga unde impedit debitis porro. Excepturi quod quibusdam enim esse voluptatem esse. Facilis repellendus architecto ipsa et.'),
(199, 99, 49, '2009-03-13', 2, 'Est blanditiis eos hic doloremque. Quasi et non est non. Similique ipsam architecto non ullam fuga. Beatae quo non quis voluptatem. Facilis sunt ut qui nostrum provident vitae harum. Perspiciatis reprehenderit eius vel eius nihil.'),
(200, 100, 50, '1992-10-05', 3, 'Aliquid dolorem nihil error. Quod et nam dignissimos rerum incidunt neque. Aut quia voluptatem corporis fuga aut et. Qui illum iste explicabo fugiat.'),
(201, 1, 1, '2015-01-29', 2, 'Quia consectetur rerum sed suscipit. Molestiae sequi sint dolor laborum. Et laborum non omnis. Ipsa ratione quis adipisci ut fugit. Aut fuga sint id placeat. Qui voluptas explicabo expedita temporibus velit libero quae.'),
(202, 2, 2, '2014-09-02', 4, 'Voluptas deserunt sit quibusdam officiis enim. Possimus nostrum maiores incidunt ab fugit. Ullam fuga illo rem tenetur. Laboriosam mollitia sunt molestiae qui deserunt esse omnis. In eum eaque officiis impedit.'),
(203, 3, 3, '1991-11-25', 4, 'Et aut harum error quia ullam veniam nulla soluta. Fuga velit quo ut quibusdam. Quia quis facere non dignissimos. Rerum possimus tempora animi vel consequatur delectus fugiat dolorem. Veritatis vel labore qui quas. Quo voluptate temporibus neque aut delec'),
(204, 4, 4, '2021-11-07', 0, 'Voluptatem et eos qui quidem unde. Repellendus nisi ea totam. Dolor dolores animi reprehenderit minima est velit. Dolores numquam atque autem recusandae quidem omnis. Aut enim laborum fuga voluptatem aut.'),
(205, 5, 5, '2022-08-12', 2, 'Omnis omnis consequuntur ut laboriosam beatae. Est eaque ratione maiores veritatis distinctio. Soluta mollitia voluptatem numquam nobis a provident. Laboriosam maiores sed voluptatem illum odio officiis in consequuntur. Vitae quibusdam ut corporis.'),
(206, 6, 6, '1997-01-11', 4, 'Iure voluptatem praesentium est. Mollitia et temporibus eum ut. Corrupti qui quod maiores quisquam. Quod et minus explicabo quis quis.'),
(207, 7, 7, '1977-01-15', 4, 'Exercitationem earum et occaecati. Sit quisquam et aut dolores dolor quod sint. Quisquam vel id cupiditate. Hic accusamus quos et. Maxime quod minima impedit rerum non velit velit suscipit. Quaerat molestiae ratione qui dolorem at totam eum.'),
(208, 8, 8, '1970-10-26', 2, 'Earum sit repellat veniam vitae. Vel ab sit neque error quis. Et molestiae et autem incidunt temporibus. Magni quae occaecati accusamus numquam aut.'),
(209, 9, 9, '2019-07-14', 5, 'Repellendus minima aliquam nisi debitis expedita consectetur dolores. Nulla corrupti molestias amet amet voluptatem atque. Iure odio quam ut blanditiis maiores corrupti optio. Non numquam adipisci corporis eius maxime eos. Possimus dolores assumenda rerum'),
(210, 10, 10, '2007-10-06', 0, 'Culpa hic dolores quam fuga aliquid quod. Suscipit veritatis delectus debitis alias atque iure. Repellendus autem consectetur eos sed ut. Pariatur et harum illo.'),
(211, 11, 11, '1994-02-19', 2, 'Animi aut aliquam molestiae repellat unde. Non et officiis corporis et. Assumenda occaecati sit velit quia. Velit delectus voluptatem quibusdam asperiores id.'),
(212, 12, 12, '2016-01-06', 1, 'Odio ea accusamus sed tenetur sapiente quidem quia. Quia sit non et qui tenetur. Quis quisquam ut temporibus magnam sed. Officiis neque inventore aut perspiciatis consequuntur.');
INSERT INTO `ProductRating` (`rating_id`, `product_id`, `user_id`, `review_date`, `rating`, `rating_comment`) VALUES
(213, 13, 13, '1974-10-04', 2, 'Harum consequatur enim voluptatem voluptatibus ipsa dolores. Inventore ut necessitatibus quia corrupti totam. Corporis nihil quo ut. Inventore at consequatur magnam ipsam architecto eos dicta. Cumque a velit aspernatur qui eos.'),
(214, 14, 14, '1975-10-17', 2, 'Aut magnam voluptates unde sed similique. Dolorum sunt vel ea et maiores eos. Similique officia repellendus ullam odio quam. Dolores ex ex autem. Sint asperiores ipsum dolores alias enim qui.'),
(215, 15, 15, '1993-02-22', 4, 'Sed tenetur nihil quis odio dolorem provident. Nulla error impedit est vero. Consequuntur nisi architecto vel perspiciatis blanditiis repudiandae. In recusandae enim veniam neque molestias blanditiis vero. Perspiciatis ducimus omnis quia quisquam.'),
(216, 16, 16, '2020-12-31', 1, 'Sed consectetur eum ipsam et non. Nobis adipisci aut quod aut. Quasi magnam aliquid explicabo minus illum occaecati. Voluptatem quidem exercitationem temporibus cum et. A soluta et rerum veritatis laudantium aut sequi et.'),
(217, 17, 17, '1971-03-28', 1, 'Itaque molestiae et et quibusdam suscipit. Consectetur dicta deleniti debitis ipsa doloremque quae. Molestiae dolorem provident assumenda architecto. Reiciendis ad quasi ullam soluta nihil quis totam. Consequuntur dignissimos aliquam iure adipisci et.'),
(218, 18, 18, '2023-02-08', 4, 'Laboriosam possimus dolores delectus repudiandae veritatis nihil. Quibusdam quis temporibus et. Assumenda reprehenderit architecto sint est. Consectetur nihil voluptatum temporibus voluptatibus praesentium.'),
(219, 19, 19, '2008-06-19', 3, 'Impedit fugit voluptate omnis repudiandae non omnis nesciunt dolorem. Dolores beatae sed cupiditate aliquam dolores labore. Fugit eaque accusantium illo doloribus corrupti vel. Velit nesciunt fugiat perferendis voluptatibus.'),
(220, 20, 20, '1992-01-22', 1, 'Quia dolorem sequi harum eos incidunt voluptates rerum. Omnis est et veritatis. Adipisci consequatur dolores quidem voluptas ipsa at.'),
(221, 21, 21, '1991-04-09', 4, 'Sequi voluptates molestiae nobis. Quis rem sed est velit. Beatae vero sunt aut adipisci tempore dicta qui. Esse ut est recusandae exercitationem mollitia. Quae delectus non est repellat voluptatem nihil natus. Veritatis sit ut labore ut autem fugit accusa'),
(222, 22, 22, '2000-08-19', 5, 'Omnis minus expedita amet aut ut id. Vero quia aut sint laborum. Non sequi vel amet maxime commodi sit.'),
(223, 23, 23, '1985-04-29', 0, 'Cupiditate vitae voluptatem itaque eum tempore. Quo sit qui at eius excepturi voluptatem optio. Natus magni deleniti ut deserunt. Iusto eius molestiae rem.'),
(224, 24, 24, '2008-03-07', 2, 'Eligendi corporis enim deleniti architecto reprehenderit dolorem doloremque similique. Minima quis dolores quisquam ut. Assumenda et rerum deleniti quod eligendi.'),
(225, 25, 25, '2003-08-17', 2, 'Autem esse architecto vero repellendus hic eligendi atque. Error consectetur quo modi rerum voluptas. Vel voluptatem eum itaque optio corrupti assumenda. Ut quis consequatur ut qui dolorem. Exercitationem repudiandae blanditiis ipsam.'),
(226, 26, 26, '1996-05-10', 0, 'Aut fugit quaerat voluptate reiciendis. Unde ut et accusamus autem harum vero aliquid. Sunt amet tempore iusto quidem velit facilis corporis.'),
(227, 27, 27, '1972-01-25', 3, 'Doloribus id molestiae eum reiciendis quo. Repudiandae quo dolorem qui rerum aut. Soluta libero similique velit repellendus ut doloribus non. Fugiat voluptates neque omnis deleniti aut ut. Architecto quidem saepe et voluptatem. Eius non ea magnam ea nihil'),
(228, 28, 28, '1986-06-30', 5, 'Cumque id provident sunt recusandae facere qui accusamus. Quae dolores sit et ratione minima. Ipsa accusamus sunt recusandae veritatis quia. Quia libero sed ratione esse magni aspernatur veritatis quo.'),
(229, 29, 29, '1973-07-15', 1, 'Sunt ut totam quisquam molestiae enim non. Quia esse pariatur et quam. Quasi accusantium quis quis fugiat tenetur exercitationem veniam.'),
(230, 30, 30, '1986-01-25', 5, 'In deleniti ut quibusdam. Labore reprehenderit provident et natus reiciendis. Consequatur vel cupiditate harum. Non exercitationem omnis rerum voluptatem nostrum. Ut qui et optio culpa autem et. Repellat fugit mollitia excepturi.'),
(231, 31, 31, '1970-12-16', 3, 'Dolores itaque velit ut temporibus eaque omnis ullam. Temporibus voluptatum voluptatem non asperiores ad omnis. Exercitationem corporis omnis quis expedita odio. Cupiditate veritatis quis quod sint vero incidunt distinctio iusto.'),
(232, 32, 32, '2009-03-10', 2, 'Cupiditate consequatur quia laboriosam. Et suscipit sint incidunt. Animi culpa neque ex. A sit quasi rerum et.'),
(233, 33, 33, '1977-04-11', 0, 'Labore enim et sint animi nisi magni nesciunt. Voluptatum cupiditate saepe qui repellendus. Et voluptas perspiciatis libero at eos vel nihil. Tenetur sed culpa necessitatibus omnis nam. Consequuntur est repellat eum et dolores repudiandae.'),
(234, 34, 34, '2016-12-19', 4, 'Laborum beatae excepturi ex veniam. Molestiae rerum asperiores odio unde reprehenderit est. Eos quae accusantium nulla vel velit atque. Nihil facere et consequatur vel. Cumque itaque repellat est aspernatur asperiores odio suscipit.'),
(235, 35, 35, '1996-10-12', 1, 'Quisquam quae eos dolor labore. Ad suscipit rerum autem hic quo similique quis. Aut odio quis deserunt velit omnis quisquam quia.'),
(236, 36, 36, '1991-05-09', 1, 'Sit quae quae reiciendis provident. Illum aut dolorem occaecati error saepe facilis reiciendis. Dicta harum est est similique et. Aut excepturi sit est sequi cumque assumenda. Harum modi nemo aspernatur veniam facilis esse velit. Asperiores amet sapiente '),
(237, 37, 37, '2021-07-24', 2, 'Dolorem laboriosam non tenetur nemo perspiciatis. Aut explicabo aut quia facere dicta velit ratione. Natus aut occaecati quos dolorem non quibusdam. Eos optio dignissimos est hic quia.'),
(238, 38, 38, '1974-09-24', 4, 'Dicta earum nostrum assumenda. Doloremque repellat et accusamus et reprehenderit possimus illum. Dignissimos exercitationem sunt sunt et adipisci totam. Quia qui reprehenderit minima est id dolor illum. Ut nisi molestiae itaque molestiae voluptate.'),
(239, 39, 39, '2013-08-14', 3, 'In iure est vitae qui. Nulla enim labore suscipit adipisci fuga explicabo modi. Quia qui voluptatum tempore nam iste quis dolores. Rerum adipisci quo explicabo voluptate. Libero iure possimus eum. Cupiditate nemo reprehenderit quo optio sint.'),
(240, 40, 40, '2009-07-18', 2, 'Et accusamus aut placeat commodi. Eaque natus minus et ut. Quaerat quidem laudantium porro. Maiores aut porro culpa quasi. Debitis illum quia molestias autem et facilis. Iste vel et illo et.'),
(241, 41, 41, '2018-06-19', 2, 'Voluptatum sunt similique et id. Asperiores delectus qui optio occaecati itaque voluptatem. Illo eius voluptas voluptatibus ut quaerat quae accusantium. Sit dicta cupiditate alias consequatur ullam voluptatem laudantium officia. Et cum aut dignissimos dol'),
(242, 42, 42, '1978-09-08', 0, 'Dicta et sed beatae eos quidem et est. Dolor sed ea at. Laboriosam ea voluptatem pariatur voluptatibus itaque soluta voluptas eos.'),
(243, 43, 43, '1986-09-11', 5, 'Ex dolorem est quia dolor. Beatae et quo dicta quia at saepe ab. Dolorem facere similique vero numquam.'),
(244, 44, 44, '1996-03-12', 2, 'Aliquam recusandae nobis quaerat voluptate labore. Quos veniam autem aut aliquid natus sit et. Officia id est sunt dignissimos nesciunt dolore exercitationem.'),
(245, 45, 45, '2014-04-02', 4, 'Esse eaque molestias explicabo dolores. Ut unde nihil eaque. Non ullam ad expedita ut officiis a ut. Ea est quia non cupiditate alias fuga. Et magnam qui quia. Est incidunt omnis delectus rerum rerum.'),
(246, 46, 46, '1981-06-07', 5, 'Odit facere laborum deleniti rerum. Deserunt est fugit explicabo ea officia cupiditate aliquid. A expedita fugit illo excepturi.'),
(247, 47, 47, '2018-10-07', 1, 'Voluptas dolorem nam odio sapiente. Dolorem officia et non aspernatur nulla. Nisi enim voluptates asperiores voluptatem non ut porro. Nobis accusantium harum est voluptatum repellendus voluptates.'),
(248, 48, 48, '2001-10-27', 0, 'Nam est quia quis eos. Eligendi debitis suscipit eum corrupti. Dolores facere aliquid quaerat eius atque hic recusandae.'),
(249, 49, 49, '2015-08-05', 4, 'Nam aut sed sapiente repellendus explicabo et. Maxime illo iste illo vel. Qui nemo excepturi occaecati enim. Error nihil aut voluptatibus omnis occaecati nobis qui. Non nihil rerum qui.'),
(250, 50, 50, '1970-11-15', 0, 'Voluptas earum et aut voluptatem voluptatem est. Dolor aut et sit aspernatur. Exercitationem adipisci necessitatibus repellendus vel enim quae.'),
(251, 51, 1, '2008-02-07', 4, 'Doloremque sed quis corrupti neque laudantium sapiente. Qui earum dolor est magnam ut labore libero. Magni praesentium dicta aut non. Rerum dolorum voluptas enim ab. Aut aut voluptatum voluptatem ex.'),
(252, 52, 2, '2013-12-09', 0, 'Aut laboriosam numquam aspernatur iure fugiat rem. Nihil occaecati iure aspernatur quidem. Aut illum et impedit architecto. Asperiores dolor voluptates quod et aspernatur minus.'),
(253, 53, 3, '1992-09-13', 4, 'Dignissimos eaque fuga et alias voluptatibus iure. Autem quos eum aliquid iusto dolorum dolor. Quia cupiditate qui aut nisi fugit debitis. Id quo pariatur incidunt minima atque iusto sint. Excepturi voluptas voluptas possimus corrupti dolorem. Quis ut nob'),
(254, 54, 4, '2010-07-02', 3, 'Quos officiis dolor quod iste porro. Praesentium maiores quam omnis. Sequi fugiat sunt rem qui hic odit necessitatibus.'),
(255, 55, 5, '1976-11-06', 3, 'Harum voluptas delectus ut in qui totam natus. Cum ea in voluptas et. Vel in et esse fugit minus ut. Sed dolorum eum labore. Quam autem omnis dolorum ut nam.'),
(256, 56, 6, '1991-10-05', 4, 'Non ducimus sed enim ut et. Et sunt vitae consequatur ullam nihil esse. Qui id ratione neque quod eos vitae. Asperiores eius et minima eum consequatur accusantium.'),
(257, 57, 7, '1997-01-08', 5, 'Optio eos autem nesciunt laboriosam illo. Ut quaerat voluptas provident et. Beatae aspernatur sint unde est vero voluptas vel fugit. Praesentium nisi aliquam totam eos vel.'),
(258, 58, 8, '1981-09-14', 3, 'Velit saepe aliquam delectus nisi eveniet ipsam sunt. Deserunt ducimus tempora ex at id culpa blanditiis. Molestias ut recusandae reprehenderit et qui deleniti.'),
(259, 59, 9, '2013-07-10', 4, 'Perspiciatis sequi repellendus commodi. Nostrum exercitationem necessitatibus nobis quibusdam recusandae. In veritatis vel ut in. Aut voluptatem et ex aut rem voluptas sit. Ducimus corporis velit vero labore molestiae suscipit quia. Et cupiditate soluta s'),
(260, 60, 10, '2018-12-19', 1, 'Eos velit doloremque voluptatem quibusdam et. Aliquam pariatur voluptas voluptatibus voluptas explicabo quos ratione occaecati. Officiis pariatur minima dolores veritatis.'),
(261, 61, 11, '2015-08-07', 5, 'Rerum voluptatem autem quia eos eum ullam et. Vel in mollitia est quidem esse. Unde beatae rerum omnis voluptatem officiis placeat facere. Architecto aut quisquam repellat non ducimus facere. Sunt modi veniam unde ea.'),
(262, 62, 12, '2024-06-19', 2, 'Eos veritatis laudantium recusandae eos. Ad architecto eum quod qui ipsam ut. Pariatur ut veniam aliquid sit omnis ducimus. Voluptatem error facilis at. Dolores ipsa omnis omnis et voluptatem aut ut. Sint sed et aut qui voluptatem est.'),
(263, 63, 13, '1980-01-19', 2, 'Nihil natus ut expedita corrupti fuga. Quaerat a asperiores quidem nam qui autem. Enim rerum adipisci explicabo doloremque. Fuga enim voluptatum ad iure ex aut eius. Quam molestiae enim dolorem qui eaque. Ut voluptas repudiandae est porro.'),
(264, 64, 14, '2003-12-30', 1, 'Beatae quod non explicabo deleniti. Cupiditate consequatur expedita aut aut tenetur. Saepe aliquid nihil quasi quaerat laudantium tenetur tempora. Et velit perferendis sint.'),
(265, 65, 15, '1987-01-26', 4, 'Nulla ipsum sed eum voluptatem laboriosam et quia enim. Libero laudantium hic rem itaque quas unde accusantium. Quia dicta reprehenderit quis corrupti voluptas qui nihil. Omnis voluptate consequatur et.'),
(266, 66, 16, '2003-02-15', 4, 'Deserunt temporibus nemo voluptas quidem. Et harum exercitationem ipsam quae officia dicta. Incidunt sapiente eligendi mollitia nisi dolores commodi deleniti. Aperiam cumque occaecati et maiores repudiandae earum. Cum magni iure suscipit reprehenderit quo'),
(267, 67, 17, '2009-08-12', 3, 'Voluptatum beatae doloribus voluptatibus temporibus officiis natus dolorem. Nostrum rem dolorem suscipit qui voluptate. Ea sunt atque voluptatem. Numquam in eligendi autem esse.'),
(268, 68, 18, '1970-08-04', 3, 'Animi placeat nobis at dicta corrupti maxime. Eveniet eaque pariatur qui. Nostrum tempora mollitia enim ipsum saepe quia.'),
(269, 69, 19, '2006-03-31', 4, 'A et harum repudiandae numquam perferendis earum et. Velit nihil nemo sunt delectus. Porro blanditiis quaerat voluptatum et veniam iste architecto corporis. Et provident veniam tenetur dolorem.'),
(270, 70, 20, '2020-02-08', 5, 'Ex at ipsa ea iusto. Dolor tempora sunt voluptate hic quia praesentium. Ratione aut rerum nam amet at quos. Praesentium ipsa reprehenderit nemo laudantium. Aut dolorem recusandae voluptas.'),
(271, 71, 21, '2013-12-16', 5, 'Illum fugiat nostrum est laboriosam rerum. Ad molestiae architecto ut similique. Autem aut magnam doloribus rerum. Alias repudiandae non nihil vel voluptatum aut. Pariatur vel ipsum mollitia quis deserunt saepe.'),
(272, 72, 22, '2006-02-02', 3, 'Praesentium qui quis et repudiandae in molestias delectus. Nostrum doloribus ut ducimus dolorem. Unde sapiente et voluptatem eos qui. Voluptatem sint nostrum autem odit et accusantium. Aut molestiae officiis non. Necessitatibus eligendi ut eum aliquam fug'),
(273, 73, 23, '1981-02-16', 4, 'Minus non culpa et modi accusantium quisquam. Ipsam vero eum dolore fugit mollitia modi ea est. Suscipit maiores autem libero qui. Rerum optio soluta qui soluta et. Sapiente ea corporis in.'),
(274, 74, 24, '1986-12-16', 4, 'Deleniti sed in omnis illo consectetur inventore. Hic sapiente ut ab distinctio. Nulla dolorum illum dolore ab sunt. Quaerat qui natus eos recusandae dolores. Doloribus molestiae quia non voluptatem.'),
(275, 75, 25, '2006-03-27', 4, 'Soluta et laudantium quidem quia aut mollitia sunt. Tempore minima quo laudantium tenetur et laborum minus. Omnis incidunt et rerum asperiores.'),
(276, 76, 26, '1993-03-14', 1, 'Iure velit aperiam a et et et. Omnis rerum autem quis praesentium ducimus est. Omnis dolor molestias illo. Fugiat fugit officiis animi minus minima. Ab reprehenderit quibusdam ut dolor.'),
(277, 77, 27, '1987-04-22', 0, 'Molestiae aut culpa quia ut non nihil. Animi id aut tempora optio. Eveniet rerum et reiciendis impedit. Culpa omnis dolorem quia amet pariatur praesentium.'),
(278, 78, 28, '2000-11-28', 4, 'Quo labore porro perspiciatis soluta. Est commodi eum sed odio ad quaerat. Placeat sapiente dignissimos sequi numquam.'),
(279, 79, 29, '1976-08-22', 4, 'Voluptatum aspernatur aperiam at rem quaerat nostrum deserunt deleniti. Qui assumenda facilis autem harum commodi sint quos. Quasi sit exercitationem quas. Impedit et magni velit.'),
(280, 80, 30, '2020-11-29', 0, 'Id dolores et voluptatem necessitatibus. Excepturi voluptatum quidem aperiam laboriosam maiores. Omnis impedit ut quia ullam doloremque eos assumenda. Suscipit maxime ut et similique dolor voluptate molestiae. Quia nemo necessitatibus repellat repellendus'),
(281, 81, 31, '1974-11-09', 1, 'Placeat laboriosam suscipit optio inventore ut. Quis ipsam labore doloremque velit exercitationem suscipit est. Maxime aliquid at totam adipisci ut soluta aperiam. Nam quo minima in quo qui. Rem est ullam porro voluptas neque et illo. Et et quia sit.'),
(282, 82, 32, '2023-11-18', 5, 'Reprehenderit et iure culpa rem eos et. Quasi harum aliquam quo animi ipsum ut. Sit dicta mollitia necessitatibus at nobis aut porro. Autem ipsa nulla qui ipsam modi dicta. Animi quidem eveniet et voluptas. Quisquam consequatur est necessitatibus sit.'),
(283, 83, 33, '1994-01-27', 2, 'Veniam aperiam eum odit sit. Molestiae nihil dolor mollitia fuga. Sit at rem aut quis itaque vitae dignissimos. Ex voluptatem architecto voluptatem impedit aut iure et. Fuga est dolor ducimus. Corrupti distinctio at tenetur a sit.'),
(284, 84, 34, '1984-01-28', 2, 'Atque sit enim minus facere. Rerum reiciendis omnis labore fuga ad quasi corporis. Ut et rem laudantium ducimus. Vel alias molestiae ipsum maiores ut illum repudiandae. Quisquam ea reprehenderit quam. Accusantium nobis rerum a reprehenderit optio velit su'),
(285, 85, 35, '2009-07-20', 4, 'Dolorem ipsam ut quas quae. Explicabo non quia et a. Perspiciatis est quo quaerat asperiores ut excepturi voluptatum ipsum. Dolorem temporibus veritatis eaque temporibus soluta doloremque laudantium. Voluptatem corrupti atque dolorum assumenda. Vero qui p'),
(286, 86, 36, '2007-06-15', 1, 'Quia recusandae veniam consequatur sunt quisquam. Fugit et repellendus qui id maxime est. Laborum a at libero quam. Consectetur vero est voluptates et inventore. Sapiente culpa qui qui qui. Tempora ex ut quaerat ullam deleniti.'),
(287, 87, 37, '2011-12-12', 4, 'Ullam autem vel exercitationem sed optio nihil qui. Qui qui mollitia commodi et recusandae odio consequatur. Ipsum aut qui aut ut animi. Tempora repellat repellat omnis dolor et accusamus inventore eos. Est est non veritatis soluta sint nobis accusantium.'),
(288, 88, 38, '1995-05-20', 1, 'Veritatis debitis sed voluptatem quo. Mollitia facere sit dicta aut ex. Sunt voluptate ea necessitatibus omnis animi beatae. Officiis quidem est dolorum. Qui vitae quia sit nemo optio labore in.'),
(289, 89, 39, '1978-02-02', 2, 'Est quia id aut maiores vero deserunt. Voluptatem eum id perferendis consequatur dicta eligendi tempora. Numquam voluptas rerum aut aliquid. Cumque id eius cum quaerat vel eos impedit ab.'),
(290, 90, 40, '1993-11-25', 2, 'Nam tempore ipsam distinctio accusamus itaque laborum. Sit similique eius sed ut animi. Facere cumque qui ut ipsum magnam. Quo nihil itaque doloribus nostrum et modi. Explicabo magnam dolor et.'),
(291, 91, 41, '1970-02-13', 4, 'Et aspernatur rerum dolore. Sequi ut aut nihil qui. Libero eius voluptas praesentium.'),
(292, 92, 42, '2006-04-08', 3, 'Ipsam totam et fuga. Laborum vitae dolorem exercitationem quia qui ut. Consequatur consectetur et id autem. Aut deleniti optio consequatur eum sit qui enim labore.'),
(293, 93, 43, '1973-04-27', 1, 'Quas commodi voluptatem ut a. Illum nisi blanditiis minima est debitis qui. Ad voluptatem sequi corporis illo et qui. Nesciunt a velit ex molestias iusto. Aut ut exercitationem tenetur omnis temporibus sit. Tenetur deleniti veritatis officia dolorum.'),
(294, 94, 44, '1989-05-19', 4, 'Repellat at autem iure sunt et reprehenderit. Quis quidem officiis illo ut odio maxime quia. Pariatur voluptate fuga dolorum odit eaque at. Consequuntur ducimus eum asperiores praesentium aut. Omnis voluptas nesciunt ut. Non asperiores error similique nob'),
(295, 95, 45, '2002-12-07', 3, 'Hic enim aspernatur ad maxime laboriosam. Magnam illum dolorem necessitatibus in aperiam. Impedit nesciunt suscipit dolore et alias vitae. Aut sed dolorum incidunt facere rerum.'),
(296, 96, 46, '2020-08-09', 4, 'Quia exercitationem sunt deleniti. Molestias nihil velit illo animi est tenetur. Fugiat praesentium tempore quidem voluptatem quisquam sed voluptas. Doloremque similique nulla aut vitae aut deleniti consequatur.'),
(297, 97, 47, '2023-06-13', 0, 'Voluptatem nostrum voluptatum omnis est iure sed numquam. Excepturi aut quia mollitia. Ut eius quae officia sapiente nihil et. Rerum sint non sapiente vel saepe. Quis impedit non eum dolores animi pariatur.'),
(298, 98, 48, '2018-07-15', 2, 'Omnis ut omnis molestias vero. Incidunt vel molestiae architecto maiores saepe. Illum voluptas maxime aut ipsam perspiciatis. Eum dignissimos dolores eveniet ad.'),
(299, 99, 49, '2007-09-22', 3, 'Dolor occaecati qui sed. Amet voluptas magni itaque. Omnis dignissimos quia quis quasi. Porro aut sequi quis. Eos quo molestiae dolorem ratione et quia.'),
(300, 100, 50, '2008-01-25', 0, 'Sequi rerum ad odio occaecati. Culpa eum ducimus necessitatibus modi ab. Ut tempore corporis architecto animi enim officia. Eum repellendus vel totam a. Eos eaque quas sit aliquam.');

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `price` decimal(21,9) NOT NULL,
  `stock_qty` int(11) NOT NULL,
  `main_category` enum('Skincare','Makeup') NOT NULL DEFAULT 'Skincare',
  `sub_category` enum('Face','Body','Sun','Men','Eyes','Lips') NOT NULL DEFAULT 'Face',
  `date_listed` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`product_id`, `product_name`, `price`, `stock_qty`, `main_category`, `sub_category`, `date_listed`) VALUES
(1, 'Hydrating Gentle Foaming Face Cleanser for Normal to Dry Skin', 31.000000000, 100, 'Skincare', 'Body', '1974-05-07'),
(2, 'Dry Touch Facial Sunscreen - Broad Spectrum SPF 50+', 40.000000000, 123, 'Skincare', 'Sun', '2024-01-12'),
(3, 'ClarinsMen Smooth Shave Foaming Gel', 25.000000000, 99, 'Skincare', 'Men', '1976-08-31'),
(4, 'Blue Orchid Face Treatment Oil', 67.000000000, 90, 'Skincare', 'Face', '2009-04-21'),
(5, 'UV Plus SPF 50 Anti Pollution Face Sunscreen', 46.000000000, 30, 'Skincare', 'Face', '2011-05-16'),
(6, 'Wonder Volume Mascara XXL', 30.000000000, 20, 'Makeup', 'Eyes', '1990-05-11'),
(7, 'Hydra-Essentiel Mask', 39.000000000, 75, 'Skincare', 'Face', '2011-07-19'),
(8, 'Exfoliating Gentle Body-Scrub For Smooth Skin', 43.000000000, 133, 'Skincare', 'Body', '2017-03-07'),
(9, 'Joli Rouge Satin Lipstick', 37.000000000, 73, 'Makeup', 'Lips', '1985-01-11'),
(10, 'Instant Concealer Long Wearing + Crease Free', 35.000000000, 66, 'Makeup', 'Face', '2005-03-30'),
(11, 'Beauty Flash Balm', 52.000000000, 50, 'Makeup', 'Face', '1991-04-23'),
(12, 'Wonder Perfect Mascara 4D', 30.000000000, 94, 'Makeup', 'Eyes', '2014-01-25'),
(13, 'Super Restorative Night Cream - All Skin Types', 142.000000000, 66, 'Skincare', 'Face', '2021-12-03'),
(14, 'Lip Perfector 2-in-1 Lip and Cheek Color Balm', 30.000000000, 80, 'Makeup', 'Lips', '2007-05-27'),
(15, 'Graphik Ink Liner Liquid Eyeliner Pen', 33.000000000, 54, 'Makeup', 'Eyes', '2022-11-22');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` char(255) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `is_active` tinyint(4) DEFAULT 1,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `user_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`user_id`, `username`, `password`, `email`, `is_admin`, `is_active`, `first_name`, `last_name`, `dob`, `phone`, `address`, `user_image`) VALUES
(121, 'bao', '$2y$10$qFXM59mZYq2UGXT1ya3CAe/azVZ6y3up3r8YE20.2t9GAzdcGeL0S', 'baohm88@hotmail.com', 1, 1, 'Bao edited', 'Ha', '2020-01-01', '0988666281', 'Al Ruwais', 'https://res.cloudinary.com/dppk10edk/image/upload/v1728555503/pho_bo_ybx6qj.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Coupons`
--
ALTER TABLE `Coupons`
  ADD PRIMARY KEY (`couponID`);

--
-- Indexes for table `OrderItems`
--
ALTER TABLE `OrderItems`
  ADD PRIMARY KEY (`order_id`,`product_id`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `ProductImages`
--
ALTER TABLE `ProductImages`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `ProductRating`
--
ALTER TABLE `ProductRating`
  ADD PRIMARY KEY (`rating_id`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Coupons`
--
ALTER TABLE `Coupons`
  MODIFY `couponID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- AUTO_INCREMENT for table `ProductImages`
--
ALTER TABLE `ProductImages`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=167;

--
-- AUTO_INCREMENT for table `ProductRating`
--
ALTER TABLE `ProductRating`
  MODIFY `rating_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=301;

--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
