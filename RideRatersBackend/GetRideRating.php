<?php
    session_start();
    include("security.php"); 
    
    $status = false;         
    $data = ['success' => 'false'];     

    if(isset($_POST["userid"]) and isset($_POST["rideid"])) {
        $status = true;
    } else {        
        echo json_encode($data);
        exit();
    }

    $param1 = $_POST['userid'];
    $param2 = $_POST["rideid"]; 

    $vRideRating = ['success' => 'false'];
    $vRideRating = database_getRideRating($param1, $param2);

    echo json_encode($vRideRating);
    exit();
     
?> 
 