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
        $password = "";
        // Database
        $database = "lab";

        if($connection == null) {
            $connection = mysqli_connect($server, $username, $password, $database);
        }
    }

    function database_addUser($username, $password) {
        // Use the global connection
        global $connection;

        if($connection != null) {
            // Overwrite the existing password value as a hash
            $password = password_hash($password, PASSWORD_DEFAULT);
            // Insert username and hashed password
            mysqli_query($connection, "INSERT INTO users (username, password) VALUES ('{$username}', '{$password}');");
        }
    }

    function database_verifyUser($username, $password) {
        // Use the global connection
        global $connection;

        // Create a default value
        $status = false;

        if($connection != null) {
            // Use WHERE expressions to look for username
            $results = mysqli_query($connection, "SELECT password FROM users WHERE username = '{$username}';");
            
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
            $results = mysqli_query($connection, "SELECT t1.parkid, t1.parkname, t1.parklocation, t1.parkdescription, t1.parkWebSite, t2.rideid, t2.ridename, t2.ridedescription, t2.rideWebSite from parks t1, rides t2 where t1.parkid = t2.parkid;");
            
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
?>