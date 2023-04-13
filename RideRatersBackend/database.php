<?php
    // Global connection
    $connection = null;

    function database_deleteUser($username) {

             // Use the global connection
             global $connection;

             if($connection != null) {

                 // dewete user
                 mysqli_query($connection, "DELETE FROM users WHERE username = '{$username}';");
             }
             
             
    }

    function database_changePassword($username, $passwordNew) {

        // Use the global connection
        global $connection;
 
        if($connection != null) {
            // hash new password
            $passwordNew = password_hash($passwordNew, PASSWORD_DEFAULT);
            // update password
            mysqli_query($connection, "UPDATE users SET password = '{$passwordNew}' WHERE username = '{$username}';");
        }        
        
    }


    function database_connect() {
        // Use the global connection
        global $connection;

        // Server
        $server = "localhost";
        // Username
        $username = "root";
        // If using XAMPP, 
        //  the password is an empty string.
        $password = "root";
        // Database
        $database = "lab";

        if($connection == null) {
            $connection = mysqli_connect($server, $username, $password, $database);
        }
    }

    function database_addUser($username, $password, $email) {
        // Use the global connection
        global $connection;

        if($connection != null) {
            // Overwrite the existing password value as a hash
            $password = password_hash($password, PASSWORD_DEFAULT);
            // Insert username and hashed password
            mysqli_query($connection, "INSERT INTO users (username, password, email) VALUES ('{$username}', '{$password}', '{$email}');");
        }
    }
    

    function database_verifyUser($email, $password) {
        // Use the global connection
        global $connection;

        // Create a default value
        $status = false;

        if($connection != null) {
            // Use WHERE expressions to look for username
            $results = mysqli_query($connection, "SELECT password FROM users WHERE email = '{$email}';");
            
            // mysqli_fetch_assoc() returns either null or row data
            $row = mysqli_fetch_assoc($results);
            
            // If $row is not null, it found row data.
            if($row != null) {
                // Verify password against saved hash
                if(password_verify($password, $row["password"])) {
                    $status = true;
                }
            }
        }

        return $status;
    }

    function database_close() {
        // user global connection
        global $connection;

        if($connection != null) {
            mysqli_close($connection);
        }
    }

    function database_fetchAllRides(){
        global $connection;
        database_connect();
        $status = "false";
        $vReturn =['success' => $status];
        
        $ridearray = array();
        
        if($connection != null) {             
            $results = mysqli_query($connection, "SELECT t1.parkid, t1.parkname, t1.parkimagepath, t1.parklocation, t1.parkdescription, t1.parkWebSite, t2.rideid, t2.ridename, t2.ridedescription, t2.rideimagepath, t2.rideWebSite from parks t1, rides t2 where t1.parkid = t2.parkid;");
            
            // mysqli_fetch_assoc() returns either null or row data
            while ($row = mysqli_fetch_assoc($results)){
                $ridearray[] = $row;
            }   
                     
            $status = "true";
        }
        
        //database_close();
              
        $vReturn = ['success' => $status, 'allRides' => $ridearray]; 

        return $vReturn;
    }

    function database_setRideRating(string $userid, string $rideid, string $riderating){
        global $connection;
        database_connect();
        $status = "false"; 
                 
        if($connection != null) { 
            try {         
                $result = mysqli_query($connection, "INSERT INTO rideratings (userid, rideid, rating, date) VALUES ('{$userid}', '{$rideid}', '{$riderating}', sysdate());");
                if ($result) { $status = "true";}  
            }
            catch (exception $e) { 
                //echo " here 3 " .$e->getMessage();; 
                // if duplicate, then update existing record
                if (mysqli_errno($connection) == 1062) {  
                    $result = mysqli_query($connection, "update rideratings set rating = '{$riderating}', date = sysdate() where userid ='{$userid}' and rideid = '{$rideid}' ;");
                      
                    if ($result) { $status = "true";}
                }
            }
            finally{  }            
        }
        database_close();
        return $status;
    }
    function database_getAllRideRatings () {
        global $connection;
        database_connect();
        $status = "false";
        $vReturn =['success' => $status];
        
        $ridearray = array();
        
        if($connection != null) {             
            $results = mysqli_query($connection, "SELECT rideid, ridename, averagerating, ratingcount from rides ;");
            
            // mysqli_fetch_assoc() returns either null or row data
            while ($row = mysqli_fetch_assoc($results)){
                $ridearray[] = $row;
            }   
                     
            $status = "true";
        }
        
        database_close();
              
        $vReturn = ['success' => $status, 'allRides' => $ridearray]; 

        return $vReturn;
    }
    function database_getRideRating(string $userid, string $rideid){
        global $connection;
        database_connect(); 
        $vReturn =['success' => "false"];
                 
        if($connection != null) { 
            try {   
                $vSQL = "SELECT t1.rating, t2.averagerating FROM rideratings t1, rides t2 ";
                $vSQL = $vSQL ." WHERE t1.userid = '{$userid}' and t1.rideid='{$rideid}' ";
                $vSQL = $vSQL ."  and t1.rideid = t2.rideid";     
                //echo $vSQL; 
                $results = mysqli_query($connection, $vSQL );
                $row = mysqli_fetch_assoc($results);
                //userrating
                //averating 
                $vReturn = ['success' => "true", 'userrating' => $row['rating'], 'averating' => $row['averagerating']];   
            }
            catch (exception $e) { 
                //echo " here 3 " .$e->getMessage();;  
            }
            finally{  }            
        }
        database_close();
        return $vReturn;
    }
    function database_getAllUserRideRatings(string $userid){
        global $connection;
        database_connect(); 
        $vReturn =['success' => "false"];        
        $ridearray = array();        

        if($connection != null) { 
            try {   
                $vSQL = "SELECT t1.rideid, t1.rating, t2.averagerating FROM rideratings t1, rides t2 ";
                $vSQL = $vSQL ." WHERE t1.userid = '{$userid}' ";
                $vSQL = $vSQL ."  and t1.rideid = t2.rideid";     
                //echo $vSQL; 
                $results = mysqli_query($connection, $vSQL );
                while ($row = mysqli_fetch_assoc($results)){
                    $ridearray[] = $row;
                }  
                $vReturn = ['success' => "true", 'allUserRatings' => $ridearray]; 
            }
            catch (exception $e) { 
                //echo " here 3 " .$e->getMessage();;  
            }
            finally{  }            
        }
        database_close();
        return $vReturn;
    }
