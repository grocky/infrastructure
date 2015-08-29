DROP DATABASE IF EXISTS rockygray;

CREATE DATABASE IF NOT EXISTS `rockygray` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
GRANT ALL ON `rockygray`.* to 'php'@'localhost' IDENTIFIED BY 'tlZyNV^Bi61,hDagdTJV';
GRANT ALL ON `rockygray`.* to 'php'@'127.0.0.1' IDENTIFIED BY 'tlZyNV^Bi61,hDagdTJV';

FLUSH PRIVILEGES;

DROP DATABASE IF EXISTS rockygray_test ;

CREATE DATABASE IF NOT EXISTS `rockygray_test` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
GRANT ALL ON `rockygray_test`.* to 'php'@'localhost' IDENTIFIED BY 'tlZyNV^Bi61,hDagdTJV';
GRANT ALL ON `rockygray_test`.* to 'php'@'127.0.0.1' IDENTIFIED BY 'tlZyNV^Bi61,hDagdTJV';

FLUSH PRIVILEGES;

USE `rockygray`;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO,STRICT_TRANS_TABLES";
SET time_zone = "-04:00"; /* Note this only sets timezone for the current connection; -04:00 is EDT */
