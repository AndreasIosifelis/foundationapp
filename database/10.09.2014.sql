-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.5.35-0ubuntu0.12.04.2 - (Ubuntu)
-- Server OS:                    debian-linux-gnu
-- HeidiSQL Version:             8.1.0.4545
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for foundationapp
CREATE DATABASE IF NOT EXISTS `foundationapp` /*!40100 DEFAULT CHARACTER SET greek */;
USE `foundationapp`;


-- Dumping structure for table foundationapp.addresses
CREATE TABLE IF NOT EXISTS `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personId` int(11) NOT NULL DEFAULT '0',
  `basic` tinyint(4) NOT NULL DEFAULT '0',
  `typeId` int(11) NOT NULL DEFAULT '0',
  `street` varchar(255) NOT NULL DEFAULT '0',
  `number` varchar(255) NOT NULL DEFAULT '0',
  `stateId` int(11) NOT NULL DEFAULT '0',
  `cityId` int(11) NOT NULL DEFAULT '0',
  `countryId` int(11) NOT NULL DEFAULT '0',
  `createdOn` datetime DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `lastUpdatedOn` datetime DEFAULT NULL,
  `lastUpdatedBy` int(11) DEFAULT NULL,
  `rowVersionField` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=greek;

-- Dumping data for table foundationapp.addresses: ~0 rows (approximately)
DELETE FROM `addresses`;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;


-- Dumping structure for table foundationapp.grouprights
CREATE TABLE IF NOT EXISTS `grouprights` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `groupId` int(11) DEFAULT NULL,
  `entityId` int(11) DEFAULT NULL,
  `create` tinyint(4) DEFAULT NULL,
  `read` tinyint(4) DEFAULT NULL,
  `update` tinyint(4) DEFAULT NULL,
  `delete` tinyint(4) DEFAULT NULL,
  `rowVersionField` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=greek;

-- Dumping data for table foundationapp.grouprights: ~0 rows (approximately)
DELETE FROM `grouprights`;
/*!40000 ALTER TABLE `grouprights` DISABLE KEYS */;
/*!40000 ALTER TABLE `grouprights` ENABLE KEYS */;


-- Dumping structure for table foundationapp.lookups
CREATE TABLE IF NOT EXISTS `lookups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeId` int(11) NOT NULL DEFAULT '0',
  `selectable` tinyint(4) NOT NULL DEFAULT '0',
  `parentId` tinyint(4) NOT NULL DEFAULT '0',
  `description` varchar(255) NOT NULL DEFAULT '0',
  `createdOn` datetime DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `lastUpdatedOn` datetime DEFAULT NULL,
  `lastUpdatedBy` int(11) DEFAULT NULL,
  `rowVersionField` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=greek;

-- Dumping data for table foundationapp.lookups: ~6 rows (approximately)
DELETE FROM `lookups`;
/*!40000 ALTER TABLE `lookups` DISABLE KEYS */;
INSERT INTO `lookups` (`id`, `typeId`, `selectable`, `parentId`, `description`, `createdOn`, `createdBy`, `lastUpdatedOn`, `lastUpdatedBy`, `rowVersionField`) VALUES
	(3, 2, 1, 0, 'ADMINS', '2014-05-07 16:28:37', 1, NULL, NULL, NULL),
	(4, 13, 1, 0, 'PAGE', '2014-05-07 16:29:22', 1, NULL, NULL, NULL),
	(5, 13, 1, 0, 'ARTICLE', '2014-05-07 16:29:31', 1, NULL, NULL, NULL),
	(19, 2, 1, 0, 'CUSTOMERS', '2014-05-07 23:10:08', 1, NULL, NULL, NULL),
	(20, 2, 1, 0, 'USERS', '2014-05-07 23:10:28', 1, NULL, NULL, NULL),
	(21, 2, 1, 0, 'AUTHORS', '2014-05-07 23:10:39', 1, NULL, NULL, NULL);
/*!40000 ALTER TABLE `lookups` ENABLE KEYS */;


