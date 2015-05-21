# ************************************************************
# Sequel Pro SQL dump
# Version 4135
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.5.42)
# Database: angularjs
# Generation Time: 2015-05-14 12:11:11 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table leo_article
# ------------------------------------------------------------

DROP TABLE IF EXISTS `leo_article`;

CREATE TABLE `leo_article` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `content` text,
  `addtime` int(10) NOT NULL,
  `typeid` tinyint(3) unsigned DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

LOCK TABLES `leo_article` WRITE;
/*!40000 ALTER TABLE `leo_article` DISABLE KEYS */;

INSERT INTO `leo_article` (`id`, `title`, `content`, `addtime`, `typeid`)
VALUES
	(2,'Joan','2222',0,3),
	(3,'Wang','3333',0,3),
	(6,'a','a',1431314306,2),
	(7,'a','a',1431329397,2),
	(8,'a','a',1431329400,2),
	(9,'3333','3333333333',1431332864,1),
	(10,'123','123',1431421528,1),
	(11,'加拿大阿尔伯塔省教育厅检察官莅临青岛五十八中','加拿大阿尔伯塔省教育厅检察官Karen Slevinsky将于2015年5月15日到访青岛，对青岛五十八中北美国际课程班进行开学前最后一轮视察，以确保各项工作准备就绪。2015年5月16日上午9点青岛五十八中将会在学校办公楼报告厅举行北美国际课程班的专场报告以及答疑会。感兴趣的学生和家长可前来参加，了解更多有关青岛五十八中北美国际课程班的相关信息。\n\n 经青岛市教育局审核论证批准，青岛五十八中与加拿大阿尔伯塔省教育厅、美国大学理事会合作，开设“北美国际课程班”，教授山东省高中课程、加拿大阿尔伯塔省高中课程，有能力的学生可在高三年级选学AP课程。根据《青岛市教育局关于做好2015年全市初中学生学业考试与普通高中招生工作的通知》（青教通字【2015】17号）文件的规定，我校今年面向青岛市内三区应届初中毕业生招收“北美国际课程班”1个，招生人数40左右，志愿代码：582。\n\n 加拿大阿尔伯塔省拥有丰富的石油和天然气，储量仅次于科威特。在过去10年之间，阿省每年平均的经济成长率达 3.5%，是全加拿大经济成长率最高的省份，也是加拿大国民生产总值最高的省份。该省的人均国民生产总值为74,825加元，为加拿大全国最高，并且高出全国平均水平61%（46,441加元）。阿尔伯塔省是加拿大最富有的省份。',1431421658,1),
	(12,'a','b',1431600953,1),
	(13,'Windows 10有7个版本 分别面向不同用户、设备','凤凰科技讯 北京时间5月14日消息，据科技网站VentureBeat报道，微软今天宣布Windows 10将发售至少7个版本，它们是家庭版(Home)、移动版(Mobile)、专业版(Pro)、企业版(Enterprise)、教育版(Education)、移动企业版(Mobile Enterprise)和物联网核心版(IoT Core)。\n\n微软再次强调，Windows 10将针对广泛的设备进行优化——其中包括PC、平板电脑、手机、物联网、Xbox One、HoloLens和Surface Hub。尽管有多达7个版本，但微软承诺用户将能访问“一个单一、通用的Windows Store”，发现、试用和购买通用Windows应用。\n\n以下为7个Windows 10版本简介：\n\nWindows 10家庭版面向使用PC、平板电脑和二合一设备的消费者。它将拥有Windows 10的主要功能：Cortana语音助手(选定市场)、Edge浏览器、面向触控屏设备的Continuum平板电脑模式、Windows Hello(脸部识别、虹膜、指纹登录)、串流Xbox One游戏的能力、微软开发的通用Windows应用(Photos、Maps、Mail、Calendar、Music和Video)。\n\nWindows 10移动版面向尺寸较小、配置触控屏的移动设备，例如智能手机和小尺寸平板电脑，集成有与Windows 10家庭版相同的通用Windows应用和针对触控操作优化的Office。部分新设备可以使用Continuum功能，因此连接外置大尺寸显示屏时，用户可以把智能手机用作PC。\n\nWindows 10专业版面向使用PC、平板电脑和二合一设备的企业用户。除具有Windows 10家庭版的功能外，它还使用户能管理设备和应用，保护敏感的企业数据，支持远程和移动办公，使用云计算技术。另外，它还带有Windows Update for Business，微软承诺该功能可以降低管理成本、控制更新部署，让用户更快地获得安全补丁软件。\n\nWindows 10企业版以专业版为基础，增添了大中型企业用来防范针对设备、身份、应用和敏感企业信息的现代安全威胁的先进功能，供微软的批量许可(Volume Licensing)客户使用，用户能选择部署新技术的节奏，其中包括使用Windows Update for Business的选项。作为部署选项，Windows 10企业版将提供长期服务分支(Long Term Servicing Branch)。\n\nWindows 10教育版以Windows 10企业版为基础，面向学校职员、管理人员、教师和学生。它将通过面向教育机构的批量许可计划提供给客户，学校将能够升级Windows 10家庭版和Windows 10专业版设备。',1431601651,2),
	(14,'aaa','aaa',1431603108,2),
	(15,'aaa','aaa',1431603462,2),
	(16,'ttt','ttt',1431604249,1),
	(17,'aa','aaaa',1431605111,2),
	(18,'setTimeout和setInterval的区别','setTimeout(a(),500),在500毫秒后只执行1次方法a()，而setInterval(a(),500)是每隔500秒执行一次\n方法a()。也就是说如果不把前者放在循环里，就不能实现后者的循环功能。\n    怎样循环调用setTimeout(a(),500)方法来来实现setInterval(a(),500)的功能呢？\n    比如：function a(){\n             .......                  //其它代码\n             setTimeout(\'a()\',5000);  //5秒后运行a()函数\n          }\n    两个方法能实现同样的效果，但是还是有区别的。\n    假设需要10秒时间运行a()方法里的其它代码，也就是说第一次运行至代码setTimeout(\'a()\',5000)需要10秒。之后5秒钟再次运行a()方法，则第二次运行至代码setTimeout(\'a()\',5000)需要25秒。   \n    若用setInterval(a(),5000)，不管a()方法需要多少时间运行，都是每隔5秒运行一次。\n    那什么时候用setTimeout？什么时候用setInterval？\n    如果不希望连续调用产生互相干扰的状况就用前者，如果希望每隔固定时间精确的执行某个动作就用后者。具体情况还是要具体分析的。',1431605275,1);

/*!40000 ALTER TABLE `leo_article` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
