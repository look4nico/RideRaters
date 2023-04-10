CREATE TRIGGER `OnDeleteUpdateRidesTable` AFTER DELETE ON `rideratings`
 FOR EACH ROW update rides 
set averagerating = (select round(avg(rating),2)  from rideratings where rideid = old.rideid),
   ratingcount = (select count(*) from rideratings where rideid = old.rideid)
 where rideid = old.rideid

CREATE TRIGGER `OnInsertRideRating` BEFORE INSERT ON `rideratings`
 FOR EACH ROW set new.ridename = (select ridename from rides where rideid = new.rideid)

CREATE TRIGGER `OnInsertUpdateRidesTable` AFTER INSERT ON `rideratings`
 FOR EACH ROW update rides 
set averagerating = (select round(avg(rating),2)  from rideratings where rideid = new.rideid),
   ratingcount = (select count(*) from rideratings where rideid = new.rideid)
 where rideid = new.rideid

CREATE TRIGGER `OnUpdateUpdateRidesTable` AFTER UPDATE ON `rideratings`
 FOR EACH ROW update rides 
set averagerating = (select round(avg(rating),2)  from rideratings where rideid = new.rideid),
   ratingcount = (select count(*) from rideratings where rideid = new.rideid)
 where rideid = new.rideid
