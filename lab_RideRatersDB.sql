-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2023 at 06:27 PM
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
  `Date` date NOT NULL DEFAULT current_timestamp()
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
  `averagerating` decimal(10,0) DEFAULT NULL,
  `ratingcount` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rides`
--

INSERT INTO `rides` (`rideid`, `ridename`, `ridedescription`, `ridelocation`, `rideimagepath`, `parkid`, `rideWebSite`, `averagerating`, `ratingcount`) VALUES
(1, 'Air Grover', 'Add to the excitement with this junior coaster set within the Sesame Street Safari of Fun area.', 'Tampa, FL', 'media/imgs/ride-imgs/AirGrover4_357x22.jpg', '1', 'https://buschgardens.com/tampa/roller-coasters/air-grover/', NULL, 0),
(2, 'Cheetah Hunt', 'This triple launch roller coaster carries riders high above the park, then races down along the ground through a rocky gorge. At a length of 4,400 feet, Cheetah Hunt\\u00ae is the park\\u2019s longest thrill ride attraction!', 'Tampa, FL', 'media/imgs/ride-imgs/Cheetah_Hunt2_357x22.jpg', '1', 'https://buschgardens.com/tampa/roller-coasters/cheetah-hunt/', NULL, 0),
(3, 'Cobra\'s Curse', 'Change your ride by changing who you ride with on this thrilling steel serpent. This one-of-a-kind roller coaster features a menacing 30,000-pound snake king and a 70-foot vertical lift that will take riders within inches of its 3 foot-wide eyes and 4-foo', 'Tampa, FL', 'media/imgs/ride-imgs/CobrasCurse_Listing.png', '1', 'https://buschgardens.com/tampa/roller-coasters/cobras-curse/', NULL, 0),
(4, 'Avatar Flight of Passage', 'Climb atop a winged mountain banshee for a breathtaking 3D flight over Pandora\\u2019s otherworldly landscape.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/AVATAR-flight-of-passage-in-ride.jpg', '2', 'https://disneyworld.disney.go.com/attractions/animal-kingdom/avatar-flight-of-passage/', NULL, 0),
(5, 'DINOSAUR', 'Travel back in time on a perilous prehistoric race to rescue a dinosaur\\u2014before the meteor strikes.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/dinosaur.jpg', '2', 'https://disneyworld.disney.go.com/attractions/animal-kingdom/dinosaur/', NULL, 0),
(6, 'Expedition Everest', 'Careen through icy Himalayan peaks on a speeding train while avoiding the clutches of the mythic Yeti.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/expedition-everest-day.jpg', '2', 'https://disneyworld.disney.go.com/attractions/animal-kingdom/expedition-everest/', NULL, 0),
(7, 'Frozen Ever After', 'Voyage to Arendelle aboard an ancient Nordic vessel as you take a musical tour of the wintery world of Frozen.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/frozen-ever-after-olaf-anna-elsa.jpg', '3', 'https://disneyworld.disney.go.com/attractions/epcot/frozen-ever-after/', NULL, 0),
(8, 'Gran Fiesta Tour Starring The Three Caballeros', 'Take in the sights of Mexico and the antics of 3 feathered amigos on this gentle boat ride through the Mexico Pavilion.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/gran-fiesta-tour-starring-three-caballeros.jpg', '3', 'https://disneyworld.disney.go.com/attractions/epcot/gran-fiesta-tour-starring-three-caballeros/', NULL, 0),
(9, 'Guardians of the Galaxy: Cosmic Rewind', 'Take off on an intergalactic chase through space and time with the Guardians of the Galaxy.', 'Lake Buena Vista, FL', 'media/imgs/ride-imgs/guardians-of-the-galaxy.jpg', '3', 'https://disneyworld.disney.go.com/attractions/epcot/guardians-of-the-galaxy-cosmic-rewind/', NULL, 0),
(10, 'Congo River Rapids', 'Climb aboard and enjoy a refreshing splash \\u2013 or get seriously soaked. This expedition will send you twirling down a racing river through Congo, so get ready to get soaked!', NULL, 'media/imgs/ride-imgs/CongoRiverRapids_357x229.png', '1', 'https://buschgardens.com/tampa/rides/congo-river-rapids/', NULL, 0),
(11, 'Falcon\'s Fury', 'The height Falcon\\u2019s Fury\\u00ae reaches offers an incredible view stretching well past downtown Tampa and encompassing all of Busch Gardens. The ride takes about a minute until riders get to its peak, giving plenty of time to enjoy the landscape.', NULL, 'media/imgs/ride-imgs/FalconsFury_357x229.jpg', '1', 'https://buschgardens.com/tampa/rides/falcons-fury/', NULL, 0),
(12, 'Iron Gwazi', 'Iron Gwazi takes thrills to new heights, plunging riders from a 206 foot-tall peak into a 91-degree drop and reaching top speeds of 76 miles per hour.', NULL, 'media/imgs/ride-imgs/IronGwazi_ListingImage_GoldenTicket.png', '1', 'https://buschgardens.com/tampa/roller-coasters/iron-gwazi/', NULL, 0),
(13, 'Kumba', 'Touting one of the world\'s largest vertical loops, enthusiasts have consistently voted Kumba\\u00ae, one of the world\'s best roller coasters! It is said that if you can hear the roar of a lion in the distance, you have crossed into his territory.', NULL, 'media/imgs/ride-imgs/Kumba_ListingImage.png', '1', 'https://buschgardens.com/tampa/roller-coasters/kumba/', NULL, 0),
(14, 'Montu', 'Climb high into the air and hold on for a twisting drop, a 60-foot vertical loop, an Immelmann loop and a weightless roll and that\'s only the beginning on this inverted roller coaster.', NULL, 'media/imgs/ride-imgs/Montu_LiftListingImage_357x2.jpg', '1', 'https://buschgardens.com/tampa/roller-coasters/montu/', NULL, 0),
(15, 'Sand Serpent', 'Families will love the curves, drops, and corkscrews of this \\\"wild-mouse\\\" style roller coaster located in the Pantopia\\u00ae area of the park. SandSerpent is a fun-filled family coaster that zips, zooms and climbs five stories into the air before bringing riders back down in a roar of laughter.', NULL, 'media/imgs/ride-imgs/Sand_Serpent_357x229.jpg', '1', 'https://buschgardens.com/tampa/roller-coasters/sandserpent/', NULL, 0),
(16, 'Scorpion', 'The Scorpion\\u00ae is one of only three roller coasters of its kind remaining in the world today, yet its sting is every bit as effective at instilling thrills through every twist and turn. Scorpion pulls you through a 360 degree loop and speeds of 50 miles per hour!', NULL, 'media/imgs/ride-imgs/Scorpion2_ListingIm.jpg', '1', 'https://buschgardens.com/tampa/roller-coasters/scorpion/', NULL, 0),
(17, 'Serengeti Express', 'A ride on the Serengeti Express Train is one of the best ways to take in the breathtaking beauty and scale of Busch Garden\'s Serengeti Plain\\u00ae.', NULL, 'media/imgs/ride-imgs/SerengetiRailway2_357x229.jpg', '1', 'https://buschgardens.com/tampa/rides/serengeti-express-train/', NULL, 0),
(18, 'SheiKra', 'Climb 200 feet to the edge of a 90-degree drop that inches you mercilessly over the edge\\u2014and stops. Then surrender to speed as you dive straight down into a 70 mph roller coaster.', NULL, 'media/imgs/ride-imgs/SheiKra_357x229.jpg', '1', 'https://buschgardens.com/tampa/roller-coasters/sheikra/', NULL, 0),
(19, 'Skyride', 'Take in beautiful views of roller coasters and the animals in our care as you cross our lush park from the comfort of your Skyride cable car, that runs between Egypt and Congo on the opposite side of the park.', NULL, 'media/imgs/ride-imgs/SkyRide2_357x229.jpg', '1', 'https://buschgardens.com/tampa/rides/skyride/', NULL, 0),
(20, 'Stanley Falls Flume', 'Catch a current of fun aboard the Stanley Falls Flume\\u00ae, Busch Gardens Tampa Bay\\u2019s family-friendly log flume ride that\\u2019s perfect for younger guests. The ride twists and turns through a lush jungle before diving toward a final 40-foot splashdown. If you\\u2019re looking for a great way to cool off on a hot day, this is the ride for you!', NULL, 'media/imgs/ride-imgs/Stanley_Falls_357x2.png', '1', 'https://buschgardens.com/tampa/rides/stanley-falls/', NULL, 0),
(21, 'Tigris', 'Catapult through an exhilarating array of looping twists with forward and backward motion and breath-taking drops', NULL, 'media/imgs/ride-imgs/Tigris_1900x700.jpg', '1', 'https://buschgardens.com/tampa/roller-coasters/tigris/', NULL, 0),
(22, 'Wild Surge', 'Launch out of a 35-foot mountain crater up above a towering waterfall for a thrilling view of Jungala\\u2019s\\u00ae village below. Look out for the gibbons and flying foxes as they soar pass the adjacent animal habitats!', NULL, 'media/imgs/ride-imgs/WildSurge1_357x229.jp', '1', 'https://buschgardens.com/tampa/rides/wild-surge/', NULL, 0),
(23, 'Kali River Rapids', 'Set out on a thrilling whitewater adventure through a lush jungle in the heart of Asia.', NULL, 'media/imgs/ride-imgs/kali-river-rapids.jpg', '2', 'https://disneyworld.disney.go.com/attractions/animal-kingdom/kali-river-rapids/', NULL, 0),
(24, 'Kilimanjaro Safaris', 'Set off in an open-air vehicle for a guided tour of an African savanna\\u2014and spot live animals roaming free.', NULL, 'media/imgs/ride-imgs/kilimanjaro-safaris.jpg', '2', 'https://disneyworld.disney.go.com/attractions/animal-kingdom/kilimanjaro-safaris/', NULL, 0),
(25, 'Na\\u2019vi River Journey', 'Take a mystical journey by boat deep into Pandora\\u2019s glowing bioluminescent rainforest.', NULL, 'media/imgs/ride-imgs/pandora-navi-river-journey-full-boat.jpg', '2', 'https://disneyworld.disney.go.com/attractions/animal-kingdom/navi-river-journey/', NULL, 0),
(26, 'TriceraTop Spin', 'Fly high on a dinosaur around a twirling tin-toy top at this delightful carnival-inspired attraction.', NULL, 'media/imgs/ride-imgs/tricera-top-spin.jpg', '2', 'https://disneyworld.disney.go.com/attractions/animal-kingdom/tricera-top-spin/', NULL, 0),
(27, 'Wildlife Express Train', 'Cross the African savanna on a rustic locomotive for a behind-the-scenes look at the park\\u2019s animals.', NULL, 'media/imgs/ride-imgs/wildlife-express-train.jpg', '2', 'https://disneyworld.disney.go.com/attractions/animal-kingdom/wildlife-express-train/', NULL, 0),
(28, 'Journey Into Imagination With Figment', 'Figment the playful dragon is your guide on this delightful ride through the sensory labs of Imagination Institute.', NULL, 'media/imgs/ride-imgs/journey-into-imagination-with-figment.jpg', '3', 'https://disneyworld.disney.go.com/attractions/epcot/journey-into-imagination-with-figment/', NULL, 0),
(29, 'Living With The Land', 'Cruise past greenhouses on a gentle boat tour and discover the surprising history of farming.', NULL, 'media/imgs/ride-imgs/living-with-the-land.jpg', '3', 'https://disneyworld.disney.go.com/attractions/epcot/living-with-the-land/', NULL, 0),
(30, 'Mission: SPACE', 'Blast off on a thrilling simulated NASA-style mission to Mars\\u2014or orbit the Earth on a more gentle ride through space.', NULL, 'media/imgs/ride-imgs/mission-space.jpg', '3', 'https://disneyworld.disney.go.com/attractions/epcot/mission-space/', NULL, 0),
(31, 'Remy\'s Ratatouille Adventure', 'Feel like you\\u2019ve shrunk down to Chef Remy\\u2019s size for a 4D culinary adventure based on the Disney and Pixar film Ratatouille. When you\\u2019re small, life is a big adventure!', NULL, 'media/imgs/ride-imgs/remy-RatatouilleKV.jpg', '3', 'https://disneyworld.disney.go.com/attractions/epcot/remys-ratatouille-adventure/', NULL, 0),
(32, 'Soarin\' Around the World', 'Take flight on a breezy, airborne adventure as you hang glide above the breathtaking wonders of the world.', NULL, 'media/imgs/ride-imgs/soarin.jpg', '3', 'https://disneyworld.disney.go.com/attractions/epcot/soarin-around-world/', NULL, 0),
(33, 'Spaceship Earth', 'Travel through time and explore the remarkable history of human communication from the Stone Age to the computer age.', NULL, 'media/imgs/ride-imgs/spaceship-earth.jpg', '3', 'https://disneyworld.disney.go.com/attractions/epcot/spaceship-earth/', NULL, 0),
(34, 'Test Track', 'Design a virtual concept car and put it to the test on this thrilling, high-octane attraction.', NULL, 'media/imgs/ride-imgs/test-track-presented-by-chevrolet.jpg', '3', 'https://disneyworld.disney.go.com/attractions/epcot/test-track/', NULL, 0),
(35, 'The Seas With Nemo & Friends', 'Go under the sea\\u2014without getting wet\\u2014on this gentle ride based on Disney and Pixar\'s Finding Nemo, which finds Nemo lost again.', NULL, 'media/imgs/ride-imgs/the-seas-with-nemo-and-friends.jpg', '3', 'https://disneyworld.disney.go.com/attractions/epcot/seas-with-nemo-and-friends', NULL, 0),
(36, 'Alien Swirling Saucers', 'Power up the saucers for an interstellar romp through space, while futuristic tunes set the mood. Space cadets of all ages may enjoy this gentle whirl through the sky above Toy Story Land.', NULL, 'media/imgs/ride-imgs/aliens-swirliing-saucers-entrance.jpg', '4', 'https://disneyworld.disney.go.com/attractions/hollywood-studios/alien-swirling-saucers/', NULL, 0),
(37, 'Millennium Falcon: Smugglers Run', 'Ride in the famous cockpit of the Millennium Falcon on a daring flight\\u2014and whether you\\u2019re a pilot, engineer or gunner, every role is crucial.', NULL, 'media/imgs/ride-imgs/millennium-smugglers-run-interior.jpg', '4', 'https://disneyworld.disney.go.com/attractions/hollywood-studios/millennium-falcon-smugglers-run/', NULL, 0),
(38, 'Rock \\u2018n\\u2019 Roller Coaster Starring Aerosmith', 'Race along the darkened freeways of Los Angeles in a super-stretch limo to the rockin\' tunes of Aerosmith.', NULL, 'media/imgs/ride-imgs/rock-and-roller-coaster-starring-aerosmith.jpg', '4', 'https://disneyworld.disney.go.com/attractions/hollywood-studios/rock-and-roller-coaster-starring-aerosmith/', NULL, 0),
(39, 'Slinky Dog Dash', 'Take off on a family-friendly coaster that twists and turns past giant toys and springs across Andy\\u2019s oversized backyard!', NULL, 'media/imgs/ride-imgs/slinky-dog-ride.jpg', '4', 'https://disneyworld.disney.go.com/attractions/hollywood-studios/slinky-dog-dash', NULL, 0),
(40, 'Star Tours: The Adventures Continue', 'Make the jump to hyperspace on a thrilling 3D space flight to legendary destinations from the Star Wars saga.', NULL, 'media/imgs/ride-imgs/star-tours-00.jpg', '4', 'https://disneyworld.disney.go.com/attractions/hollywood-studios/star-tours/', NULL, 0),
(41, 'Star Wars: Rise of the Resistance', 'Join the Resistance in an unforgettable battle against the First Order on this exciting ride.', NULL, 'media/imgs/ride-imgs/star-wars-rise-resistance.jpg', '4', 'https://disneyworld.disney.go.com/attractions/hollywood-studios/star-wars-rise-of-the-resistance/', NULL, 0),
(42, 'The Twilight Zone Tower of Terror', 'Hurtle up and down aboard a haunted elevator-style lift. You\\u2019re about to enter\\u2026 The Twilight Zone!', NULL, 'media/imgs/ride-imgs/the-twilight-zone-tower-of-terror.jpg', '4', 'https://disneyworld.disney.go.com/attractions/hollywood-studios/twilight-zone-tower-of-terror/', NULL, 0),
(43, 'Toy Story Mania!', 'Zip through an exhilarating 4D shootin\\u2019 game starring Toy Story characters\\u2014and blast away.', NULL, 'media/imgs/ride-imgs/toy-story-mania.jpg', '4', 'https://disneyworld.disney.go.com/attractions/hollywood-studios/toy-story-mania/', NULL, 0),
(44, 'Astro Orbiter', 'Pilot a spaceship high in the sky amid a gleaming constellation of planets.', NULL, 'media/imgs/ride-imgs/astro-orbiter-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/astro-orbiter/', NULL, 0),
(45, 'Big Thunder Mountain', 'Race through a haunted gold mine aboard a speeding train on this thrilling coaster-style ride.', NULL, 'media/imgs/ride-imgs/big-thunder-mountain-railroad-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/big-thunder-mountain-railroad/', NULL, 0),
(46, 'Buzz Lightyear\\u2019s Space Ranger Spin', 'Fire your laser to earn points and defeat the Evil Emperor Zurg as you journey through a galactic space battle.', NULL, 'media/imgs/ride-imgs/buzz-lightyear-space-ranger-spin-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/buzz-lightyear-space-ranger-spin/', NULL, 0),
(47, 'Dumbo the Flying Elephant', 'Soar high in the sky\\u2014and see an elephant fly\\u2014on a whimsical flight aboard Dumbo.', NULL, 'media/imgs/ride-imgs/dumbo-the-flying-elephant-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/dumbo-the-flying-elephant/', NULL, 0),
(48, 'Haunted Mansion', 'Climb aboard a gloomy Doom Buggy for a grave journey through a labyrinth of haunted chambers.', NULL, 'media/imgs/ride-imgs/haunted-mansion-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/haunted-mansion/', NULL, 0),
(49, 'It\\u2019s a small world', 'Embark on a whimsical boat ride past a jubilant chorus of children from around the globe.', NULL, 'media/imgs/ride-imgs/its-a-small-world-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/its-a-small-world/', NULL, 0),
(50, 'Jungle Cruise', 'Chart a course for high adventure on a scenic and comedic boat tour of exotic rivers across Asia, Africa and South America.', NULL, 'media/imgs/ride-imgs/jingle-cruise-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/jungle-cruise/', NULL, 0),
(51, 'Liberty Square Riverboat', 'Cruise the scenic Rivers of America aboard an authentic steam-powered paddle wheeler.', NULL, 'media/imgs/ride-imgs/liberty-square-riverboat-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/liberty-square-riverboat/', NULL, 0),
(52, 'Mad Tea Party', 'Spin \\u2018round and \\u2018round in a giant teacup during a madcap music-filled whirlwind.', NULL, 'media/imgs/ride-imgs/mad-tea-party-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/mad-tea-party/', NULL, 0),
(53, 'Main Street Vehicles', 'Travel back in time during a breezy drive down Main Street, U.S.A. in a charming turn-of-the-century vehicle.', NULL, 'media/imgs/ride-imgs/main-street-vehicles-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/main-street-vehicles/', NULL, 0),
(54, 'Peter Pan\\u2019s Flight', 'Embark on a high-flying adventure over iconic scenes made famous in Disney\\u2019s animated film.', NULL, 'media/imgs/ride-imgs/peter-pan-flight-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/peter-pan-flight/', NULL, 0),
(55, 'Pirates of the Caribbean', 'Set sail on a swashbuckling voyage to a long-forgotten time and place when pirates and privateers ruled the seas.', NULL, 'media/imgs/ride-imgs/pirates-of-the-caribbean-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/pirates-of-the-caribbean/', NULL, 0),
(56, 'Prince Charming Regal Carrousel', 'Ride atop a regal steed and gallop through a whirling backdrop of wondrous color and whimsical music.', NULL, 'media/imgs/ride-imgs/prince-charming-regal-carrousel-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/prince-charming-regal-carrousel/', NULL, 0),
(57, 'Seven Dwarfs Mine Train', 'Race through the diamond mine from Snow White and the Seven Dwarfs on a swaying family coaster ride.', NULL, 'media/imgs/ride-imgs/seven-dwarfs-mine-train-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/seven-dwarfs-mine-train/', NULL, 0),
(58, 'Space Mountain', 'Blast off on a rip-roaring rocket into the furthest reaches of outer space on this roller-coaster ride in the dark.', NULL, 'media/imgs/ride-imgs/space-mountain-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/space-mountain/', NULL, 0),
(59, 'Splash Mountain', 'Drop into a whimsical world filled with classic characters and songs on this thrilling log-flume adventure.', NULL, 'media/imgs/ride-imgs/splash-mountain-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/splash-mountain/', NULL, 0),
(60, 'The Magic Carpets of Aladdin', 'Fly high over Adventureland on an enchanted carpet ride inspired by the Disney movie Aladdin.', NULL, 'media/imgs/ride-imgs/the-magic-carpets-of-aladdin-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/magic-carpets-of-aladdin/', NULL, 0),
(61, 'The Many Adventures of Winnie the Pooh', 'Travel through Hundred-Acre Wood in an oversized Hunny Pot and get lost in the pages of A.A. Milne\\u2019s classic tales.', NULL, 'media/imgs/ride-imgs/the-many-adventures-of-winnie-the-pooh-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/many-adventures-of-winnie-the-pooh/', NULL, 0),
(62, 'Tomorrowland Transit Authority PeopleMover', 'Embark on a 10-minute tour of Tomorrowland aboard this mass transit system of the future.', NULL, 'media/imgs/ride-imgs/tomorrowland-transit-authority-peoplemover-00.jpg', '5', '\"https://disneyworld.disney.go.com/attractions/magic-kingdom/tomorrowland-transit-authority-peoplemover/', NULL, 0),
(63, 'Under the Sea \\u2013 Journey of the Little Mermaid', 'Board a clamshell and become part of Ariel\\u2019s world on a musical adventure awash with scenes from the animated classic.', NULL, 'media/imgs/ride-imgs/under-the-sea-journey-of-the-little-mermaid-new-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/under-the-sea-journey-of-the-little-mermaid/', NULL, 0),
(64, 'Walt Disney\\u2019s Carousel of Progress', 'Travel through the 20th century and marvel at the evolution of technology during this classic Audio-Animatronics show.', NULL, 'media/imgs/ride-imgs/walt-disney-carousel-of-progress-00.jpg', '5', 'https://disneyworld.disney.go.com/attractions/magic-kingdom/walt-disney-carousel-of-progress/', NULL, 0),
(65, 'Aquazone Wave Racers', 'Family friendly hydro slider water carousel, which is operated in a water basin.', NULL, 'media/imgs/ride-imgs/aquazone-wave-racers.jpg', '6', 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/aquazone-wave-racers/', NULL, 0),
(66, 'Boating School', 'Boating School is an attraction that enables guests to experience actual driving and steering of a boat through a course.', NULL, 'media/imgs/ride-imgs/boating_school_1400x800.jpg', '6', 'https://www.undercovertourist.com/orlando/legoland-florida/boating-school/', NULL, 0),
(67, 'Coastersaurus', 'A classic wooden roller coaster designed to thrill riders with steep drops and fast turns.', NULL, 'media/imgs/ride-imgs/coastersaurus_1400x800.jpg', '6', 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/coastersaurus/', NULL, 0),
(68, 'Flying School', 'The train is designed to hang under the track (as opposed to a traditional roller coaster), giving guests who ride the feeling of flying.', NULL, 'media/imgs/ride-imgs/flying_school_1400x800.jpg', '6', 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/flying-school/', NULL, 0),
(69, 'Ford Driving School', 'An attraction that enables children to experience actual driving and steering of a car through a course', NULL, 'media/imgs/ride-imgs/ford_driving_school_1400x800.jpg', '6', 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/ford-driving-school/', NULL, 0),
(70, 'Lego Ninjago Ride', 'Blast animated fireballs, lightning and more at a sinister gallery of villains before teaming up to defeat a powerful foe.', NULL, 'media/imgs/ride-imgs/lego-ninjago-ride1400x800.jpg', '6', 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/lego-ninjago-world/', NULL, 0),
(71, 'Lost Kingdom Adventure', 'An interactive dark ride where guests compete for the highest score by shooting laser blasters', NULL, 'media/imgs/ride-imgs/lost-kingdom-adventure.jpg', '6', 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/lost-kingdom-adventure/', NULL, 0),
(72, 'Merlins Challenge', 'A caterpillar ride that spins in a clockwise motion and progressively speeds up.', NULL, 'media/imgs/ride-imgs/merlins-challenge_1800x900.jpg', '6', 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/merlin-s-challenge/', NULL, 0),
(73, 'Safari Trek', 'A slow moving car ride where guests travel through a LEGO\\u00ae jungle', NULL, 'media/imgs/ride-imgs/safari-trek.jpg', '6', 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/safari-trek/', NULL, 0),
(74, 'The Dragon', 'The Dragon is an indoor/outdoor steel roller coaster', NULL, 'media/imgs/ride-imgs/the_dragon.jpg', '6', 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/the-dragon/', NULL, 0),
(75, 'The Great Lego Race', 'The Great LEGO\\u00ae Race is an exciting wild-mouse style rollercoaster that thrills riders with large drops, hair-pin turns, and thrill inducing fun!', NULL, 'media/imgs/ride-imgs/the-great-lego-race.jpg', '6', 'https://www.legoland.com/florida/things-to-do/theme-park/rides-attractions/the-great-lego-race/', NULL, 0),
(76, 'Abby\'s Flower Tower', 'Just a sprinkle of magic from Abby Cadabby\\u2019s wand will send you up, up, up in colorful flower pots aboard Abby\\u2019s Flower Tower.', NULL, 'media/imgs/ride-imgs/Abbys-Flower-Tower.jpg', '7', 'https://seaworld.com/orlando/sesame-street/attractions/abbys-flower-tower/', NULL, 0);

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
(22, 'zoom@gmail.com', '$2y$10$tXJBCrPivxrrvEcO19zsdOyBQZBSX68BXIS8f.EmnGQ8Q39Q8VJAq', NULL);

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
  MODIFY `rideid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
