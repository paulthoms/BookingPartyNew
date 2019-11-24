-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Booking`
--

DROP TABLE IF EXISTS `Booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Booking` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Time` datetime NOT NULL,
  `Member` varchar(45) NOT NULL,
  `Users_ID` int(11) NOT NULL,
  `Restaurant_ID` int(11) NOT NULL,
  `Description` varchar(5000) DEFAULT NULL,
  `Status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`,`Users_ID`,`Restaurant_ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  KEY `fk_Booking_Users_idx` (`Users_ID`),
  KEY `fk_Booking_Restaurant1_idx` (`Restaurant_ID`),
  CONSTRAINT `fk_Booking_Restaurant1` FOREIGN KEY (`Restaurant_ID`) REFERENCES `Restaurant` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Booking_Users` FOREIGN KEY (`Users_ID`) REFERENCES `Users` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Booking`
--

LOCK TABLES `Booking` WRITE;
/*!40000 ALTER TABLE `Booking` DISABLE KEYS */;
INSERT INTO `Booking` VALUES (17,'2019-11-05 12:12:00','5 người lớn và 5 trẻ em',60,11,'Khong uong co ca',0);
/*!40000 ALTER TABLE `Booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Dish`
--

DROP TABLE IF EXISTS `Dish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Dish` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Image` varchar(45) NOT NULL,
  `Cost` varchar(45) NOT NULL,
  `Description` text NOT NULL,
  `Restaurant_ID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  KEY `fk_Dish_Restaurant1_idx` (`Restaurant_ID`),
  CONSTRAINT `fk_Dish_Restaurant1` FOREIGN KEY (`Restaurant_ID`) REFERENCES `Restaurant` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Dish`
--

LOCK TABLES `Dish` WRITE;
/*!40000 ALTER TABLE `Dish` DISABLE KEYS */;
INSERT INTO `Dish` VALUES (27,'Thịt Bò','1574258301840.jpg','40000','Thịt tươi',11),(28,'Tôm','1574258327484.jpg','40000','Tôm Tươi',11),(29,'Tráng Miệng','1574258367485.jpg','10000','Mát lạnh',11),(30,'Đồ uống các loại','1574258412614.jpg','20000','Đồng giá',11);
/*!40000 ALTER TABLE `Dish` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Restaurant`
--

DROP TABLE IF EXISTS `Restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Restaurant` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Type` varchar(45) NOT NULL,
  `Address` varchar(500) NOT NULL,
  `PositionMap` varchar(45) DEFAULT NULL,
  `Image` text,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Name_UNIQUE` (`Name`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Restaurant`
--

LOCK TABLES `Restaurant` WRITE;
/*!40000 ALTER TABLE `Restaurant` DISABLE KEYS */;
INSERT INTO `Restaurant` VALUES (11,'HITC','Đồ ăn vặt','48 Xuân Thủy Cầu Giấy','21.036751788992916,105.7849399251329','1574583448937.jpg'),(13,'Food House','Lẩu các kiểu','Số 7 Đại la - Hai Bà Trưng',NULL,'1574254955618.jpg'),(14,'Beer Club','Lẩu các kiểu','174 Ngọc Khánh, Q. Ba Đình',NULL,'1574255103492.jpg'),(15,'Tadifa','Lẩu các kiểu','Số 652 Đường Láng,Q. Đống Đa',NULL,'1574256243405.jpg'),(17,'Buffet Poseidon','Lẩu các kiểu','27 Đường Lê Văn Lương, Nhân Chính, Thanh Xuân,',NULL,'1574256416083.png'),(18,'Hải Sản biển đông','Hải sản',' TTTM Royal City',NULL,'1574256515886.jpg'),(19,'Phát Quán','Lẩu các kiểu',' P. Phú Diễn, Q. Bắc Từ Liêm',NULL,'1574256646381.jpg'),(22,'BBQ M','BBQ','35 Xuân Thủy Cầu Giấy','21.037715809119142,105.77954633331296','1574549018485.jpg'),(23,'Pao Quán','Cơm văn phòng','Trần Thái Tông - Cầu giấy','21.034253651924615,105.78873217105865','1574623675361.jpg');
/*!40000 ALTER TABLE `Restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RestaurantOwner`
--

DROP TABLE IF EXISTS `RestaurantOwner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RestaurantOwner` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Password` varchar(2000) NOT NULL,
  `Restaurant_ID` int(11) DEFAULT NULL,
  `role` int(11) NOT NULL DEFAULT '2',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Name_UNIQUE` (`Name`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RestaurantOwner`
--

LOCK TABLES `RestaurantOwner` WRITE;
/*!40000 ALTER TABLE `RestaurantOwner` DISABLE KEYS */;
INSERT INTO `RestaurantOwner` VALUES (10,'HITC','U2FsdGVkX19eAaInTIsS6q0Kd/p85vlQ8kjqLz+2JRo=',11,2);
/*!40000 ALTER TABLE `RestaurantOwner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Phone` int(64) NOT NULL,
  `Image` text,
  `Password` varchar(200) NOT NULL,
  `checkMail` int(11) NOT NULL DEFAULT '0',
  `role` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Name_UNIQUE` (`Name`),
  UNIQUE KEY `Email_UNIQUE` (`Email`),
  UNIQUE KEY `Phone_UNIQUE` (`Phone`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'admin','avaichuong@gmail.com',123456,'image','U2FsdGVkX19N5d9ELVI1hK5LXuVBsKrzSgSMoXmWhcI=',1,0),(60,'PhucTran','tranhongphuc02011999@gmail.com',123456789,NULL,'U2FsdGVkX1+zHdFlNIq7CzQIv40gJjHQfe5BftGxWbM=',1,1);
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-25  3:11:44
