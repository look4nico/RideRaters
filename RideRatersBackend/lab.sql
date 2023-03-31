CREATE DATABASE `lab`;
USE `lab`;

CREATE TABLE `users` (
  `id` int(11) AUTO_INCREMENT,
  `username` varchar(255),
  `password` varchar(255),
  `profileimage` BLOB,
  PRIMARY KEY(`id`)
);

CREATE TABLE `ridelist` (
  `ridelistid` int(11) AUTO_INCREMENT,
  `listname` varchar(255),
  `userid` varchar(255),
  PRIMARY KEY(`ridelistid`)
);

CREATE TABLE `ridelistdetails` (
  `ridelistid` int(11) AUTO_INCREMENT,
  `rideid` varchar(255),
  PRIMARY KEY(`ridelistid`)
);

CREATE TABLE `rides` (
  `id` int(11) AUTO_INCREMENT,
  `name` varchar(255),
  `description` varchar(2000),
  `location` varchar(255),
  `image` varchar(255),
  `parkid` varchar(255),
  `website` varchar(500),
  PRIMARY KEY(`id`)
);

CREATE TABLE `comments` (
  `commentid` int(11) AUTO_INCREMENT,
  `userid` varchar(255),
  `rideid` varchar(255),
  `comment` varchar(5000),
  `date` varchar(255),
  PRIMARY KEY(`commentid`)
);

CREATE TABLE `parks` (
  `parkid` int(11) AUTO_INCREMENT,
  `parkname` varchar(255),
  `location` varchar(255),
  `description` varchar(2000),
  `website` varchar(250),
  PRIMARY KEY(`parkid`)
);

CREATE TABLE `reviews` (
  `reviewid` int(11) AUTO_INCREMENT,
  `userid` varchar(255),
  `rideid` varchar(255),
  `rating` varchar(255),
  `recommend` varchar(255),
  `notes` varchar(5000),
  `date` varchar(255),
  PRIMARY KEY(`reviewid`)
);

INSERT INTO `users` (`id`, `username`, `password`, `profileimage`) VALUES
(1, 'dan', '$2y$10$jhSIk2N5BnkEEzgEBWQDw.AUQIEcrH8V0AcNLfW2nkjTAH2WgAAlW', '');