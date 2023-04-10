<?php
    session_start();
    include("security.php"); 
    
    $status = false;         
    $data = ['success' => 'false'];     

    if(isset($_POST["userid"]) ) {
        $status = true;
    } else {        
        echo json_encode($data);
        exit();
    }

    $param1 = $_POST['userid']; 

    $vRideRatings = ['success' => 'false'];
    $vRideRatings = database_getAllUserRideRatings($param1);

    echo json_encode($vRideRatings);
    exit();
     
?> 
 