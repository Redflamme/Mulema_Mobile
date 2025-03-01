-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 17 fév. 2025 à 04:24
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `mulemaap_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `language`
--

DROP TABLE IF EXISTS `language`;
CREATE TABLE IF NOT EXISTS `language` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `video_intro` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `language`
--

INSERT INTO `language` (`id`, `nom`, `description`, `video_intro`) VALUES
(1, 'Duálá', '', ''),
(2, 'Bassa', '', ''),
(3, 'Ghomálá', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `id_langue` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_users_language` (`id_langue`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`, `created_at`, `id_langue`) VALUES
(1, 'dycathecorde@gmail.com', 'DyCathecode', '$2b$10$QkI4U9404zoNGyIMT6Nw2OXrHMjAQHUT37DKPV/NWwNmW9AJFBR6y', '2025-02-15 07:21:10', 1),
(2, 'juniorsineno@gmail.com', 'etend', '$2b$10$rA30Z8FWKSjQ.fiBHIIpSu3n.06sEuXnPX/kpnTswpTu.Mvbt5WEC', '2025-02-15 13:51:34', 1),
(3, 'test@gmail.com', 'tester', '$2b$10$rGcGJqaYsEd4XiFKutPev.pXniyETFUqlkBtS3aLKAhD1qVefpxw2', '2025-02-16 20:14:29', NULL),
(4, 'test1@gmail.com', 'tester1', '$2b$10$slJBzxe1VoYpWVgQbvSGQeTxCW.D9or6I6elXH/6DGc1H8aeTd8OG', '2025-02-16 20:54:11', NULL),
(5, 'testf1@gmail.com', 'tester1f', '$2b$10$i4AGktFB87i6JIc4eLopDuBDOLJeFjVf6VYKAG/Kye7Ex6gB0VBqy', '2025-02-16 21:12:49', NULL),
(6, 'testf1d@gmail.com', 'tester1fd', '$2b$10$nFezmXvGezjNRpeFa.fBc.ZbSkzLFsVnLs0k93z2ZFXKtzzc5hneu', '2025-02-16 21:41:46', NULL),
(7, 'testf1da@gmail.com', 'tester1fda', '$2b$10$nB1a1G82LZ0rnk9JYR9kQu0uUaewoRUvnCJCF1GDLsYdHTgTusvN2', '2025-02-16 21:43:56', NULL),
(8, 'juniorsinenod@gmail.com', 'Takougoum Sineno Juniord', '$2b$10$WezTTY3UfpZMyN7J0Ve2wOV2DfL1vya7RbTRCvboErab.bi.kyhQq', '2025-02-17 01:13:36', NULL),
(9, 'xdycathecorde@gmail.com', 'dycathecorde', '$2b$10$kLv5.7DDR45TzoKm.20xXuhBWc7NHdfXRjP/KOYWuwFuNsXsWdKjO', '2025-02-17 01:19:50', NULL),
(10, 'xdycadthecorde@gmail.com', 'dycathecorded', '$2b$10$.JBgExbZ8e2TmqwLGr8bnudYms7DeLPpp0ZiuXudmJIGLt9JfbM66', '2025-02-17 01:21:11', NULL),
(11, 'juniorsinffenod@gmail.com', 'dycatheffcorde@gmail.com', '$2b$10$bjw5jJjOhlFLW6JwMPpREOqWzIgLzofZmmgz/uFSJC8ksCIRuQ4gG', '2025-02-17 01:22:11', NULL),
(12, 'juniorsinffenodd@gmail.com', 'dycatheffcodrde@gmail.com', '$2b$10$2RpaP4f1Y5oswKs9HcupleKPi24WZ42dreRdZZQH48eDHibd1Evki', '2025-02-17 01:26:10', NULL),
(13, 'juniorsinendddo@gmail.com', 'dycatheffcodrd', '$2b$10$9FW8m3rZUPO9.lo1/7W66OngkjkmtT3jhnc0UdlW9eoNwN7IzaiRu', '2025-02-17 01:56:53', NULL),
(14, 'juniorsinenox@gmail.com', 'jj', '$2b$10$DtRNAwe8IzJV1WuLHXCEue02OakFaQQb8LuMPt1sT3yfKt3Sv0f.a', '2025-02-17 01:59:49', NULL),
(15, 'anabel@gmail.com', 'ana', '$2b$10$JSHaOZCZjGumnufEwx9/UO8l4sljUlZTvnUZHjkSo4BHpnpFeZ6.C', '2025-02-17 02:46:11', 1),
(16, 'test22@gmail.com', 'test22', '$2b$10$.M6APKHtXMRv6D88cxdzBupExBwDINCVIjm2D9zIuH8Qw3wSUmHlO', '2025-02-17 04:16:13', NULL),
(17, 'test2p2@gmail.com', 'test22i', '$2b$10$OQE0kNWdVHQwhJhpxYRs6eIw3B7EzwxW8zg3JIUkN720s/mQRlnYK', '2025-02-17 04:20:32', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
