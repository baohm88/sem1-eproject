-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 16, 2024 at 04:01 PM
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
(253, 2, 'Dry Touch Facial Sunscreen - Broad Spectrum SPF 50+', 40.000000000, 2),
(253, 14, 'Lip Perfector 2-in-1 Lip and Cheek Color Balm', 30.000000000, 5),
(254, 5, 'UV Plus SPF 50 Anti Pollution Face Sunscreen', 46.000000000, 6),
(254, 9, 'Joli Rouge Satin Lipstick', 37.000000000, 5);

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
(253, 121, 230.000000000, '2024-10-12', 'pending'),
(254, 121, 461.000000000, '2024-10-12', 'pending');

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
(106, 'https://www.clarinsusa.com/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/en_US/dw2a92f871/original/80104492_original_original_B.jpg?sw=680&sh=680', 1),
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
(1, 1, 121, '1976-07-09', 1, 'This serum clogs my pores and causes acne. I wish I had not spent so much on the purchase. I will be requesting a refund'),
(2, 1, 122, '2024-03-18', 3, 'It does make my skin feel really silky smooth. It is a small package. There is no perfume smell to it like most serums. I will buy to try longterm to see how effective it is or just for the silky feeling without and oily residue.'),
(3, 1, 121, '2012-02-28', 4, 'The serum feels luxurious and lightweight upon application, absorbing quickly without leaving any greasy residue.'),
(4, 1, 122, '1979-01-16', 4, 'Absolute fav! Goes on skin like silk and keep it moisturized.');

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_description` text NOT NULL,
  `price` decimal(21,9) NOT NULL,
  `stock_qty` int(11) NOT NULL,
  `main_category` enum('Skincare','Makeup') NOT NULL DEFAULT 'Skincare',
  `sub_category` enum('Face','Body','Sun','Men','Eyes','Lips') NOT NULL DEFAULT 'Face',
  `date_listed` date NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`product_id`, `product_name`, `product_description`, `price`, `stock_qty`, `main_category`, `sub_category`, `date_listed`, `is_active`) VALUES
(1, 'Hydrating Gentle Foaming Face Cleanser for Normal to Dry Skin', 'Moisture-rich, gentle foaming cleanser for normal to dry skin types removes makeup, impurities + boosts hydration for a soft and supple complexion.', 31.000000000, 100, 'Skincare', 'Body', '1974-05-07', 1),
(2, 'Dry Touch Facial Sunscreen - Broad Spectrum SPF 50+', 'A lightweight, dry-touch Broad Spectrum SPF 50+ sunscreen for face that works to filter out UVA/UVB rays, while moisturizing and soothing skin.', 40.000000000, 123, 'Skincare', 'Sun', '2024-01-12', 1),
(3, 'ClarinsMen Smooth Shave Foaming Gel', 'Creamy mousse shave gel delivers a comfortable shave, while soothing and moisturizing the skin.', 25.000000000, 99, 'Skincare', 'Men', '1976-08-31', 1),
(4, 'Blue Orchid Face Treatment Oil', 'Hydrating face oil formulated with 100% plant extracts to help restore radiance, tone and vitality.', 67.000000000, 90, 'Skincare', 'Face', '2009-04-21', 1),
(5, 'UV Plus SPF 50 Anti Pollution Face Sunscreen', 'Daily, oil-free multi-protection UV sunscreen with broad spectrum SPF 50.', 46.000000000, 30, 'Skincare', 'Face', '2011-05-16', 1),
(6, 'Wonder Volume Mascara XXL', 'A volumizing mascara for extra dimensional lashes that look bigger, bolder and twice as thick¹. Swipe on this long-lasting, pitch black formula for 2X the volume¹, 12H¹ smudge-proof wear.', 30.000000000, 20, 'Makeup', 'Eyes', '1990-05-11', 1),
(7, 'Hydra-Essentiel Mask', 'Super-quenching face mask for all skin types powered by exclusive Hyaluronic Power Complex+ to help reinforce skin\'s moisture barrier and provide 24H hydration¹ for skin that is visibly plumped, nourished, and protected.', 39.000000000, 75, 'Skincare', 'Face', '2011-07-19', 1),
(8, 'Exfoliating Gentle Body-Scrub For Smooth Skin', 'Refreshing body scrub that gently exfoliates, softens, and nourishes.', 43.000000000, 133, 'Skincare', 'Body', '2017-03-07', 1),
(9, 'Joli Rouge Satin Lipstick', 'A creamy, satin-finish lipstick that delivers intense color, and extreme comfort in a new eco-friendly, refillable tube.', 37.000000000, 73, 'Makeup', 'Lips', '1985-01-11', 1),
(10, 'Instant Concealer Long Wearing + Crease Free', 'A long-wearing, crease-free concealer that brightens, smoothes, and conceals dark circles and imperfections.', 35.000000000, 66, 'Makeup', 'Face', '2005-03-30', 1),
(11, 'Beauty Flash Balm', 'A multi-tasking balm that instantly moisturizes, visibly brightens, and tightens facial contours so skin looks rested and relaxed.', 52.000000000, 50, 'Makeup', 'Face', '1991-04-23', 1),
(12, 'Wonder Perfect Mascara 4D', 'All-in-one, 4D mascara that takes lashes to bold new dimensions: visibly lengthened, curled, defined and volumized.', 30.000000000, 94, 'Makeup', 'Eyes', '2014-01-25', 1),
(13, 'Super Restorative Night Cream - All Skin Types', 'An anti-aging night cream for mature skin that replenishes, targets wrinkles, visibly improves slackening, boosts radiance, and evens skin tone. Powered by Organic Harungana, as effective as retinol* and gentle on the skin, plus Organic Gorse.', 142.000000000, 66, 'Skincare', 'Face', '2021-12-03', 1),
(14, 'Lip Perfector 2-in-1 Lip and Cheek Color Balm', 'A 2-in-1 balm and highlighter that nourishes and plumps lips with 3D shine while providing a boost of radiance to cheeks for a natural healthy glow.', 30.000000000, 80, 'Makeup', 'Lips', '2007-05-27', 1),
(15, 'Graphik Ink Liner Liquid Eyeliner Pen', 'High-precision liquid eyeliner delivers intense, transfer-proof color.', 33.000000000, 54, 'Makeup', 'Eyes', '2022-11-22', 1);

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
(121, 'bao', '$2y$10$ouBhbdtkf8vHYPU9X6LmxOt9VFGfo4pS0DHngrPZmC9Qs3ar0HdZa', 'baohm88@hotmail.com', 1, 1, 'Bao', 'Ha', '2020-01-01', '0988666281', 'Al Ruwais', 'https://res.cloudinary.com/dppk10edk/image/upload/v1729064893/tl0vqnnzqb4inkgxovjr.jpg'),
(122, 'admin', '$2y$10$RjTF8VkMryp5ymIp1NJp9uMywKSnfo9RwTx.UbbqDyOE8BrhBn8UO', 'admin@gmail.com', 0, 1, 'admin', 'admin', '2020-01-01', '123456789', 'Hanoi', 'https://res.cloudinary.com/dppk10edk/image/upload/v1728749101/my_avatar_jhnlkj.avif');

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
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=255;

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
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
