-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: pklwikidb
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `evolutionline`
--

DROP TABLE IF EXISTS `evolutionline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evolutionline` (
  `Id` int DEFAULT NULL,
  `PokemonId` int DEFAULT NULL,
  `EvolutionId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evolutionline`
--

LOCK TABLES `evolutionline` WRITE;
/*!40000 ALTER TABLE `evolutionline` DISABLE KEYS */;
/*!40000 ALTER TABLE `evolutionline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `Id` int DEFAULT NULL,
  `Name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `move`
--

DROP TABLE IF EXISTS `move`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `move` (
  `Id` int DEFAULT NULL,
  `Name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `move`
--

LOCK TABLES `move` WRITE;
/*!40000 ALTER TABLE `move` DISABLE KEYS */;
/*!40000 ALTER TABLE `move` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pokemon`
--

DROP TABLE IF EXISTS `pokemon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pokemon` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `IsShiny` tinyint NOT NULL DEFAULT '0',
  `Level` int NOT NULL,
  `Tier` int NOT NULL,
  `Reference` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Description` longtext NOT NULL,
  `Characteristic` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT '',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=503 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemon`
--

LOCK TABLES `pokemon` WRITE;
/*!40000 ALTER TABLE `pokemon` DISABLE KEYS */;
INSERT INTO `pokemon` VALUES (1,'shiny bulbasaur',1,1,1,'1','',NULL),(2,'shiny ivysaur',1,1,1,'2','',NULL),(3,'shiny venusaur',1,1,1,'3','',NULL),(4,'shiny charmander',1,1,1,'4','',NULL),(5,'shiny charmeleon',1,1,1,'5','',NULL),(6,'shiny charizard',1,1,1,'6','',NULL),(7,'shiny squirtle',1,1,1,'7','',NULL),(8,'shiny wartortle',1,1,1,'8','',NULL),(9,'shiny blastoise',1,1,1,'9','',NULL),(10,'shiny caterpie',1,1,1,'10','',NULL),(11,'shiny metapod',1,1,1,'11','',NULL),(12,'shiny butterfree',1,1,1,'12','',NULL),(13,'shiny weedle',1,1,1,'13','',NULL),(14,'shiny kakuna',1,1,1,'14','',NULL),(15,'shiny beedrill',1,1,1,'15','',NULL),(16,'shiny pidgey',1,1,1,'16','',NULL),(17,'shiny pidgeotto',1,1,1,'17','',NULL),(18,'shiny pidgeot',1,1,1,'18','',NULL),(19,'shiny rattata',1,1,1,'19','',NULL),(20,'shiny raticate',1,1,1,'20','',NULL),(21,'shiny spearow',1,1,1,'21','',NULL),(22,'shiny fearow',1,1,1,'22','',NULL),(23,'shiny ekans',1,1,1,'23','',NULL),(24,'shiny arbok',1,1,1,'24','',NULL),(25,'shiny pikachu',1,1,1,'25','',NULL),(26,'shiny raichu',1,1,1,'26','',NULL),(27,'shiny sandshrew',1,1,1,'27','',NULL),(28,'shiny sandslash',1,1,1,'28','',NULL),(29,'shiny nidoran-f',1,1,1,'29','',NULL),(30,'shiny nidorina',1,1,1,'30','',NULL),(31,'shiny nidoqueen',1,1,1,'31','',NULL),(32,'shiny nidoran-m',1,1,1,'32','',NULL),(33,'shiny nidorino',1,1,1,'33','',NULL),(34,'shiny nidoking',1,1,1,'34','',NULL),(35,'shiny clefairy',1,1,1,'35','',NULL),(36,'shiny clefable',1,1,1,'36','',NULL),(37,'shiny vulpix',1,1,1,'37','',NULL),(38,'shiny ninetales',1,1,1,'38','',NULL),(39,'shiny jigglypuff',1,1,1,'39','',NULL),(40,'shiny wigglytuff',1,1,1,'40','',NULL),(41,'shiny zubat',1,1,1,'41','',NULL),(42,'shiny golbat',1,1,1,'42','',NULL),(43,'shiny oddish',1,1,1,'43','',NULL),(44,'shiny gloom',1,1,1,'44','',NULL),(45,'shiny vileplume',1,1,1,'45','',NULL),(46,'shiny paras',1,1,1,'46','',NULL),(47,'shiny parasect',1,1,1,'47','',NULL),(48,'shiny venonat',1,1,1,'48','',NULL),(49,'shiny venomoth',1,1,1,'49','',NULL),(50,'shiny diglett',1,1,1,'50','',NULL),(51,'shiny dugtrio',1,1,1,'51','',NULL),(52,'shiny meowth',1,1,1,'52','',NULL),(53,'shiny persian',1,1,1,'53','',NULL),(54,'shiny psyduck',1,1,1,'54','',NULL),(55,'shiny golduck',1,1,1,'55','',NULL),(56,'shiny mankey',1,1,1,'56','',NULL),(57,'shiny primeape',1,1,1,'57','',NULL),(58,'shiny growlithe',1,1,1,'58','',NULL),(59,'shiny arcanine',1,1,1,'59','',NULL),(60,'shiny poliwag',1,1,1,'60','',NULL),(61,'shiny poliwhirl',1,1,1,'61','',NULL),(62,'shiny poliwrath',1,1,1,'62','',NULL),(63,'shiny abra',1,1,1,'63','',NULL),(64,'shiny kadabra',1,1,1,'64','',NULL),(65,'shiny alakazam',1,1,1,'65','',NULL),(66,'shiny machop',1,1,1,'66','',NULL),(67,'shiny machoke',1,1,1,'67','',NULL),(68,'shiny machamp',1,1,1,'68','',NULL),(69,'shiny bellsprout',1,1,1,'69','',NULL),(70,'shiny weepinbell',1,1,1,'70','',NULL),(71,'shiny victreebel',1,1,1,'71','',NULL),(72,'shiny tentacool',1,1,1,'72','',NULL),(73,'shiny tentacruel',1,1,1,'73','',NULL),(74,'shiny geodude',1,1,1,'74','',NULL),(75,'shiny graveler',1,1,1,'75','',NULL),(76,'shiny golem',1,1,1,'76','',NULL),(77,'shiny ponyta',1,1,1,'77','',NULL),(78,'shiny rapidash',1,1,1,'78','',NULL),(79,'shiny slowpoke',1,1,1,'79','',NULL),(80,'shiny slowbro',1,1,1,'80','',NULL),(81,'shiny magnemite',1,1,1,'81','',NULL),(82,'shiny magneton',1,1,1,'82','',NULL),(83,'shiny farfetchd',1,1,1,'83','',NULL),(84,'shiny doduo',1,1,1,'84','',NULL),(85,'shiny dodrio',1,1,1,'85','',NULL),(86,'shiny seel',1,1,1,'86','',NULL),(87,'shiny dewgong',1,1,1,'87','',NULL),(88,'shiny grimer',1,1,1,'88','',NULL),(89,'shiny muk',1,1,1,'89','',NULL),(90,'shiny shellder',1,1,1,'90','',NULL),(91,'shiny cloyster',1,1,1,'91','',NULL),(92,'shiny gastly',1,1,1,'92','',NULL),(93,'shiny haunter',1,1,1,'93','',NULL),(94,'shiny gengar',1,1,1,'94','',NULL),(95,'shiny onix',1,1,1,'95','',NULL),(96,'shiny drowzee',1,1,1,'96','',NULL),(97,'shiny hypno',1,1,1,'97','',NULL),(98,'shiny krabby',1,1,1,'98','',NULL),(99,'shiny kingler',1,1,1,'99','',NULL),(100,'shiny voltorb',1,1,1,'100','',NULL),(101,'shiny electrode',1,1,1,'101','',NULL),(102,'shiny exeggcute',1,1,1,'102','',NULL),(103,'shiny exeggutor',1,1,1,'103','',NULL),(104,'shiny cubone',1,1,1,'104','',NULL),(105,'shiny marowak',1,1,1,'105','',NULL),(106,'shiny hitmonlee',1,1,1,'106','',NULL),(107,'shiny hitmonchan',1,1,1,'107','',NULL),(108,'shiny lickitung',1,1,1,'108','',NULL),(109,'shiny koffing',1,1,1,'109','',NULL),(110,'shiny weezing',1,1,1,'110','',NULL),(111,'shiny rhyhorn',1,1,1,'111','',NULL),(112,'shiny rhydon',1,1,1,'112','',NULL),(113,'shiny chansey',1,1,1,'113','',NULL),(114,'shiny tangela',1,1,1,'114','',NULL),(115,'shiny kangaskhan',1,1,1,'115','',NULL),(116,'shiny horsea',1,1,1,'116','',NULL),(117,'shiny seadra',1,1,1,'117','',NULL),(118,'shiny goldeen',1,1,1,'118','',NULL),(119,'shiny seaking',1,1,1,'119','',NULL),(120,'shiny staryu',1,1,1,'120','',NULL),(121,'shiny starmie',1,1,1,'121','',NULL),(122,'shiny mr-mime',1,1,1,'122','',NULL),(123,'shiny scyther',1,1,1,'123','',NULL),(124,'shiny jynx',1,1,1,'124','',NULL),(125,'shiny electabuzz',1,1,1,'125','',NULL),(126,'shiny magmar',1,1,1,'126','',NULL),(127,'shiny pinsir',1,1,1,'127','',NULL),(128,'shiny tauros',1,1,1,'128','',NULL),(129,'shiny magikarp',1,1,1,'129','',NULL),(130,'shiny gyarados',1,1,1,'130','',NULL),(131,'shiny lapras',1,1,1,'131','',NULL),(132,'shiny ditto',1,1,1,'132','',NULL),(133,'shiny eevee',1,1,1,'133','',NULL),(134,'shiny vaporeon',1,1,1,'134','',NULL),(135,'shiny jolteon',1,1,1,'135','',NULL),(136,'shiny flareon',1,1,1,'136','',NULL),(137,'shiny porygon',1,1,1,'137','',NULL),(138,'shiny omanyte',1,1,1,'138','',NULL),(139,'shiny omastar',1,1,1,'139','',NULL),(140,'shiny kabuto',1,1,1,'140','',NULL),(141,'shiny kabutops',1,1,1,'141','',NULL),(142,'shiny aerodactyl',1,1,1,'142','',NULL),(143,'shiny snorlax',1,1,1,'143','',NULL),(144,'shiny articuno',1,1,1,'144','',NULL),(145,'shiny zapdos',1,1,1,'145','',NULL),(146,'shiny moltres',1,1,1,'146','',NULL),(147,'shiny dratini',1,1,1,'147','',NULL),(148,'shiny dragonair',1,1,1,'148','',NULL),(149,'shiny dragonite',1,1,1,'149','',NULL),(150,'shiny mewtwo',1,1,1,'150','',NULL),(151,'shiny mew',1,1,1,'151','',NULL),(152,'shiny chikorita',1,1,1,'152','',NULL),(153,'shiny bayleef',1,1,1,'153','',NULL),(154,'shiny meganium',1,1,1,'154','',NULL),(155,'shiny cyndaquil',1,1,1,'155','',NULL),(156,'shiny quilava',1,1,1,'156','',NULL),(157,'shiny typhlosion',1,1,1,'157','',NULL),(158,'shiny totodile',1,1,1,'158','',NULL),(159,'shiny croconaw',1,1,1,'159','',NULL),(160,'shiny feraligatr',1,1,1,'160','',NULL),(161,'shiny sentret',1,1,1,'161','',NULL),(162,'shiny furret',1,1,1,'162','',NULL),(163,'shiny hoothoot',1,1,1,'163','',NULL),(164,'shiny noctowl',1,1,1,'164','',NULL),(165,'shiny ledyba',1,1,1,'165','',NULL),(166,'shiny ledian',1,1,1,'166','',NULL),(167,'shiny spinarak',1,1,1,'167','',NULL),(168,'shiny ariados',1,1,1,'168','',NULL),(169,'shiny crobat',1,1,1,'169','',NULL),(170,'shiny chinchou',1,1,1,'170','',NULL),(171,'shiny lanturn',1,1,1,'171','',NULL),(172,'shiny pichu',1,1,1,'172','',NULL),(173,'shiny cleffa',1,1,1,'173','',NULL),(174,'shiny igglybuff',1,1,1,'174','',NULL),(175,'shiny togepi',1,1,1,'175','',NULL),(176,'shiny togetic',1,1,1,'176','',NULL),(177,'shiny natu',1,1,1,'177','',NULL),(178,'shiny xatu',1,1,1,'178','',NULL),(179,'shiny mareep',1,1,1,'179','',NULL),(180,'shiny flaaffy',1,1,1,'180','',NULL),(181,'shiny ampharos',1,1,1,'181','',NULL),(182,'shiny bellossom',1,1,1,'182','',NULL),(183,'shiny marill',1,1,1,'183','',NULL),(184,'shiny azumarill',1,1,1,'184','',NULL),(185,'shiny sudowoodo',1,1,1,'185','',NULL),(186,'shiny politoed',1,1,1,'186','',NULL),(187,'shiny hoppip',1,1,1,'187','',NULL),(188,'shiny skiploom',1,1,1,'188','',NULL),(189,'shiny jumpluff',1,1,1,'189','',NULL),(190,'shiny aipom',1,1,1,'190','',NULL),(191,'shiny sunkern',1,1,1,'191','',NULL),(192,'shiny sunflora',1,1,1,'192','',NULL),(193,'shiny yanma',1,1,1,'193','',NULL),(194,'shiny wooper',1,1,1,'194','',NULL),(195,'shiny quagsire',1,1,1,'195','',NULL),(196,'shiny espeon',1,1,1,'196','',NULL),(197,'shiny umbreon',1,1,1,'197','',NULL),(198,'shiny murkrow',1,1,1,'198','',NULL),(199,'shiny slowking',1,1,1,'199','',NULL),(200,'shiny misdreavus',1,1,1,'200','',NULL),(201,'shiny unown',1,1,1,'201','',NULL),(202,'shiny wobbuffet',1,1,1,'202','',NULL),(203,'shiny girafarig',1,1,1,'203','',NULL),(204,'shiny pineco',1,1,1,'204','',NULL),(205,'shiny forretress',1,1,1,'205','',NULL),(206,'shiny dunsparce',1,1,1,'206','',NULL),(207,'shiny gligar',1,1,1,'207','',NULL),(208,'shiny steelix',1,1,1,'208','',NULL),(209,'shiny snubbull',1,1,1,'209','',NULL),(210,'shiny granbull',1,1,1,'210','',NULL),(211,'shiny qwilfish',1,1,1,'211','',NULL),(212,'shiny scizor',1,1,1,'212','',NULL),(213,'shiny shuckle',1,1,1,'213','',NULL),(214,'shiny heracross',1,1,1,'214','',NULL),(215,'shiny sneasel',1,1,1,'215','',NULL),(216,'shiny teddiursa',1,1,1,'216','',NULL),(217,'shiny ursaring',1,1,1,'217','',NULL),(218,'shiny slugma',1,1,1,'218','',NULL),(219,'shiny magcargo',1,1,1,'219','',NULL),(220,'shiny swinub',1,1,1,'220','',NULL),(221,'shiny piloswine',1,1,1,'221','',NULL),(222,'shiny corsola',1,1,1,'222','',NULL),(223,'shiny remoraid',1,1,1,'223','',NULL),(224,'shiny octillery',1,1,1,'224','',NULL),(225,'shiny delibird',1,1,1,'225','',NULL),(226,'shiny mantine',1,1,1,'226','',NULL),(227,'shiny skarmory',1,1,1,'227','',NULL),(228,'shiny houndour',1,1,1,'228','',NULL),(229,'shiny houndoom',1,1,1,'229','',NULL),(230,'shiny kingdra',1,1,1,'230','',NULL),(231,'shiny phanpy',1,1,1,'231','',NULL),(232,'shiny donphan',1,1,1,'232','',NULL),(233,'shiny porygon2',1,1,1,'233','',NULL),(234,'shiny stantler',1,1,1,'234','',NULL),(235,'shiny smeargle',1,1,1,'235','',NULL),(236,'shiny tyrogue',1,1,1,'236','',NULL),(237,'shiny hitmontop',1,1,1,'237','',NULL),(238,'shiny smoochum',1,1,1,'238','',NULL),(239,'shiny elekid',1,1,1,'239','',NULL),(240,'shiny magby',1,1,1,'240','',NULL),(241,'shiny miltank',1,1,1,'241','',NULL),(242,'shiny blissey',1,1,1,'242','',NULL),(243,'shiny raikou',1,1,1,'243','',NULL),(244,'shiny entei',1,1,1,'244','',NULL),(245,'shiny suicune',1,1,1,'245','',NULL),(246,'shiny larvitar',1,1,1,'246','',NULL),(247,'shiny pupitar',1,1,1,'247','',NULL),(248,'shiny tyranitar',1,1,1,'248','',NULL),(249,'shiny lugia',1,1,1,'249','',NULL),(250,'shiny ho-oh',1,1,1,'250','',NULL),(251,'shiny celebi',1,1,1,'251','',NULL),(252,'bulbasaur',0,1,1,'1','',NULL),(253,'ivysaur',0,1,1,'2','',NULL),(254,'venusaur',0,1,1,'3','',NULL),(255,'charmander',0,1,1,'4','',NULL),(256,'charmeleon',0,1,1,'5','',NULL),(257,'charizard',0,1,1,'6','',NULL),(258,'squirtle',0,1,1,'7','',NULL),(259,'wartortle',0,1,1,'8','',NULL),(260,'blastoise',0,1,1,'9','',NULL),(261,'caterpie',0,1,1,'10','',NULL),(262,'metapod',0,1,1,'11','',NULL),(263,'butterfree',0,1,1,'12','',NULL),(264,'weedle',0,1,1,'13','',NULL),(265,'kakuna',0,1,1,'14','',NULL),(266,'beedrill',0,1,1,'15','',NULL),(267,'pidgey',0,1,1,'16','',NULL),(268,'pidgeotto',0,1,1,'17','',NULL),(269,'pidgeot',0,1,1,'18','',NULL),(270,'rattata',0,1,1,'19','',NULL),(271,'raticate',0,1,1,'20','',NULL),(272,'spearow',0,1,1,'21','',NULL),(273,'fearow',0,1,1,'22','',NULL),(274,'ekans',0,1,1,'23','',NULL),(275,'arbok',0,1,1,'24','',NULL),(276,'pikachu',0,1,1,'25','',NULL),(277,'raichu',0,1,1,'26','',NULL),(278,'sandshrew',0,1,1,'27','',NULL),(279,'sandslash',0,1,1,'28','',NULL),(280,'nidoran-f',0,1,1,'29','',NULL),(281,'nidorina',0,1,1,'30','',NULL),(282,'nidoqueen',0,1,1,'31','',NULL),(283,'nidoran-m',0,1,1,'32','',NULL),(284,'nidorino',0,1,1,'33','',NULL),(285,'nidoking',0,1,1,'34','',NULL),(286,'clefairy',0,1,1,'35','',NULL),(287,'clefable',0,1,1,'36','',NULL),(288,'vulpix',0,1,1,'37','',NULL),(289,'ninetales',0,1,1,'38','',NULL),(290,'jigglypuff',0,1,1,'39','',NULL),(291,'wigglytuff',0,1,1,'40','',NULL),(292,'zubat',0,1,1,'41','',NULL),(293,'golbat',0,1,1,'42','',NULL),(294,'oddish',0,1,1,'43','',NULL),(295,'gloom',0,1,1,'44','',NULL),(296,'vileplume',0,1,1,'45','',NULL),(297,'paras',0,1,1,'46','',NULL),(298,'parasect',0,1,1,'47','',NULL),(299,'venonat',0,1,1,'48','',NULL),(300,'venomoth',0,1,1,'49','',NULL),(301,'diglett',0,1,1,'50','',NULL),(302,'dugtrio',0,1,1,'51','',NULL),(303,'meowth',0,1,1,'52','',NULL),(304,'persian',0,1,1,'53','',NULL),(305,'psyduck',0,1,1,'54','',NULL),(306,'golduck',0,1,1,'55','',NULL),(307,'mankey',0,1,1,'56','',NULL),(308,'primeape',0,1,1,'57','',NULL),(309,'growlithe',0,1,1,'58','',NULL),(310,'arcanine',0,1,1,'59','',NULL),(311,'poliwag',0,1,1,'60','',NULL),(312,'poliwhirl',0,1,1,'61','',NULL),(313,'poliwrath',0,1,1,'62','',NULL),(314,'abra',0,1,1,'63','',NULL),(315,'kadabra',0,1,1,'64','',NULL),(316,'alakazam',0,1,1,'65','',NULL),(317,'machop',0,1,1,'66','',NULL),(318,'machoke',0,1,1,'67','',NULL),(319,'machamp',0,1,1,'68','',NULL),(320,'bellsprout',0,1,1,'69','',NULL),(321,'weepinbell',0,1,1,'70','',NULL),(322,'victreebel',0,1,1,'71','',NULL),(323,'tentacool',0,1,1,'72','',NULL),(324,'tentacruel',0,1,1,'73','',NULL),(325,'geodude',0,1,1,'74','',NULL),(326,'graveler',0,1,1,'75','',NULL),(327,'golem',0,1,1,'76','',NULL),(328,'ponyta',0,1,1,'77','',NULL),(329,'rapidash',0,1,1,'78','',NULL),(330,'slowpoke',0,1,1,'79','',NULL),(331,'slowbro',0,1,1,'80','',NULL),(332,'magnemite',0,1,1,'81','',NULL),(333,'magneton',0,1,1,'82','',NULL),(334,'farfetchd',0,1,1,'83','',NULL),(335,'doduo',0,1,1,'84','',NULL),(336,'dodrio',0,1,1,'85','',NULL),(337,'seel',0,1,1,'86','',NULL),(338,'dewgong',0,1,1,'87','',NULL),(339,'grimer',0,1,1,'88','',NULL),(340,'muk',0,1,1,'89','',NULL),(341,'shellder',0,1,1,'90','',NULL),(342,'cloyster',0,1,1,'91','',NULL),(343,'gastly',0,1,1,'92','',NULL),(344,'haunter',0,1,1,'93','',NULL),(345,'gengar',0,1,1,'94','',NULL),(346,'onix',0,1,1,'95','',NULL),(347,'drowzee',0,1,1,'96','',NULL),(348,'hypno',0,1,1,'97','',NULL),(349,'krabby',0,1,1,'98','',NULL),(350,'kingler',0,1,1,'99','',NULL),(351,'voltorb',0,1,1,'100','',NULL),(352,'electrode',0,1,1,'101','',NULL),(353,'exeggcute',0,1,1,'102','',NULL),(354,'exeggutor',0,1,1,'103','',NULL),(355,'cubone',0,1,1,'104','',NULL),(356,'marowak',0,1,1,'105','',NULL),(357,'hitmonlee',0,1,1,'106','',NULL),(358,'hitmonchan',0,1,1,'107','',NULL),(359,'lickitung',0,1,1,'108','',NULL),(360,'koffing',0,1,1,'109','',NULL),(361,'weezing',0,1,1,'110','',NULL),(362,'rhyhorn',0,1,1,'111','',NULL),(363,'rhydon',0,1,1,'112','',NULL),(364,'chansey',0,1,1,'113','',NULL),(365,'tangela',0,1,1,'114','',NULL),(366,'kangaskhan',0,1,1,'115','',NULL),(367,'horsea',0,1,1,'116','',NULL),(368,'seadra',0,1,1,'117','',NULL),(369,'goldeen',0,1,1,'118','',NULL),(370,'seaking',0,1,1,'119','',NULL),(371,'staryu',0,1,1,'120','',NULL),(372,'starmie',0,1,1,'121','',NULL),(373,'mr-mime',0,1,1,'122','',NULL),(374,'scyther',0,1,1,'123','',NULL),(375,'jynx',0,1,1,'124','',NULL),(376,'electabuzz',0,1,1,'125','',NULL),(377,'magmar',0,1,1,'126','',NULL),(378,'pinsir',0,1,1,'127','',NULL),(379,'tauros',0,1,1,'128','',NULL),(380,'magikarp',0,1,1,'129','',NULL),(381,'gyarados',0,1,1,'130','',NULL),(382,'lapras',0,1,1,'131','',NULL),(383,'ditto',0,1,1,'132','',NULL),(384,'eevee',0,1,1,'133','',NULL),(385,'vaporeon',0,1,1,'134','',NULL),(386,'jolteon',0,1,1,'135','',NULL),(387,'flareon',0,1,1,'136','',NULL),(388,'porygon',0,1,1,'137','',NULL),(389,'omanyte',0,1,1,'138','',NULL),(390,'omastar',0,1,1,'139','',NULL),(391,'kabuto',0,1,1,'140','',NULL),(392,'kabutops',0,1,1,'141','',NULL),(393,'aerodactyl',0,1,1,'142','',NULL),(394,'snorlax',0,1,1,'143','',NULL),(395,'articuno',0,1,1,'144','',NULL),(396,'zapdos',0,1,1,'145','',NULL),(397,'moltres',0,1,1,'146','',NULL),(398,'dratini',0,1,1,'147','',NULL),(399,'dragonair',0,1,1,'148','',NULL),(400,'dragonite',0,1,1,'149','',NULL),(401,'mewtwo',0,1,1,'150','',NULL),(402,'mew',0,1,1,'151','',NULL),(403,'chikorita',0,1,1,'152','',NULL),(404,'bayleef',0,1,1,'153','',NULL),(405,'meganium',0,1,1,'154','',NULL),(406,'cyndaquil',0,1,1,'155','',NULL),(407,'quilava',0,1,1,'156','',NULL),(408,'typhlosion',0,1,1,'157','',NULL),(409,'totodile',0,1,1,'158','',NULL),(410,'croconaw',0,1,1,'159','',NULL),(411,'feraligatr',0,1,1,'160','',NULL),(412,'sentret',0,1,1,'161','',NULL),(413,'furret',0,1,1,'162','',NULL),(414,'hoothoot',0,1,1,'163','',NULL),(415,'noctowl',0,1,1,'164','',NULL),(416,'ledyba',0,1,1,'165','',NULL),(417,'ledian',0,1,1,'166','',NULL),(418,'spinarak',0,1,1,'167','',NULL),(419,'ariados',0,1,1,'168','',NULL),(420,'crobat',0,1,1,'169','',NULL),(421,'chinchou',0,1,1,'170','',NULL),(422,'lanturn',0,1,1,'171','',NULL),(423,'pichu',0,1,1,'172','',NULL),(424,'cleffa',0,1,1,'173','',NULL),(425,'igglybuff',0,1,1,'174','',NULL),(426,'togepi',0,1,1,'175','',NULL),(427,'togetic',0,1,1,'176','',NULL),(428,'natu',0,1,1,'177','',NULL),(429,'xatu',0,1,1,'178','',NULL),(430,'mareep',0,1,1,'179','',NULL),(431,'flaaffy',0,1,1,'180','',NULL),(432,'ampharos',0,1,1,'181','',NULL),(433,'bellossom',0,1,1,'182','',NULL),(434,'marill',0,1,1,'183','',NULL),(435,'azumarill',0,1,1,'184','',NULL),(436,'sudowoodo',0,1,1,'185','',NULL),(437,'politoed',0,1,1,'186','',NULL),(438,'hoppip',0,1,1,'187','',NULL),(439,'skiploom',0,1,1,'188','',NULL),(440,'jumpluff',0,1,1,'189','',NULL),(441,'aipom',0,1,1,'190','',NULL),(442,'sunkern',0,1,1,'191','',NULL),(443,'sunflora',0,1,1,'192','',NULL),(444,'yanma',0,1,1,'193','',NULL),(445,'wooper',0,1,1,'194','',NULL),(446,'quagsire',0,1,1,'195','',NULL),(447,'espeon',0,1,1,'196','',NULL),(448,'umbreon',0,1,1,'197','',NULL),(449,'murkrow',0,1,1,'198','',NULL),(450,'slowking',0,1,1,'199','',NULL),(451,'misdreavus',0,1,1,'200','',NULL),(452,'unown',0,1,1,'201','',NULL),(453,'wobbuffet',0,1,1,'202','',NULL),(454,'girafarig',0,1,1,'203','',NULL),(455,'pineco',0,1,1,'204','',NULL),(456,'forretress',0,1,1,'205','',NULL),(457,'dunsparce',0,1,1,'206','',NULL),(458,'gligar',0,1,1,'207','',NULL),(459,'steelix',0,1,1,'208','',NULL),(460,'snubbull',0,1,1,'209','',NULL),(461,'granbull',0,1,1,'210','',NULL),(462,'qwilfish',0,1,1,'211','',NULL),(463,'scizor',0,1,1,'212','',NULL),(464,'shuckle',0,1,1,'213','',NULL),(465,'heracross',0,1,1,'214','',NULL),(466,'sneasel',0,1,1,'215','',NULL),(467,'teddiursa',0,1,1,'216','',NULL),(468,'ursaring',0,1,1,'217','',NULL),(469,'slugma',0,1,1,'218','',NULL),(470,'magcargo',0,1,1,'219','',NULL),(471,'swinub',0,1,1,'220','',NULL),(472,'piloswine',0,1,1,'221','',NULL),(473,'corsola',0,1,1,'222','',NULL),(474,'remoraid',0,1,1,'223','',NULL),(475,'octillery',0,1,1,'224','',NULL),(476,'delibird',0,1,1,'225','',NULL),(477,'mantine',0,1,1,'226','',NULL),(478,'skarmory',0,1,1,'227','',NULL),(479,'houndour',0,1,1,'228','',NULL),(480,'houndoom',0,1,1,'229','',NULL),(481,'kingdra',0,1,1,'230','',NULL),(482,'phanpy',0,1,1,'231','',NULL),(483,'donphan',0,1,1,'232','',NULL),(484,'porygon2',0,1,1,'233','',NULL),(485,'stantler',0,1,1,'234','',NULL),(486,'smeargle',0,1,1,'235','',NULL),(487,'tyrogue',0,1,1,'236','',NULL),(488,'hitmontop',0,1,1,'237','',NULL),(489,'smoochum',0,1,1,'238','',NULL),(490,'elekid',0,1,1,'239','',NULL),(491,'magby',0,1,1,'240','',NULL),(492,'miltank',0,1,1,'241','',NULL),(493,'blissey',0,1,1,'242','',NULL),(494,'raikou',0,1,1,'243','',NULL),(495,'entei',0,1,1,'244','',NULL),(496,'suicune',0,1,1,'245','',NULL),(497,'larvitar',0,1,1,'246','',NULL),(498,'pupitar',0,1,1,'247','',NULL),(499,'tyranitar',0,1,1,'248','',NULL),(500,'lugia',0,1,1,'249','',NULL),(501,'ho-oh',0,1,1,'250','',NULL),(502,'celebi',0,1,1,'251','',NULL);
/*!40000 ALTER TABLE `pokemon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pokemonitem`
--

DROP TABLE IF EXISTS `pokemonitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pokemonitem` (
  `Id` int DEFAULT NULL,
  `PokemonId` int DEFAULT NULL,
  `ItemId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemonitem`
--

LOCK TABLES `pokemonitem` WRITE;
/*!40000 ALTER TABLE `pokemonitem` DISABLE KEYS */;
/*!40000 ALTER TABLE `pokemonitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pokemonmove`
--

DROP TABLE IF EXISTS `pokemonmove`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pokemonmove` (
  `Id` int DEFAULT NULL,
  `PokemonId` int DEFAULT NULL,
  `MoveId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemonmove`
--

LOCK TABLES `pokemonmove` WRITE;
/*!40000 ALTER TABLE `pokemonmove` DISABLE KEYS */;
/*!40000 ALTER TABLE `pokemonmove` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pokemontype`
--

DROP TABLE IF EXISTS `pokemontype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pokemontype` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `PokemonId` int NOT NULL,
  `TypeId` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_pokemonType_pokemonId_idx` (`PokemonId`),
  KEY `fk_pokemonType_typeId_idx` (`TypeId`),
  CONSTRAINT `fk_pokemonType_pokemonId` FOREIGN KEY (`PokemonId`) REFERENCES `pokemon` (`Id`),
  CONSTRAINT `fk_pokemonType_typeId` FOREIGN KEY (`TypeId`) REFERENCES `type` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=735 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemontype`
--

LOCK TABLES `pokemontype` WRITE;
/*!40000 ALTER TABLE `pokemontype` DISABLE KEYS */;
INSERT INTO `pokemontype` VALUES (1,1,41),(2,1,44),(3,2,41),(4,2,44),(5,3,41),(6,3,44),(7,4,38),(8,5,38),(9,6,38),(10,6,46),(11,7,39),(12,8,39),(13,9,39),(14,10,48),(15,11,48),(16,12,48),(17,12,46),(18,13,48),(19,13,44),(20,14,48),(21,14,44),(22,15,48),(23,15,44),(24,16,37),(25,16,46),(26,17,37),(27,17,46),(28,18,37),(29,18,46),(30,19,37),(31,20,37),(32,21,37),(33,21,46),(34,22,37),(35,22,46),(36,23,44),(37,24,44),(38,25,40),(39,26,40),(40,27,45),(41,28,45),(42,29,44),(43,30,44),(44,31,44),(45,31,45),(46,32,44),(47,33,44),(48,34,44),(49,34,45),(50,35,54),(51,36,54),(52,37,38),(53,38,38),(54,39,37),(55,39,54),(56,40,37),(57,40,54),(58,41,44),(59,41,46),(60,42,44),(61,42,46),(62,43,41),(63,43,44),(64,44,41),(65,44,44),(66,45,41),(67,45,44),(68,46,48),(69,46,41),(70,47,48),(71,47,41),(72,48,48),(73,48,44),(74,49,48),(75,49,44),(76,50,45),(77,51,45),(78,52,37),(79,53,37),(80,54,39),(81,55,39),(82,56,43),(83,57,43),(84,58,38),(85,59,38),(86,60,39),(87,61,39),(88,62,39),(89,62,43),(90,63,47),(91,64,47),(92,65,47),(93,66,43),(94,67,43),(95,68,43),(96,69,41),(97,69,44),(98,70,41),(99,70,44),(100,71,41),(101,71,44),(102,72,39),(103,72,44),(104,73,39),(105,73,44),(106,74,49),(107,74,45),(108,75,49),(109,75,45),(110,76,49),(111,76,45),(112,77,38),(113,78,38),(114,79,39),(115,79,47),(116,80,39),(117,80,47),(118,81,40),(119,81,53),(120,82,40),(121,82,53),(122,83,37),(123,83,46),(124,84,37),(125,84,46),(126,85,37),(127,85,46),(128,86,39),(129,87,39),(130,87,42),(131,88,44),(132,89,44),(133,90,39),(134,91,39),(135,91,42),(136,92,50),(137,92,44),(138,93,50),(139,93,44),(140,94,50),(141,94,44),(142,95,49),(143,95,45),(144,96,47),(145,97,47),(146,98,39),(147,99,39),(148,100,40),(149,101,40),(150,102,41),(151,102,47),(152,103,41),(153,103,47),(154,104,45),(155,105,45),(156,106,43),(157,107,43),(158,108,37),(159,109,44),(160,110,44),(161,111,45),(162,111,49),(163,112,45),(164,112,49),(165,113,37),(166,114,41),(167,115,37),(168,116,39),(169,117,39),(170,118,39),(171,119,39),(172,120,39),(173,121,39),(174,121,47),(175,122,47),(176,122,54),(177,123,48),(178,123,46),(179,124,42),(180,124,47),(181,125,40),(182,126,38),(183,127,48),(184,128,37),(185,129,39),(186,130,39),(187,130,46),(188,131,39),(189,131,42),(190,132,37),(191,133,37),(192,134,39),(193,135,40),(194,136,38),(195,137,37),(196,138,49),(197,138,39),(198,139,49),(199,139,39),(200,140,49),(201,140,39),(202,141,49),(203,141,39),(204,142,49),(205,142,46),(206,143,37),(207,144,42),(208,144,46),(209,145,40),(210,145,46),(211,146,38),(212,146,46),(213,147,51),(214,148,51),(215,149,51),(216,149,46),(217,150,47),(218,151,47),(219,152,41),(220,153,41),(221,154,41),(222,155,38),(223,156,38),(224,157,38),(225,158,39),(226,159,39),(227,160,39),(228,161,37),(229,162,37),(230,163,37),(231,163,46),(232,164,37),(233,164,46),(234,165,48),(235,165,46),(236,166,48),(237,166,46),(238,167,48),(239,167,44),(240,168,48),(241,168,44),(242,169,44),(243,169,46),(244,170,39),(245,170,40),(246,171,39),(247,171,40),(248,172,40),(249,173,54),(250,174,37),(251,174,54),(252,175,54),(253,176,54),(254,176,46),(255,177,47),(256,177,46),(257,178,47),(258,178,46),(259,179,40),(260,180,40),(261,181,40),(262,182,41),(263,183,39),(264,183,54),(265,184,39),(266,184,54),(267,185,49),(268,186,39),(269,187,41),(270,187,46),(271,188,41),(272,188,46),(273,189,41),(274,189,46),(275,190,37),(276,191,41),(277,192,41),(278,193,48),(279,193,46),(280,194,39),(281,194,45),(282,195,39),(283,195,45),(284,196,47),(285,197,52),(286,198,52),(287,198,46),(288,199,39),(289,199,47),(290,200,50),(291,201,47),(292,202,47),(293,203,37),(294,203,47),(295,204,48),(296,205,48),(297,205,53),(298,206,37),(299,207,45),(300,207,46),(301,208,53),(302,208,45),(303,209,54),(304,210,54),(305,211,39),(306,211,44),(307,212,48),(308,212,53),(309,213,48),(310,213,49),(311,214,48),(312,214,43),(313,215,52),(314,215,42),(315,216,37),(316,217,37),(317,218,38),(318,219,38),(319,219,49),(320,220,42),(321,220,45),(322,221,42),(323,221,45),(324,222,39),(325,222,49),(326,223,39),(327,224,39),(328,225,42),(329,225,46),(330,226,39),(331,226,46),(332,227,53),(333,227,46),(334,228,52),(335,228,38),(336,229,52),(337,229,38),(338,230,39),(339,230,51),(340,231,45),(341,232,45),(342,233,37),(343,234,37),(344,235,37),(345,236,43),(346,237,43),(347,238,42),(348,238,47),(349,239,40),(350,240,38),(351,241,37),(352,242,37),(353,243,40),(354,244,38),(355,245,39),(356,246,49),(357,246,45),(358,247,49),(359,247,45),(360,248,49),(361,248,52),(362,249,47),(363,249,46),(364,250,38),(365,250,46),(366,251,47),(367,251,41),(368,252,41),(369,252,44),(370,253,41),(371,253,44),(372,254,41),(373,254,44),(374,255,38),(375,256,38),(376,257,38),(377,257,46),(378,258,39),(379,259,39),(380,260,39),(381,261,48),(382,262,48),(383,263,48),(384,263,46),(385,264,48),(386,264,44),(387,265,48),(388,265,44),(389,266,48),(390,266,44),(391,267,37),(392,267,46),(393,268,37),(394,268,46),(395,269,37),(396,269,46),(397,270,37),(398,271,37),(399,272,37),(400,272,46),(401,273,37),(402,273,46),(403,274,44),(404,275,44),(405,276,40),(406,277,40),(407,278,45),(408,279,45),(409,280,44),(410,281,44),(411,282,44),(412,282,45),(413,283,44),(414,284,44),(415,285,44),(416,285,45),(417,286,54),(418,287,54),(419,288,38),(420,289,38),(421,290,37),(422,290,54),(423,291,37),(424,291,54),(425,292,44),(426,292,46),(427,293,44),(428,293,46),(429,294,41),(430,294,44),(431,295,41),(432,295,44),(433,296,41),(434,296,44),(435,297,48),(436,297,41),(437,298,48),(438,298,41),(439,299,48),(440,299,44),(441,300,48),(442,300,44),(443,301,45),(444,302,45),(445,303,37),(446,304,37),(447,305,39),(448,306,39),(449,307,43),(450,308,43),(451,309,38),(452,310,38),(453,311,39),(454,312,39),(455,313,39),(456,313,43),(457,314,47),(458,315,47),(459,316,47),(460,317,43),(461,318,43),(462,319,43),(463,320,41),(464,320,44),(465,321,41),(466,321,44),(467,322,41),(468,322,44),(469,323,39),(470,323,44),(471,324,39),(472,324,44),(473,325,49),(474,325,45),(475,326,49),(476,326,45),(477,327,49),(478,327,45),(479,328,38),(480,329,38),(481,330,39),(482,330,47),(483,331,39),(484,331,47),(485,332,40),(486,332,53),(487,333,40),(488,333,53),(489,334,37),(490,334,46),(491,335,37),(492,335,46),(493,336,37),(494,336,46),(495,337,39),(496,338,39),(497,338,42),(498,339,44),(499,340,44),(500,341,39),(501,342,39),(502,342,42),(503,343,50),(504,343,44),(505,344,50),(506,344,44),(507,345,50),(508,345,44),(509,346,49),(510,346,45),(511,347,47),(512,348,47),(513,349,39),(514,350,39),(515,351,40),(516,352,40),(517,353,41),(518,353,47),(519,354,41),(520,354,47),(521,355,45),(522,356,45),(523,357,43),(524,358,43),(525,359,37),(526,360,44),(527,361,44),(528,362,45),(529,362,49),(530,363,45),(531,363,49),(532,364,37),(533,365,41),(534,366,37),(535,367,39),(536,368,39),(537,369,39),(538,370,39),(539,371,39),(540,372,39),(541,372,47),(542,373,47),(543,373,54),(544,374,48),(545,374,46),(546,375,42),(547,375,47),(548,376,40),(549,377,38),(550,378,48),(551,379,37),(552,380,39),(553,381,39),(554,381,46),(555,382,39),(556,382,42),(557,383,37),(558,384,37),(559,385,39),(560,386,40),(561,387,38),(562,388,37),(563,389,49),(564,389,39),(565,390,49),(566,390,39),(567,391,49),(568,391,39),(569,392,49),(570,392,39),(571,393,49),(572,393,46),(573,394,37),(574,395,42),(575,395,46),(576,396,40),(577,396,46),(578,397,38),(579,397,46),(580,398,51),(581,399,51),(582,400,51),(583,400,46),(584,401,47),(585,402,47),(586,403,41),(587,404,41),(588,405,41),(589,406,38),(590,407,38),(591,408,38),(592,409,39),(593,410,39),(594,411,39),(595,412,37),(596,413,37),(597,414,37),(598,414,46),(599,415,37),(600,415,46),(601,416,48),(602,416,46),(603,417,48),(604,417,46),(605,418,48),(606,418,44),(607,419,48),(608,419,44),(609,420,44),(610,420,46),(611,421,39),(612,421,40),(613,422,39),(614,422,40),(615,423,40),(616,424,54),(617,425,37),(618,425,54),(619,426,54),(620,427,54),(621,427,46),(622,428,47),(623,428,46),(624,429,47),(625,429,46),(626,430,40),(627,431,40),(628,432,40),(629,433,41),(630,434,39),(631,434,54),(632,435,39),(633,435,54),(634,436,49),(635,437,39),(636,438,41),(637,438,46),(638,439,41),(639,439,46),(640,440,41),(641,440,46),(642,441,37),(643,442,41),(644,443,41),(645,444,48),(646,444,46),(647,445,39),(648,445,45),(649,446,39),(650,446,45),(651,447,47),(652,448,52),(653,449,52),(654,449,46),(655,450,39),(656,450,47),(657,451,50),(658,452,47),(659,453,47),(660,454,37),(661,454,47),(662,455,48),(663,456,48),(664,456,53),(665,457,37),(666,458,45),(667,458,46),(668,459,53),(669,459,45),(670,460,54),(671,461,54),(672,462,39),(673,462,44),(674,463,48),(675,463,53),(676,464,48),(677,464,49),(678,465,48),(679,465,43),(680,466,52),(681,466,42),(682,467,37),(683,468,37),(684,469,38),(685,470,38),(686,470,49),(687,471,42),(688,471,45),(689,472,42),(690,472,45),(691,473,39),(692,473,49),(693,474,39),(694,475,39),(695,476,42),(696,476,46),(697,477,39),(698,477,46),(699,478,53),(700,478,46),(701,479,52),(702,479,38),(703,480,52),(704,480,38),(705,481,39),(706,481,51),(707,482,45),(708,483,45),(709,484,37),(710,485,37),(711,486,37),(712,487,43),(713,488,43),(714,489,42),(715,489,47),(716,490,40),(717,491,38),(718,492,37),(719,493,37),(720,494,40),(721,495,38),(722,496,39),(723,497,49),(724,497,45),(725,498,49),(726,498,45),(727,499,49),(728,499,52),(729,500,47),(730,500,46),(731,501,38),(732,501,46),(733,502,47),(734,502,41);
/*!40000 ALTER TABLE `pokemontype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `NoDamageTo` varchar(255) NOT NULL DEFAULT '',
  `HalfDamageTo` varchar(255) NOT NULL DEFAULT '',
  `DoubleDamageTo` varchar(255) NOT NULL DEFAULT '',
  `NoDamageFrom` varchar(255) NOT NULL DEFAULT '',
  `HalfDamageFrom` varchar(255) NOT NULL DEFAULT '',
  `DoubleDamageFrom` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (37,'normal','50','49;53','','50','','43'),(38,'fire','','49;38;39;51','48;53;41;42','','48;53;38;41;42;54','45;49;39'),(39,'water','','39;41;51','45;49;38','','53;38;39;42','41;40'),(40,'electric','45','41;40;51','46;39','','46;53;40','45'),(41,'grass','','46;44;48;53;38;41;51','45;49;39','','45;39;41;40','46;44;48;38;42'),(42,'ice','','53;38;39;42','46;45;41;51','','42','43;49;53;38'),(43,'fighting','50','46;44;48;47;54','37;49;53;42;52','','49;48;52','46;47;54'),(44,'poison','53','44;45;49;50','41;54','','43;44;48;41;54','45;47'),(45,'ground','46','48;41','44;49;53;38;40','40','44;49','39;41;42'),(46,'flying','','49;53;40','43;48;41','45','43;48;41','49;40;42'),(47,'psychic','52','53;47','43;44','','43;47','48;50;52'),(48,'bug','','43;46;44;50;53;38;54','41;47;52','','43;45;41','46;49;38'),(49,'rock','','43;45;53','46;48;38;42','','37;46;44;38','43;45;53;39;41'),(50,'ghost','37','52','50;47','37;43','44;48','50;52'),(51,'dragon','54','53','51','','38;39;41;40','42;51;54'),(52,'dark','','43;52;54','50;47','47','50;52','43;48;54'),(53,'steel','','53;38;39;40','49;42;54','44','37;46;49;48;53;41;47;42;51;54','43;45;38'),(54,'fairy','','44;53;38','43;51;52','51','43;48;52','44;53');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-14  0:09:21
