-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2023 at 06:59 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lab`
--
CREATE DATABASE IF NOT EXISTS `lab` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `lab`;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `commentid` int(11) NOT NULL,
  `userid` varchar(255) DEFAULT NULL,
  `rideid` varchar(255) DEFAULT NULL,
  `comment` varchar(5000) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `parks`
--

CREATE TABLE `parks` (
  `parkid` int(11) NOT NULL,
  `parkname` varchar(255) DEFAULT NULL,
  `parklocation` varchar(255) DEFAULT NULL,
  `parkdescription` varchar(2000) DEFAULT NULL,
  `parkWebSite` varchar(500) DEFAULT NULL,
  `parkimagepath` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `parks`
--

INSERT INTO `parks` (`parkid`, `parkname`, `parklocation`, `parkdescription`, `parkWebSite`, `parkimagepath`) VALUES
(1, 'Busch Gardens', 'Tampa, FL', 'Busch Gardens is one of America\\u2019s largest zoological institutions, with 335 acres (136 ha) and more than 2,700 animals.', 'https://buschgardens.com/tampa/', 'media/imgs/parks/busch-gardens.png'),
(2, 'Disney\'s Animal Kingdom', 'Lake Buena Vista, FL', 'Disney\\u2019s Animal Kingdom distinguishes itself from the rest of Walt Disney World\\u2019s theme parks by featuring traditional attractions as well as hundreds of species of live animals.', 'https://disneyworld.disney.go.com/destinations/animal-kingdom/', 'media/imgs/parks/disney-animal-kingdom.jpg'),
(3, 'Disney\'s EPCOT', 'Lake Buena Vista, FL', 'Epcot is dedicated to the celebration of human achievement, namely technological innovation and international culture.', 'https://disneyworld.disney.go.com/destinations/epcot/', 'media/imgs/parks/disney-epcot.jpg'),
(4, 'Disney\'s Hollywood Studios', 'Lake Buena Vista, FL', 'Disney\'s Hollywood Studios was initially developed as both a theme park inspired by show business and an operating production studio.', 'https://disneyworld.disney.go.com/destinations/hollywood-studios/', 'media/imgs/parks/disney-hollywood-studios.jpg'),
(5, 'Disney\'s Magic Kingdom', 'Lake Buena Vista, FL', 'The park is represented by Cinderella Castle, inspired by the fairy tale castle featured in the 1950 film', 'https://disneyworld.disney.go.com/destinations/magic-kingdom/', 'media/imgs/parks/disney-magic-kingdom.jpg'),
(6, 'Legoland', 'Winter Haven, FL', 'Designed for families with children ages 2 to 12, the park has more than fifty rides, shows, attractions, restaurants, and shops.', 'https://www.legoland.com/florida/', 'media/imgs/parks/legoland.jpg'),
(7, 'SeaWorld', 'Orlando, FL', 'SeaWorld Orlando functions both as theme park and marine zoological park.', 'https://seaworld.com/orlando/', 'media/imgs/parks/seaworld.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `PostID` int(5) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Content` varchar(2500) NOT NULL,
  `UserID` varchar(20) NOT NULL,
  `date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`PostID`, `Name`, `Content`, `UserID`, `Date`) VALUES
(1, 'test post', 'testibg testing testing testing', 'hello', '2022-04-29'),
(2, 'frmn', 'hi my posgftvgyhu', 'yes', '0000-00-00'),
(3, 'Final', 'Content', 'yes', '0000-00-00'),
(4, 'Saturday Plans', 'Complete assignment and then do other things including eating and sleeping and such activities. ', 'yes', '0000-00-00'),
(5, 'Sunday Plans', 'We should go to the movies perhaps.', 'yes', '2022-04-30');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `reviewid` int(11) NOT NULL,
  `userid` varchar(255) DEFAULT NULL,
  `rideid` varchar(255) DEFAULT NULL,
  `rating` varchar(255) DEFAULT NULL,
  `recommend` varchar(255) DEFAULT NULL,
  `notes` varchar(5000) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ridelist`
--

