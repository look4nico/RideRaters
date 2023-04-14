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
        // //echo " step 1 ";
        // $connection = mysqli_init();
        // //echo " step 2 ";
        // if (!$connection) {
        //     echo " Connection to DataBase Failed 3 ";
        //     die("mysqli_init failed");
        // } 
        // //echo " step 4 ";
        // mysqli_options($connection, MYSQLI_OPT_CONNECT_TIMEOUT, 10); 
        // mysqli_options($connection, MYSQLI_OPT_READ_TIMEOUT, 10); 
        // mysqli_options($connection, MYSQLI_OPT_NET_CMD_BUFFER_SIZE, '8M' ); 
        // mysqli_options($connection, MYSQLI_OPT_NET_READ_BUFFER_SIZE, '8M' );
        // //echo " step 6 ";
        // mysqli_real_connect($connection,"localhost","mi051819","!1Qqazxcvbnm","mi051819");
        // //echo " step 7 ";
        // return;
        // //exit();

        // Server "localhost"  
        $server = "localhost";
        // Username "root"
        $username = "mi051819";
        // If using XAMPP, 
        //  the password is an empty string.
        $password = "!1Qqazxcvbnm";
        // Database, in school server 'mi051819' was "lab"
        $database = "mi051819";
        // $options = ["MYSQLI_OPT_CONNECT_TIMEOUT" => "10","MYSQLI_OPT_READ_TIMEOUT" => "10","MYSQLI_OPT_NET_CMD_BUFFER_SIZE" => "15"];

        if($connection == null) {
            $connection = mysqli_connect($server, $username, $password, $database); 
            // mysqli_options($connection, MYSQLI_OPT_CONNECT_TIMEOUT, 10);
            // mysqli_options($connection, MYSQLI_OPT_READ_TIMEOUT, 10);
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
            try {    //echo "here 1";
                $vSQL = " SELECT T1.PARKID, T1.PARKNAME, T1.PARKIMAGEPATH, T1.PARKLOCATION, T1.PARKDESCRIPTION, T1.PARKWEBSITE, " ;
                $vSQL = $vSQL ." T2.RIDEID, T2.RIDENAME, T2.RIDEDESCRIPTION, T2.RIDEIMAGEPATH, T2.RIDEWEBSITE "; 
                $vSQL = $vSQL ." FROM PARKS T1, RIDES T2 WHERE T1.PARKID = T2.PARKID ; ";
                $results = mysqli_query($connection, $vSQL);            
                //echo "here 2";
                // mysqli_fetch_assoc() returns either null or row data
                while ($row = mysqli_fetch_assoc($results)){
                    $ridearray[] = $row;
                }   
                        
                $status = "true";
            }
            catch (exception $e){
                echo " Failed at database_fetchAllRides " .$e->getMessage();
            }
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
                    $result = mysqli_query($connection, "UPDATE rideratings SET rating = '{$riderating}', date = NOW() WHERE userid ='{$userid}' AND rideid = '{$rideid}' ;");
                    
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
        $status = "false";
        $vReturn =['success' => $status];        
        $ridearray = array();
        $error = "Success";
        //echo "Step DB 1 ";
        try {            
            database_connect();
            //echo "Step DB 2 ";
            
            if($connection != null) {                          
                //$results = mysqli_query($connection, "SELECT rideid, ridename, averagerating, ratingcount FROM rides  WHERE RIDEID < 3  ;");  
                $results = mysqli_query($connection, "SELECT rideid, ridename, averagerating, ratingcount FROM rides ;");   
                //echo "Step DB 4 ";
                while ($row = mysqli_fetch_assoc($results)){
                    $ridearray[] = $row;
                }   
               // echo "Step DB 5 ";  
                $status = "true";                
                database_close();
            }
        }
        catch (exception $e){
            echo " Failed at database_getAllRideRatings " .$e->getMessage();
            $error = 'Error: ' .$e-> getMessage();
        }        
       // echo "Step DB 7 ";
        $vReturn = ['success' => $status, 'allRides' => $ridearray, 'Message' => $error]; 
        //echo json_encode($vReturn);   
        //echo "Step DB 8 ";
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
                $vSQL = $vSQL ."  and t1.rideid = t2.rideid ;";     
                //echo $vSQL; 
                $results = mysqli_query($connection, $vSQL );
                $row = mysqli_fetch_assoc($results);
                //userrating
                //averating 
                $vReturn = ['success' => "true", 'userrating' => $row['rating'], 'averating' => $row['averagerating']];   
            }
            catch (exception $e) { 
                echo " Failed at database_getRideRating " .$e->getMessage();
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
                $vSQL = $vSQL ."  and t1.rideid = t2.rideid ;";     
                //echo $vSQL; 
                $results = mysqli_query($connection, $vSQL );
                while ($row = mysqli_fetch_assoc($results)){
                    $ridearray[] = $row;
                }  
                $vReturn = ['success' => "true", 'allUserRatings' => $ridearray]; 
            }
            catch (exception $e) { 
                echo " Failed at database_getAllUserRideRatings " .$e->getMessage(); 
            }
            finally{  }            
        }
        database_close();
        return $vReturn;
    }