-- Dumping structure for table foundationapp.lookuptypes
CREATE TABLE IF NOT EXISTS `lookuptypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `editable` tinyint(4) NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT '0',
  `attribute` varchar(255) NOT NULL DEFAULT '0',
  `rowVersionField` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=greek;

-- Dumping data for table foundationapp.lookuptypes: ~12 rows (approximately)
DELETE FROM `lookuptypes`;
/*!40000 ALTER TABLE `lookuptypes` DISABLE KEYS */;
INSERT INTO `lookuptypes` (`id`, `editable`, `description`, `attribute`, `rowVersionField`) VALUES
	(2, 0, 'USER_GROUPS', 'USER_GROUPS', NULL),
	(3, 1, 'CITIES', 'CITIES', NULL),
	(4, 1, 'STATES', 'STATES', NULL),
	(5, 1, 'COUNTRIES', 'COUNTRIES', NULL),
	(6, 1, 'PRODUCT_CATEGORIES', 'PRODUCT_CATEGORIES', NULL),
	(7, 1, 'ARTICLE_CATEGORIES', 'ARTICLE_CATEGORIES', NULL),
	(8, 1, 'ADDRESS_TYPES', 'ADDRESS_TYPES', NULL),
	(9, 1, 'TELEPHONE_TYPES', 'TELEPHONE_TYPES', NULL),
	(10, 1, 'MANUFACTURERS', 'MANUFACTURERS', NULL),
	(11, 1, 'WEBPROFILE_TYPES', 'WEBPROFILE_TYPES', NULL),
	(12, 1, 'PERSONID_TYPES', 'PERSONID_TYPES', NULL),
	(13, 0, 'CONTENT_TYPES', 'CONTENT_TYPES', NULL);
/*!40000 ALTER TABLE `lookuptypes` ENABLE KEYS */;


-- Dumping structure for table foundationapp.personids
CREATE TABLE IF NOT EXISTS `personids` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personId` int(11) DEFAULT '0',
  `basic` tinyint(4) DEFAULT '0',
  `typeId` int(11) DEFAULT '0',
  `description` varchar(255) DEFAULT '0',
  `createdOn` datetime DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `lastUpdatedOn` datetime DEFAULT NULL,
  `lastUpdatedBy` int(11) DEFAULT NULL,
  `rowVersionField` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=greek;

-- Dumping data for table foundationapp.personids: ~0 rows (approximately)
DELETE FROM `personids`;
/*!40000 ALTER TABLE `personids` DISABLE KEYS */;
/*!40000 ALTER TABLE `personids` ENABLE KEYS */;


-- Dumping structure for table foundationapp.persons
CREATE TABLE IF NOT EXISTS `persons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usergroupId` int(11) NOT NULL DEFAULT '0',
  `username` char(32) NOT NULL,
  `password` char(32) NOT NULL,
  `salt` char(32) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `lastLogin` datetime DEFAULT NULL,
  `lastLogout` datetime DEFAULT NULL,
  `loginCount` int(11) DEFAULT NULL,
  `createdOn` datetime DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `lastUpdatedOn` datetime DEFAULT NULL,
  `lastUpdatedBy` int(11) DEFAULT NULL,
  `rowVersionField` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=greek;

-- Dumping data for table foundationapp.persons: ~1 rows (approximately)
DELETE FROM `persons`;
/*!40000 ALTER TABLE `persons` DISABLE KEYS */;
INSERT INTO `persons` (`id`, `usergroupId`, `username`, `password`, `salt`, `firstName`, `lastName`, `email`, `lastLogin`, `lastLogout`, `loginCount`, `createdOn`, `createdBy`, `lastUpdatedOn`, `lastUpdatedBy`, `rowVersionField`) VALUES
	(1, 3, '3d4449be55e5953af82ed6ad555ff94d', '0096db3a687289adc5ddfe083f6f78d6', '953b13811fd71fa572fe6934f50faa58', 'Andreas', 'Iosifelis', 'drumforhim@gmail.com', NULL, NULL, NULL, '2014-05-07 16:42:53', 1, NULL, NULL, NULL);
/*!40000 ALTER TABLE `persons` ENABLE KEYS */;


-- Dumping structure for table foundationapp.sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(45) NOT NULL DEFAULT '0',
  `user_agent` varchar(120) NOT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text NOT NULL,
  PRIMARY KEY (`session_id`),
  KEY `last_activity_idx` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=greek;

-- Dumping data for table foundationapp.sessions: ~0 rows (approximately)
DELETE FROM `sessions`;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;


-- Dumping structure for table foundationapp.telephones
CREATE TABLE IF NOT EXISTS `telephones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personId` int(11) NOT NULL DEFAULT '0',
  `basic` tinyint(4) NOT NULL DEFAULT '0',
  `typeId` int(11) NOT NULL DEFAULT '0',
  `prefix` varchar(50) NOT NULL DEFAULT '0',
  `telephone` varchar(255) NOT NULL DEFAULT '0',
  `createdOn` datetime DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `lastUpdatedOn` datetime DEFAULT NULL,
  `lastUpdatedBy` int(11) DEFAULT NULL,
  `rowVersionField` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=greek;

-- Dumping data for table foundationapp.telephones: ~0 rows (approximately)
DELETE FROM `telephones`;
/*!40000 ALTER TABLE `telephones` DISABLE KEYS */;
/*!40000 ALTER TABLE `telephones` ENABLE KEYS */;


-- Dumping structure for table foundationapp.webprofiles
CREATE TABLE IF NOT EXISTS `webprofiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personId` int(11) NOT NULL DEFAULT '0',
  `basic` tinyint(4) NOT NULL DEFAULT '0',
  `typeId` int(11) NOT NULL DEFAULT '0',
  `description` varchar(255) NOT NULL DEFAULT '0',
  `createdOn` datetime DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `lastUpdatedOn` datetime DEFAULT NULL,
  `lastUpdatedBy` int(11) DEFAULT NULL,
  `rowVersionField` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=greek;

-- Dumping data for table foundationapp.webprofiles: ~0 rows (approximately)
DELETE FROM `webprofiles`;
/*!40000 ALTER TABLE `webprofiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `webprofiles` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