CREATE TABLE `ridelist` (
  `ridelistid` int(11) NOT NULL,
  `listname` varchar(255) DEFAULT NULL,
  `userid` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ridelistdetails`
--

CREATE TABLE `ridelistdetails` (
  `ridelistid` int(11) NOT NULL,
  `rideid` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rideratings`
--

CREATE TABLE `rideratings` (
  `userid` varchar(255) NOT NULL,
  `rideid` varchar(255) NOT NULL,
  `ridename` varchar(255) DEFAULT NULL,
  `rating` int(1) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rideratings`
--

INSERT INTO `rideratings` (`userid`, `rideid`, `ridename`, `rating`, `date`) VALUES
('1', '1', 'Air Grover', 5, '2023-04-11 12:51:39'),
('1', '2', 'Cheetah Hunt', 5, '2023-04-09 20:00:47'),
('1', '3', 'Cobra\'s Curse', 5, '2023-04-09 20:01:01'),
('1', '4', 'Avatar Flight of Passage', 5, '2023-04-09 20:01:08'),
('1', '5', 'DINOSAUR', 4, '2023-04-09 17:13:06'),
('2', '1', 'Air Grover', 4, '2023-04-09 20:01:54'),
('2', '2', 'Cheetah Hunt', 4, '2023-04-09 20:01:49'),
('2', '3', 'Cobra\'s Curse', 2, '2023-04-09 20:01:39'),
('2', '4', 'Avatar Flight of Passage', 2, '2023-04-09 20:01:34'),
('2', '5', 'DINOSAUR', 5, '2023-04-09 20:02:25'),
('3', '1', 'Air Grover', 3, '2023-04-09 17:15:02'),
('3', '2', 'Cheetah Hunt', 3, '2023-04-09 17:15:07'),
('3', '3', 'Cobra\'s Curse', 3, '2023-04-09 17:15:13'),
('3', '4', 'Avatar Flight of Passage', 5, '2023-04-09 17:14:52'),
('3', '5', 'DINOSAUR', 2, '2023-04-09 20:02:38'),
('4', '1', 'Air Grover', 3, '2023-04-09 17:16:07'),
('4', '2', 'Cheetah Hunt', 3, '2023-04-09 17:16:15'),
('4', '3', 'Cobra\'s Curse', 3, '2023-04-09 17:16:20'),
('4', '4', 'Avatar Flight of Passage', 3, '2023-04-09 17:16:24');

--
-- Triggers `rideratings`
--
DELIMITER $$
CREATE TRIGGER `OnDeleteUpdateRidesTable` AFTER DELETE ON `rideratings` FOR EACH ROW update rides 
set averagerating = (select round(avg(rating),2)  from rideratings where rideid = old.rideid),
   ratingcount = (select count(*) from rideratings where rideid = old.rideid)
 where rideid = old.rideid
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `OnInsertRideRating` BEFORE INSERT ON `rideratings` FOR EACH ROW set new.ridename = (select ridename from rides where rideid = new.rideid)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `OnInsertUpdateRidesTable` AFTER INSERT ON `rideratings` FOR EACH ROW update rides 
set averagerating = (select round(avg(rating),2)  from rideratings where rideid = new.rideid),
   ratingcount = (select count(*) from rideratings where rideid = new.rideid)
 where rideid = new.rideid
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `OnUpdateUpdateRidesTable` AFTER UPDATE ON `rideratings` FOR EACH ROW update rides 
set averagerating = (select round(avg(rating),2)  from rideratings where rideid = new.rideid),
   ratingcount = (select count(*) from rideratings where rideid = new.rideid)
 where rideid = new.rideid
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `rides`
--

CREATE TABLE `rides` (
  `rideid` int(11) NOT NULL,
  `ridename` varchar(255) DEFAULT NULL,
  `ridedescription` varchar(2000) DEFAULT NULL,
  `ridelocation` varchar(255) DEFAULT NULL,
  `rideimagepath` varchar(500) DEFAULT NULL,
  `parkid` varchar(255) DEFAULT NULL,
  `rideWebSite` varchar(500) DEFAULT NULL,
  `averagerating` decimal(4,2) DEFAULT NULL,
  `ratingcount` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rides`
--

INSERT INTO `rides` (`rideid`, `ridename`, `ridedescription`, `ridelocation`, `rideimagepath`, `parkid`, `rideWebSite`, `averagerating`, `ratingcount`) VALUES
(1, 'Air Grover', 'Add to the excitement with this junior coaster set within the Sesame Street Safari of Fun area.', 'Tampa, FL', 'media/imgs/ride-imgs/AirGrover4_357x22.jpg', NULL, 'https://buschgardens.com/tampa/roller-coasters/air-grover/', '3.75', 4),
(2, 'Cheetah Hunt', 'This triple launch roller coaster carries riders high above the park, then races down along the ground through a rocky gorge. At a length of 4,400 feet, Cheetah Hunt® is the park’s longest thrill ride attraction!', 'Tampa, FL', 'media/imgs/ride-imgs/Cheetah_Hunt2_357x22.jpg', NULL, 'https://buschgardens.com/tampa/roller-coasters/cheetah-hunt/', '0.00', 0),
(3, 'Cobra’s Curse', 'Change your ride by changing who you ride with on this thrilling steel serpent. This one-of-a-kind roller coaster features a menacing 30,000-pound snake king and a 70-foot vertical lift that will take riders within inches of its 3 foot-wide eyes and 4-foot-long fangs.', 'Tampa, FL', 'media/imgs/ride-imgs/CobrasCurse_Listing.png', NULL, 'https://buschgardens.com/tampa/roller-coasters/cobras-curse/', '0.00', 0),
(4, 'Congo River Rapids', 'Climb aboard and enjoy a refreshing splash – or get seriously soaked. This expedition will send you twirling down a racing river through Congo, so get ready to get soaked!', 'Tampa, FL', 'media/imgs/ride-imgs/CongoRiverRapids_357x229.png', NULL, 'https://buschgardens.com/tampa/rides/congo-river-rapids/', '0.00', 0),
(5, 'Falcon’s Fury', 'The height Falcon’s Fury® reaches offers an incredible view stretching well past downtown Tampa and encompassing all of Busch Gardens. The ride takes about a minute until riders get to its peak, giving plenty of time to enjoy the landscape.', 'Tampa, FL', 'media/imgs/ride-imgs/FalconsFury_357x229.jpg', NULL, 'https://buschgardens.com/tampa/rides/falcons-fury/', '0.00', 0),
(6, 'Iron Gwazi', 'Iron Gwazi takes thrills to new heights, plunging riders from a 206 foot-tall peak into a 91-degree drop and reaching top speeds of 76 miles per hour.', 'Tampa, FL', 'media/imgs/ride-imgs/IronGwazi_ListingImage_GoldenTicket.png', NULL, 'https://buschgardens.com/tampa/roller-coasters/iron-gwazi/', '0.00', 0),
(7, 'Kumba', 'Touting one of the world’s largest vertical loops, enthusiasts have consistently voted Kumba®, one of the world’s best roller coasters! It is said that if you can hear the roar of a lion in the distance, you have crossed into his territory.', 'Tampa, FL', 'media/imgs/ride-imgs/Kumba_ListingImage.png', NULL, 'https://buschgardens.com/tampa/roller-coasters/kumba/', '0.00', 0),
(8, 'Montu', 'Climb high into the air and hold on for a twisting drop, a 60-foot vertical loop, an Immelmann loop and a weightless roll and that’s only the beginning on this inverted roller coaster.', 'Tampa, FL', 'media/imgs/ride-imgs/Montu_LiftListingImage_357x2.jpg', NULL, 'https://buschgardens.com/tampa/roller-coasters/montu/', '0.00', 0),
(9, 'Sand Serpent', 'Families will love the curves, drops, and corkscrews of this &quot;wild-mouse&quot; style roller coaster located in the Pantopia® area of the park. SandSerpent is a fun-filled family coaster that zips, zooms and climbs five stories into the air before bringing riders back down in a roar of laughter.', 'Tampa, FL', 'media/imgs/ride-imgs/Sand_Serpent_357x229.jpg', NULL, 'https://buschgardens.com/tampa/roller-coasters/sandserpent/', '0.00', 0),
(10, 'Scorpion', 'The Scorpion® is one of only three roller coasters of its kind remaining in the world today, yet its sting is every bit as effective at instilling thrills through every twist and turn. Scorpion pulls you through a 360 degree loop and speeds of 50 miles per hour!', 'Tampa, FL', 'media/imgs/ride-imgs/Scorpion2_ListingIm.jpg', NULL, 'https://buschgardens.com/tampa/roller-coasters/scorpion/', '0.00', 0),
(11, 'Serengeti Express', 'A ride on the Serengeti Express Train is one of the best ways to take in the breathtaking beauty and scale of Busch Garden’s Serengeti Plain®.', 'Tampa, FL', 'media/imgs/ride-imgs/SerengetiRailway2_357x229.jpg', NULL, 'https://buschgardens.com/tampa/rides/serengeti-express-train/', '0.00', 0),
(12, 'SheiKra', 'Climb 200 feet to the edge of a 90-degree drop that inches you mercilessly over the edge—and stops. Then surrender to speed as you dive straight down into a 70 mph roller coaster.', 'Tampa, FL', 'media/imgs/ride-imgs/SheiKra_357x229.jpg', NULL, 'https://buschgardens.com/tampa/roller-coasters/sheikra/', '0.00', 0),
(13, 'Skyride', 'Take in beautiful views of roller coasters and the animals in our care as you cross our lush park from the comfort of your Skyride cable car, that runs between Egypt and Congo on the opposite side of the park.', 'Tampa, FL', 'media/imgs/ride-imgs/SkyRide2_357x229.jpg', NULL, 'https://buschgardens.com/tampa/rides/skyride/', '0.00', 0),
(14, 'Stanley Falls Flume', 'Catch a current of fun aboard the Stanley Falls Flume®, Busch Gardens Tampa Bay’s family-friendly log flume ride that’s perfect for younger guests. The ride twists and turns through a lush jungle before diving toward a final 40-foot splashdown. If you’re looking for a great way to cool off on a hot day, this is the ride for you!', 'Tampa, FL', 'media/imgs/ride-imgs/Stanley_Falls_357x2.png', NULL, 'https://buschgardens.com/tampa/rides/stanley-falls/', '0.00', 0),
(15, 'Tigris', 'Catapult through an exhilarating array of looping twists with forward and backward motion and breath-taking drops', 'Tampa, FL', 'media/imgs/ride-imgs/Tigris_1900x700.jpg', NULL, 'https://buschgardens.com/tampa/roller-coasters/tigris/', '0.00', 0),
(16, 'Wild Surge', 'Launch out of a 35-foot mountain crater up above a towering waterfall for a thrilling view of Jungala’s® village below. Look out for the gibbons and flying foxes as they soar pass the adjacent animal habitats!', 'Tampa, FL', 'media/imgs/ride-imgs/WildSurge1_357x229.jpg', NULL, 'https://buschgardens.com/tampa/rides/wild-surge/', '0.00', 0),
(17, 'Avatar Flight of Passage', 'Climb atop a winged mountain banshee for a breathtaking 3D flight over Pandora’s otherworldly landscape.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/AVATAR-flight-of-passage-in-ride.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/animal-kingdom/avatar-flight-of-passage/', '0.00', 0),
(18, 'DINOSAUR', 'Travel back in time on a perilous prehistoric race to rescue a dinosaur—before the meteor strikes.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/dinosaur.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/animal-kingdom/dinosaur/', '0.00', 0),
(19, 'Expedition Everest', 'Careen through icy Himalayan peaks on a speeding train while avoiding the clutches of the mythic Yeti.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/expedition-everest-day.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/animal-kingdom/expedition-everest/', '0.00', 0),
(20, 'Kali River Rapids', 'Set out on a thrilling whitewater adventure through a lush jungle in the heart of Asia.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/kali-river-rapids.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/animal-kingdom/kali-river-rapids/', '0.00', 0),
(21, 'Kilimanjaro Safaris', 'Set off in an open-air vehicle for a guided tour of an African savanna—and spot live animals roaming free.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/kilimanjaro-safaris.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/animal-kingdom/kilimanjaro-safaris/', '0.00', 0),
(22, 'Na’vi River Journey', 'Take a mystical journey by boat deep into Pandora’s glowing bioluminescent rainforest.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/pandora-navi-river-journey-full-boat.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/animal-kingdom/navi-river-journey/', '0.00', 0),
(23, 'TriceraTop Spin', 'Fly high on a dinosaur around a twirling tin-toy top at this delightful carnival-inspired attraction.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/tricera-top-spin.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/animal-kingdom/tricera-top-spin/', '0.00', 0),
(24, 'Wildlife Express Train', 'Cross the African savanna on a rustic locomotive for a behind-the-scenes look at the park’s animals.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/wildlife-express-train.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/animal-kingdom/wildlife-express-train/', '0.00', 0),
(25, 'Frozen Ever After', 'Voyage to Arendelle aboard an ancient Nordic vessel as you take a musical tour of the wintery world of Frozen.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/frozen-ever-after-olaf-anna-elsa.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/epcot/frozen-ever-after/', '0.00', 0),
(26, 'Gran Fiesta Tour Starring The Three Caballeros', 'Take in the sights of Mexico and the antics of 3 feathered amigos on this gentle boat ride through the Mexico Pavilion.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/gran-fiesta-tour-starring-three-caballeros.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/epcot/gran-fiesta-tour-starring-three-caballeros/', '0.00', 0),
(27, 'Guardians of the Galaxy: Cosmic Rewind', 'Take off on an intergalactic chase through space and time with the Guardians of the Galaxy.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/guardians-of-the-galaxy.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/epcot/guardians-of-the-galaxy-cosmic-rewind/', '0.00', 0),
(28, 'Journey Into Imagination With Figment', 'Figment the playful dragon is your guide on this delightful ride through the sensory labs of Imagination Institute.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/journey-into-imagination-with-figment.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/epcot/journey-into-imagination-with-figment/', '0.00', 0),
(29, 'Living With The Land', 'Cruise past greenhouses on a gentle boat tour and discover the surprising history of farming.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/living-with-the-land.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/epcot/living-with-the-land/', '0.00', 0),
(30, 'Mission: SPACE', 'Blast off on a thrilling simulated NASA-style mission to Mars—or orbit the Earth on a more gentle ride through space.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/mission-space.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/epcot/mission-space/', '0.00', 0),
(31, 'Remy’s Ratatouille Adventure', 'Feel like you’ve shrunk down to Chef Remy’s size for a 4D culinary adventure based on the Disney and Pixar film Ratatouille. When you’re small, life is a big adventure!', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/remy-RatatouilleKV.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/epcot/remys-ratatouille-adventure/', '0.00', 0),
(32, 'Soarin$ Around the World', 'Take flight on a breezy, airborne adventure as you hang glide above the breathtaking wonders of the world.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/soarin.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/epcot/soarin-around-world/', '0.00', 0),
(33, 'Spaceship Earth', 'Travel through time and explore the remarkable history of human communication from the Stone Age to the computer age.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/spaceship-earth.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/epcot/spaceship-earth/', '0.00', 0),
(34, 'Test Track', 'Design a virtual concept car and put it to the test on this thrilling, high-octane attraction.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/test-track-presented-by-chevrolet.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/epcot/test-track/', '0.00', 0),
(35, 'The Seas With Nemo &amp; Friends', 'Go under the sea—without getting wet—on this gentle ride based on Disney and Pixar’s Finding Nemo, which finds Nemo lost again.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/the-seas-with-nemo-and-friends.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/epcot/seas-with-nemo-and-friends/', '0.00', 0),
(36, 'Alien Swirling Saucers', 'Power up the saucers for an interstellar romp through space, while futuristic tunes set the mood. Space cadets of all ages may enjoy this gentle whirl through the sky above Toy Story Land.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/aliens-swirliing-saucers-entrance.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/hollywood-studios/alien-swirling-saucers/', '0.00', 0),
(37, 'Millennium Falcon: Smugglers Run', 'Ride in the famous cockpit of the Millennium Falcon on a daring flight—and whether you’re a pilot, engineer or gunner, every role is crucial.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/millennium-smugglers-run-interior.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/hollywood-studios/millennium-falcon-smugglers-run/', '0.00', 0),
(38, 'Rock ‘n’ Roller Coaster Starring Aerosmith', 'Race along the darkened freeways of Los Angeles in a super-stretch limo to the rockin$ tunes of Aerosmith.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/rock-and-roller-coaster-starring-aerosmith.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/hollywood-studios/rock-and-roller-coaster-starring-aerosmith/', '0.00', 0),
(39, 'Slinky Dog Dash', 'Take off on a family-friendly coaster that twists and turns past giant toys and springs across Andy’s oversized backyard!', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/slinky-dog-ride.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/hollywood-studios/slinky-dog-dash/', '0.00', 0),
(40, 'Star Tours: The Adventures Continue', 'Make the jump to hyperspace on a thrilling 3D space flight to legendary destinations from the Star Wars saga.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/star-tours-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/hollywood-studios/star-tours/', '0.00', 0),
(41, 'Star Wars: Rise of the Resistance', 'Join the Resistance in an unforgettable battle against the First Order on this exciting ride.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/star-wars-rise-resistance.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/hollywood-studios/star-wars-rise-of-the-resistance/', '0.00', 0),
(42, 'The Twilight Zone Tower of Terror', 'Hurtle up and down aboard a haunted elevator-style lift. You’re about to enter… The Twilight Zone!', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/the-twilight-zone-tower-of-terror.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/hollywood-studios/twilight-zone-tower-of-terror/', '0.00', 0),
(43, 'Toy Story Mania!', 'Zip through an exhilarating 4D shootin’ game starring Toy Story characters—and blast away.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/toy-story-mania.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/hollywood-studios/toy-story-mania/', '0.00', 0),
(44, 'Astro Orbiter', 'Pilot a spaceship high in the sky amid a gleaming constellation of planets.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/astro-orbiter-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/astro-orbiter/', '0.00', 0),
(45, 'Big Thunder Mountain', 'Race through a haunted gold mine aboard a speeding train on this thrilling coaster-style ride.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/big-thunder-mountain-railroad-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/big-thunder-mountain-railroad/', '0.00', 0),
(46, 'Buzz Lightyear’s Space Ranger Spin', 'Fire your laser to earn points and defeat the Evil Emperor Zurg as you journey through a galactic space battle.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/buzz-lightyear-space-ranger-spin-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/buzz-lightyear-space-ranger-spin/', '0.00', 0),
(47, 'Dumbo the Flying Elephant', 'Soar high in the sky—and see an elephant fly—on a whimsical flight aboard Dumbo.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/dumbo-the-flying-elephant-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/dumbo-the-flying-elephant/', '0.00', 0),
(48, 'Haunted Mansion', 'Climb aboard a gloomy Doom Buggy for a grave journey through a labyrinth of haunted chambers.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/haunted-mansion-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/haunted-mansion/', '0.00', 0),
(49, 'It’s a small world', 'Embark on a whimsical boat ride past a jubilant chorus of children from around the globe.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/its-a-small-world-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/its-a-small-world/', '0.00', 0),
(50, 'Jungle Cruise', 'Chart a course for high adventure on a scenic and comedic boat tour of exotic rivers across Asia, Africa and South America.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/jingle-cruise-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/jungle-cruise/', '0.00', 0),
(51, 'Liberty Square Riverboat', 'Cruise the scenic Rivers of America aboard an authentic steam-powered paddle wheeler.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/liberty-square-riverboat-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/liberty-square-riverboat/', '0.00', 0),
(52, 'Mad Tea Party', 'Spin ‘round and ‘round in a giant teacup during a madcap music-filled whirlwind.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/mad-tea-party-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/mad-tea-party/', '0.00', 0),
(53, 'Main Street Vehicles', 'Travel back in time during a breezy drive down Main Street, U.S.A. in a charming turn-of-the-century vehicle.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/main-street-vehicles-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/main-street-vehicles/', '0.00', 0),
(54, 'Peter Pan’s Flight', 'Embark on a high-flying adventure over iconic scenes made famous in Disney’s animated film.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/peter-pan-flight-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/peter-pan-flight/', '0.00', 0),
(55, 'Pirates of the Caribbean', 'Set sail on a swashbuckling voyage to a long-forgotten time and place when pirates and privateers ruled the seas.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/pirates-of-the-caribbean-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/pirates-of-the-caribbean/', '0.00', 0),
(56, 'Prince Charming Regal Carrousel', 'Ride atop a regal steed and gallop through a whirling backdrop of wondrous color and whimsical music.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/prince-charming-regal-carrousel-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/prince-charming-regal-carrousel/', '0.00', 0),
(57, 'Seven Dwarfs Mine Train', 'Race through the diamond mine from Snow White and the Seven Dwarfs on a swaying family coaster ride.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/seven-dwarfs-mine-train-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/seven-dwarfs-mine-train/', '0.00', 0),
(58, 'Space Mountain', 'Blast off on a rip-roaring rocket into the furthest reaches of outer space on this roller-coaster ride in the dark.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/space-mountain-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/space-mountain/', '0.00', 0),
(59, 'Splash Mountain', 'Drop into a whimsical world filled with classic characters and songs on this thrilling log-flume adventure.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/splash-mountain-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/splash-mountain/', '0.00', 0),
(60, 'The Magic Carpets of Aladdin', 'Fly high over Adventureland on an enchanted carpet ride inspired by the Disney movie Aladdin.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/the-magic-carpets-of-aladdin-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/magic-carpets-of-aladdin/', '0.00', 0),
(61, 'The Many Adventures of Winnie the Pooh', 'Travel through Hundred-Acre Wood in an oversized Hunny Pot and get lost in the pages of A.A. Milne’s classic tales.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/the-many-adventures-of-winnie-the-pooh-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/many-adventures-of-winnie-the-pooh/', '0.00', 0),
(62, 'Tomorrowland Transit Authority PeopleMover', 'Embark on a 10-minute tour of Tomorrowland aboard this mass transit system of the future.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/tomorrowland-transit-authority-peoplemover-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/tomorrowland-transit-authority-peoplemover/', '0.00', 0),
(63, 'Under the Sea – Journey of the Little Mermaid', 'Board a clamshell and become part of Ariel’s world on a musical adventure awash with scenes from the animated classic.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/under-the-sea-journey-of-the-little-mermaid-new-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/under-the-sea-journey-of-the-little-mermaid/', '0.00', 0),
(64, 'Walt Disney’s Carousel of Progress', 'Travel through the 20th century and marvel at the evolution of technology during this classic Audio-Animatronics show.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/walt-disney-carousel-of-progress-00.jpg', NULL, 'https://disneyworld.disney.go.com/attractions/magic-kingdom/walt-disney-carousel-of-progress/', '0.00', 0),
(65, 'Aquazone Wave Racers', 'Family friendly hydro slider water carousel, which is operated in a water basin.', 'Winter Haven, FL', 'media/imgs/ride-imgs/aquazone-wave-racers.jpg', NULL, 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/aquazone-wave-racers/', '0.00', 0),
(66, 'Boating School', 'Boating School is an attraction that enables guests to experience actual driving and steering of a boat through a course.', 'Winter Haven, FL', 'media/imgs/ride-imgs/boating_school_1400x800.jpg', NULL, 'https://www.undercovertourist.com/orlando/legoland-florida/boating-school/', '0.00', 0),
(67, 'Coastersaurus', 'A classic wooden roller coaster designed to thrill riders with steep drops and fast turns.', 'Winter Haven, FL', 'media/imgs/ride-imgs/coastersaurus_1400x800.jpg', NULL, 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/coastersaurus/', '0.00', 0),
(68, 'Flying School', 'The train is designed to hang under the track (as opposed to a traditional roller coaster), giving guests who ride the feeling of flying.', 'Winter Haven, FL', 'media/imgs/ride-imgs/flying_school_1400x800.jpg', NULL, 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/flying-school/', '0.00', 0),
(69, 'Ford Driving School', 'An attraction that enables children to experience actual driving and steering of a car through a course', 'Winter Haven, FL', 'media/imgs/ride-imgs/ford_driving_school_1400x800.jpg', NULL, 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/ford-driving-school/', '0.00', 0),
(70, 'Lego Ninjago Ride', 'Blast animated fireballs, lightning and more at a sinister gallery of villains before teaming up to defeat a powerful foe.', 'Winter Haven, FL', 'media/imgs/ride-imgs/lego-ninjago-ride1400x800.jpg', NULL, 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/lego-ninjago-world/', '0.00', 0),
(71, 'Lost Kingdom Adventure', 'An interactive dark ride where guests compete for the highest score by shooting laser blasters', 'Winter Haven, FL', 'media/imgs/ride-imgs/lost-kingdom-adventure.jpg', NULL, 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/lost-kingdom-adventure/', '0.00', 0),
(72, 'Merlins Challenge', 'A caterpillar ride that spins in a clockwise motion and progressively speeds up.', 'Winter Haven, FL', 'media/imgs/ride-imgs/merlins-challenge_1800x900.jpg', NULL, 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/merlin-s-challenge/', '0.00', 0),
(73, 'Safari Trek', 'A slow moving car ride where guests travel through a LEGO® jungle', 'Winter Haven, FL', 'media/imgs/ride-imgs/safari-trek.jpg', NULL, 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/safari-trek/', '0.00', 0),
(74, 'The Dragon', 'The Dragon is an indoor/outdoor steel roller coaster', 'Winter Haven, FL', 'media/imgs/ride-imgs/the-great-lego-race.jpg', NULL, 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/the-dragon/', '0.00', 0),
(75, 'The Great Lego Race', 'The Great LEGO® Race is an exciting wild-mouse style rollercoaster that thrills riders with large drops, hair-pin turns, and thrill inducing fun!', 'Winter Haven, FL', 'media/imgs/ride-imgs/the_dragon.jpg', NULL, 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/the-great-lego-race/', '0.00', 0),
(76, 'Abby’s Flower Tower', 'Just a sprinkle of magic from Abby Cadabby’s wand will send you up, up, up in colorful flower pots aboard Abby’s Flower Tower.', 'Orlando, FL', 'media/imgs/ride-imgs/Abbys-Flower-Tower.jpg', NULL, 'https://seaworld.com/orlando/sesame-street/attractions/abbys-flower-tower/', '0.00', 0),
(77, 'Big Bird’s Twirl $N$ Whirl', 'Ready… set … spin in a nest of your own when you enjoy Big Bird’s Twirl ‘N’ Whirl.', 'Orlando, FL', 'media/imgs/ride-imgs/Big-Bird-Twirl-N-Whirl.jpg', NULL, 'https://seaworld.com/orlando/sesame-street/attractions/big-birds-twirl-n-whirl/', '0.00', 0),
(78, 'Cookie Drop', 'Get carried away in a cloud of cookie crumbs as you bounce up and down on Cookie Monster’s Cookie Drop!', 'Orlando, FL', 'media/imgs/ride-imgs/CookieDrop.jpg', NULL, 'https://seaworld.com/orlando/sesame-street/attractions/cookie-drop/', '0.00', 0),
(79, 'Elmo’s Choo Choo Train', 'It’s all aboard for everyone on Elmo’s Choo Choo Train, an interactive bell-ringing, horn-honking train ride you won’t want to miss!', 'Orlando, FL', 'media/imgs/ride-imgs/ElmosChooChooTrain.jpg', NULL, 'https://seaworld.com/orlando/sesame-street/attractions/elmos-choo-choo-train/', '0.00', 0),
(80, 'Flamingo Paddle Boats', 'Climb aboard one of our paddle boats for a leisurely tour of SeaWorld Orlando’s large central lake.', 'Orlando, FL', 'media/imgs/ride-imgs/Flamingo-Paddle-Boats-with-Riders.jpg', NULL, 'https://seaworld.com/orlando/rides/paddle-boats/', '0.00', 0),
(81, 'Ice Breaker', 'Our brand new roller coaster features four airtime filled launches, both backwards and forwards, culminating in a reverse launch into the steepest beyond vertical drop in Florida.', 'Orlando, FL', 'media/imgs/ride-imgs/Ice-Breaker.jpg', NULL, 'https://seaworld.com/orlando/roller-coasters/ice-breaker/', '0.00', 0),
(82, 'Infinity Falls', 'Experience world-class rapids and the tallest drop in Florida as you embark on this rafting adventure.', 'Orlando, FL', 'media/imgs/ride-imgs/InfinityFalls.png', NULL, 'https://seaworld.com/orlando/rides/infinity-falls/', '0.00', 0),
(83, 'Journey to Atlantis', 'Water ride enthusiasts are in for a thrill as this mythical paradise reveals its darker side.', 'Orlando, FL', 'media/imgs/ride-imgs/Journey-to-Atlantis-Splash.jpg', NULL, 'https://seaworld.com/orlando/rides/journey-to-atlantis/', '0.00', 0),
(84, 'Kraken', 'Born from tales that struck terror in sailors for centuries, SeaWorld Orlando’s mighty Kraken® is a monster coaster like no other.', 'Orlando, FL', 'media/imgs/ride-imgs/Kraken-Coaster.jpg', NULL, 'https://seaworld.com/orlando/roller-coasters/kraken/', '0.00', 0),
(85, 'Mako', 'Ride Mako®, a hyper coaster known for high speeds, deep dives, and thrills around every turn.', 'Orlando, FL', 'media/imgs/ride-imgs/Mako-Roller-Coaster.jpg', NULL, 'https://seaworld.com/orlando/roller-coasters/mako/', '0.00', 0),
(86, 'Manta', 'Find out what it’s like to spin, glide, skim and fly like a giant ray when you experience the only flying roller coaster of its kind in Florida.', 'Orlando, FL', 'media/imgs/ride-imgs/Manta-Curve.jpg', NULL, 'https://seaworld.com/orlando/roller-coasters/manta/', '0.00', 0),
(87, 'Sky Tower', 'Our 400-foot Sky Tower has stood as an icon for our park since it opened in summer 1974. Today the Sky Tower adds a dose of retro-cool to the day’s adventures.', 'Orlando, FL', 'media/imgs/ride-imgs/Skytower.jpg', NULL, 'https://seaworld.com/orlando/rides/sky-tower/', '0.00', 0),
(88, 'Slimey’s Sliders', 'Climb into Slimey’s Slider for an exhilarating swoop and swivel ride through Oscar the Grouch’s treasured compost collection!', 'Orlando, FL', 'media/imgs/ride-imgs/Slimeys-Slider.jpg', NULL, 'https://seaworld.com/orlando/sesame-street/attractions/slimeys-slider/', '0.00', 0),
(89, 'Sunny Day Carousel', 'The Sunny Day Carousel is a cute, colorful, classic ride that’s perfect for everyone who likes a good go-round.', 'Orlando, FL', 'media/imgs/ride-imgs/Sunny-Day-Carousel.jpg', NULL, 'https://seaworld.com/orlando/sesame-street/attractions/sunny-day-carousel/', '0.00', 0),
(90, 'Super Grover’s Box Car Derby', 'Sesame Street’s own furry superhero wants you behind the wheel for a racing good time at Super Grover’s Box Car Derby.', 'Orlando, FL', 'media/imgs/ride-imgs/Super-Grover-Box-Car-Derby.jpg', NULL, 'https://seaworld.com/orlando/sesame-street/attractions/super-grovers-box-car-derby/', '0.00', 0),
(91, 'Caro-Seuss-El', 'This carousel has an array of fun and unusual creatures from the imagination of Dr. Seuss.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-caro-seuss-el.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/caro-seuss-el', '0.00', 0),
(92, 'Doom’s Fearfall', 'This ride is a high-speed, free-fall experience that includes sudden and intense acceleration, climbing and dropping', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-dr-dooms-fearfall-towers.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/doctor-dooms-fearfall', '0.00', 0),
(93, 'Dudley Do-Right Ripsaw Falls', 'This ride is a water journey in a floating log. The log will suddenly accelerate, turn, and drop.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-dudley-do-rights-ripsaw-falls.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/dudley-do-rights-ripsaw-falls', '0.00', 0),
(94, 'Flight of the Hippogriff', 'This high-speed roller coaster ride includes sudden and dramatic accelerations, climbing, tilting and dropping.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-flight-of-the-hippogriff-coaster.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/flight-of-the-hippogriff', '0.00', 0),
(95, 'Hagrid’s Magical Creatures Motorbike Adventure', 'This is a high speed roller coaster that includes sudden dramatic acceleration, climbing, tilting, dropping, and backwards motion.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-hagrids-motorbike-adventure.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/hagrids-magical-creatures-motorbike-adventure', '0.00', 0),
(96, 'Harry Potter and the Forbidden Journey', 'This ride simulates dramatic aerobatics. The ride vehicle will suddenly accelerate, stop, turn, tilt, climb, and drop.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-harry-potter-and-the-forbidden-journey-hogwarts.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/harry-potter-and-the-forbidden-journey', '0.00', 0),
(97, 'Hogwarts Express: Hogsmeade Station', 'This is a passenger train that involves traveling in an enclosed cabin and includes loud noises and low-lighting conditions.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-hogwarts-express-hogsmeade-station.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/hogwarts-express', '0.00', 0),
(98, 'Jurassic Park River Adventure Ride', 'This ride is a water journey on a touring raft. The raft will suddenly and dramatically accelerate, turn, and drop. Riders will get wet, possibly soaked.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-jurassic-park-river-adventure.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/jurassic-park-river-adventure', '0.00', 0),
(99, 'Jurassic World VelociCoaster', 'This is a high-speed roller coaster that includes sudden and dramatic acceleration, climbing, tilting, inversions, and dropping.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-jurassic-park-velocicoaster.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/jurassic-world-velocicoaster', '0.00', 0),
(100, 'One fish, Two fish, Red fish, Blue Fish', 'This is a circular motion gondola ride. Up and down movement is controlled by the rider. Riders will get wet.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-one-fish-two-fish-red-fish-blue-fish.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/one-fish-two-fish-red-fish', '0.00', 0),
(101, 'Popeye and Bluto’s Bilge-rat Barges', 'This ride is a water journey in a circular barge. The barge will suddenly accelerate, turn and drop.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-popeye-and-blutos-bilge-rat-barges.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/popeye-and-blutos-bilge-rat-barges', '0.00', 0),
(102, 'Pteranodon Flyers', 'This glider style roller coaster includes climbing, side-to-side swinging and sudden acceleration.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-pteranodon-flyers.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/pteranodon-flyers', '0.00', 0),
(103, 'Skull Island: Reign of Kong', 'This 3-D ride is an expedition through the rough terrain of King Kong’s natural habitat.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-skull-island-reign-of-kong.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/skull-island-reign-of-kong', '0.00', 0),
(104, 'Storm Force Accelatron', 'This attraction seats riders in round pods and subjects you to sudden acceleration, turning, and spinning.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-storm-force-accelatron.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/storm-force-accelatron', '0.00', 0),
(105, 'The Amazing Adventures of Spider-Man', 'This 3-D ride takes a journey through the world of Spider-Man™ in a prototype news vehicle.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-the-amazing-adventures-of-spiderman.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/the-amazing-adventures-of-spider-man', '0.00', 0),
(106, 'The Cat in the Hat Ride', 'This ride takes a journey through the world of The Cat in the Hat™.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-the-cat-in-the-hat.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/the-cat-in-the-hat', '0.00', 0),
(107, 'The High in the Sky Seuss Trolley Train', 'This ride is a trolley train through Seuss Landing™ on an elevated track.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-the-high-in-the-sky-seuss-trolly.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/high-in-the-sky-seuss-trolley-train-ride', '0.00', 0),
(108, 'The Incredible Hulk Coaster', 'This is a high-speed roller coaster ride that includes sudden and dramatic acceleration, climbing, tilting, and dropping.', 'Orlando, FL', 'media/imgs/ride-imgs/ioa-the-incredible-hulk-coaster.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/the-incredible-hulk-coaster', '0.00', 0),
(109, 'Despicable Me Minion Mayhem', 'Simulates the action of a high-speed aerial chase, with sudden turns and strong lighting effects.', 'Orlando, FL', 'media/imgs/ride-imgs/Despicable Me Minion Mayhem.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/despicable-me-minion-mayhem', '0.00', 0),
(110, 'E.T. Adventure', 'Forest chase on a flying bicycle, with sudden acceleration and turns.', 'Orlando, FL', 'media/imgs/ride-imgs/et-adventure-family.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/et-adventure', '0.00', 0),
(111, 'Fast And Furious - Supercharged', 'High-octane journey into the underground racing world with sudden acceleration and turns.', 'Orlando, FL', 'media/imgs/ride-imgs/fast-and-furious-supercharged.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/fast-furious-supercharged', '0.00', 0),
(112, 'Harry Potter and the Escape from Gringotts', 'A high-speed roller coaster with 3-D visuals and sudden movements.', 'Orlando, FL', 'media/imgs/ride-imgs/harry-potter-escape-from-gringotts.jpg', NULL, 'https://www.universalorlando.com/web/en/us/search-results/filtered?attraction_experience=rides-attractions&amp;attraction_location=usf&amp;attraction_interest=', '0.00', 0),
(113, 'Hogwarts™ Express', 'A passenger train with an enclosed cabin, loud noises, and low-lighting conditions.', 'Orlando, FL', 'media/imgs/ride-imgs/hogwarts-express.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/hogwarts-express', '0.00', 0),
(114, 'Hollywood Rip Ride Rockit™', 'High-speed roller coaster that includes sudden and dramatic accelerations, climbs, tilts, and drops', 'Orlando, FL', 'media/imgs/ride-imgs/hollywood-rip-ride-rockit.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/hollywood-rip-ride-rockit', '0.00', 0),
(115, 'Kang &amp; Kodos$ Twirl $n$ Hurl', 'Circular motion gondola ride with a lot of spinning!', 'Orlando, FL', 'media/imgs/ride-imgs/kang-kodos-twirl-n-hurl.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/kang-and-kodos-twirl-and-hurl', '0.00', 0),
(116, 'MEN IN BLACK™ Alien Attack', 'Men In Black recruits on the city streets for an intense training exercise, sudden movements and spins.', 'Orlando, FL', 'media/imgs/ride-imgs/men-in-black-alien-attack.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/men-in-black-alien-attack', '0.00', 0),
(117, 'Race Through New York Starring Jimmy Fallon', 'Simulates a high speed, turbulent thrill ride with dramatic aerobatics, rapid acceleration and movements.', 'Orlando, FL', 'media/imgs/ride-imgs/race-through-new-york-jimmy-fallon.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/race-through-ny-starring-jimmy-fallon', '0.00', 0),
(118, 'Revenge of the Mummy', 'A Mummy themes coaster with sudden movements and drops.', 'Orlando, FL', 'media/imgs/ride-imgs/revenge-of-the-mummy-ride.jpg', NULL, 'https://en.wikipedia.org/wiki/Universal_Studios_Florida#Areas_and_attractions', '0.00', 0),
(119, 'The Simpsons Ride', 'Motion simulator with many sudden movements.', 'Orlando, FL', 'media/imgs/ride-imgs/the-simpsons-ride.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/the-simpsons-ride', '0.00', 0),
(120, 'TRANSFORMERS: The Ride-3D', 'This Ride takes place on a high-speed vehicle that will suddenly and dramatically accelerate and make movements.', 'Orlando, FL', 'media/imgs/ride-imgs/transformers-3d.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/transformers-ride-3d', '0.00', 0),
(121, 'Woody Woodpecker’s Nuthouse Coaster', 'High-speed roller coaster that includes sudden and dramatic accelerations, climbs, tilts, and drops', 'Orlando, FL', 'media/imgs/ride-imgs/woody-woodpecker.jpg', NULL, 'https://www.universalorlando.com/web/en/us/things-to-do/rides-attractions/woody-woodpeckers-nuthouse-coaster', '0.00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `profileimage` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `profileimage`) VALUES
(2, 'f1', '$2y$10$Me0nKD6mzz/ZdXNS4umgSuxb28PaQDReVepokNeMgksSfTQhqOWWW', ''),
(3, 'hello', '$2y$10$gE9GPapCGze3KUdeDyyH2Oj8wSFz8MmXKvSQK8H6JnrLQGAyKsvuK', ''),
(4, 'us', '$2y$10$yoDe1NjDx9NV7BCZxfTpBuYDbhWxxj5C0ONRDHttIjzGZrtJxhTmi', ''),
(5, 'ok', '$2y$10$m5qI846F1HiW.wAl1FPwbOMqyTlZ4pDtXFE1uSmORwWoKYhkjIr/q', ''),
(6, 'yyy', '$2y$10$.WdpLWJl6kPXoiBYUdoSSe9PrC0a8muBmyiX2JIrQ7xnkyqBu4sJm', ''),
(8, 'frmn', '$2y$10$SElhvA/mz6imaf70boDxkeJi2kG.OTDJ7QrVSr4YMaGHzjUbBem86', ''),
(10, 'frmn01@gmail.com', '$2y$10$1sRMpFRRn5vHkvVxbbRvKet7oM5FmTqr5ZwJAwD1PcV86O37R/COS', ''),
(11, 'boom@bape.com', '$2y$10$jWBOcRym9AY1bS9OvGBUfeZrVGFzSIrMnokKLLQ0WZsY8yAnzjVU2', ''),
(12, 'boombape@aol.com', '$2y$10$jV5FOWr64sRZ63msoshjjupMrbfjS9Ud0TK62YkSdqv.mHEbej35i', ''),
(13, 'sdaasdf@sadfsdf.com', '$2y$10$b/Ef1SYRhoOzM1gTrqWC4.DRUSHS4MaHN7SpTYSmaIf7Rb/w92hmO', ''),
(14, 'zaza@sdsdsds.com', '$2y$10$nXYJ07B51JbZB1grgnjMOuXxu8Y3eT6HQ9ywAAiReOE6Cl4MvzDnS', ''),
(15, 'hjggh@hjhg.com', '$2y$10$W73g27DNTJboJFqR/8xwdOVpGB.8m5KnJohzJI5mQmx56ZUu31KlK', ''),
(16, 'boombape@aol.com', '$2y$10$GPuHNX0YSPJM3ZPVHV5h0OqzX3xKIgWKY.r0oS24Hxf8dIBpIQMa6', NULL),
(17, 'boombape@aol.com', '$2y$10$Gy21Ibk/rKxaUL7iStzTOeIhBjoNurdvxTz5Uxds5Lpz4NmBRYkSG', NULL),
(18, 'boombape1@gmail.com', '$2y$10$AyGf0Su1HeK.BYFFo02OBO6QOkQl1GQvM3bgG2sUC/0RTtqu8B22i', NULL),
(19, 'test@test.com', '$2y$10$jG2bOxoC3FQF72LRh7ymW.Gd8Xh7yB9CV80uHnouiUrQr1LTUY4p2', NULL),
(20, '1test@1test.com', '$2y$10$BPI/BC5oHoneQVxKaSze1e0aSM15i054xEckePYj2TITs1Od8KDQS', NULL),
(21, 'random@gmail.com', '$2y$10$oqKUM9KPCA.1/FhtcMtUtuGa..hF8EpFDCw1PxjsV0sTYFSPaaecS', NULL),
(22, 'zoom@gmail.com', '$2y$10$tXJBCrPivxrrvEcO19zsdOyBQZBSX68BXIS8f.EmnGQ8Q39Q8VJAq', NULL),
(23, 'temp@gmail.com', '$2y$10$MgJHzbn93ya4NPo5Q5ArpuMMrs.pGewbb52pcys4pqE82AGTOd0wu', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`commentid`);

--
-- Indexes for table `parks`
--
ALTER TABLE `parks`
  ADD PRIMARY KEY (`parkid`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`PostID`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`reviewid`);

--
-- Indexes for table `ridelist`
--
ALTER TABLE `ridelist`
  ADD PRIMARY KEY (`ridelistid`);

--
-- Indexes for table `ridelistdetails`
--
ALTER TABLE `ridelistdetails`
  ADD PRIMARY KEY (`ridelistid`);

--
-- Indexes for table `rideratings`
--
ALTER TABLE `rideratings`
  ADD PRIMARY KEY (`userid`,`rideid`);

--
-- Indexes for table `rides`
--
ALTER TABLE `rides`
  ADD PRIMARY KEY (`rideid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `commentid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `parks`
--
ALTER TABLE `parks`
  MODIFY `parkid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `PostID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `reviewid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ridelist`
--
ALTER TABLE `ridelist`
  MODIFY `ridelistid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ridelistdetails`
--
ALTER TABLE `ridelistdetails`
  MODIFY `ridelistid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rides`
--
ALTER TABLE `rides`
  MODIFY `rideid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
