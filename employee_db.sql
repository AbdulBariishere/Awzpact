-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 26, 2020 at 01:03 PM
-- Server version: 5.7.18-log
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `Address_id` int(11) NOT NULL,
  `City_id` int(11) DEFAULT NULL,
  `Employee_id` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `Department_id` enum('government','inhouse','private','overcise') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `City_id` int(11) NOT NULL,
  `City_name` varchar(50) DEFAULT NULL,
  `City_state` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `Employee_id` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Password` varchar(255) NOT NULL,
  `Phone` varchar(20) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Gender` varchar(10) DEFAULT NULL,
  `Status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`Employee_id`, `Name`, `Password`, `Phone`, `Email`, `Gender`, `Status`) VALUES
(1, 'abdul bari', '', '8827905555', 'abdul@gmail.com', 'male', '1'),
(2, 'abdul bari', '', '8827905555', 'abdul@gmail.com', 'male', 'enable'),
(3, 'abdul bari', '', '8827905555', 'abdul@gmail.com', 'male', 'enable'),
(4, 'abdul bari', '', '8827905555', 'abdul@gmail.com', 'male', 'enable'),
(5, 'abdul bari', '', '8827905555', 'abdul@gmail.com', 'male', 'enable'),
(6, 'abdul bari', '', '8827905555', 'abdul@gmail.com', 'male', 'enable'),
(7, 'abdul bari', '', '8827905555', 'abdul@gmail.com', 'male', 'enable'),
(8, 'abdul bari', '', '8827905555', 'abdul@gmail.com', 'male', 'enable'),
(9, 'abdul bari', '', '8827905555', 'abdul@gmail.com', 'male', 'enable'),
(10, 'abdul bari', '', '8827905555', 'abdul@gmail.com', 'male', 'enable'),
(11, 'abdul bari', '', '8827905555', 'abdul@gmail.com', 'male', 'disable'),
(12, 'kashifa', '', '8827905555', 'abdul@gmail.com', 'male', 'disable'),
(13, 'kashifa', '', '8827905555', 'abdul@gmail.com', 'male', 'disable'),
(14, 'kashifa', '', '8827905555', 'abdul@gmail.com', 'male', 'disable'),
(15, 'kashifa', '', '8827905555', 'abdul@gmail.com', 'male', 'disable'),
(16, 'kashifa', '', '8827905555', 'abdul@gmail.com', 'male', 'disable'),
(17, 'kashifa', '', '8827905555', 'abdul@gmail.com', 'male', 'disable'),
(18, 'kashifa', '', '8827905555', 'abdul@gmail.com', 'male', 'disable'),
(19, 'kashifa', '', '8827905555', 'abdul@gmail.com', 'male', 'disable'),
(20, 'kashifa', '', '8827905555', 'abdul@gmail.com', 'male', 'disable'),
(21, 'kashifa', '', '8827905555', 'abdul@gmail.com', 'male', 'disable'),
(22, 'kashifa', '', '8827905555', 'abdul@gmail.com', 'male', 'disable'),
(23, 'kashifa', '', '8827905555', 'abdul@gmail.com', 'male', 'disable'),
(24, 'kashifa', '', '8827905555', 'abdul@gmail.com', 'male', 'disable'),
(25, 'kashifa', '', '8827905555', 'abdul@gmail.com', 'male', 'disable'),
(26, 'full stack', '', '08827905555', 'abdulbariishere@gmail.com', 'Male', 'enable'),
(27, 'admin', 'admin', NULL, NULL, NULL, NULL),
(28, 'admin', 'admin', NULL, NULL, NULL, NULL),
(29, 'google', 'google', '+918827905555', 'abdulbariishere@gmail.com', 'male', 'ui developer'),
(30, 'darakhshan', 'admin', '223233232', 'ab@gmail.com', 'male', 'enable'),
(31, 'admin', '65235', 'admin', '', 'male', 'enable'),
(32, 'ramiz', '123456', '8827905555', 'abdul@gmail.com', 'male', 'status'),
(33, 'ysyugu', 'jdgudhu', '8461845', 'agdd@gmail.com', 'male', ''),
(34, 'ADKHHI', 'JDKJD', '6564841', 'ABDY@GMAIL.COM', 'MALE', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`Address_id`),
  ADD KEY `City_id` (`City_id`),
  ADD KEY `Employee_id` (`Employee_id`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`City_id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`Employee_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `Address_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `City_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `Employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`City_id`) REFERENCES `city` (`City_id`),
  ADD CONSTRAINT `address_ibfk_2` FOREIGN KEY (`City_id`) REFERENCES `city` (`City_id`),
  ADD CONSTRAINT `address_ibfk_3` FOREIGN KEY (`Employee_id`) REFERENCES `employees` (`Employee_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
