<?php
    session_start();
    include("security.php"); 
    
    $status = false;         
    $data = ['success' => 'false'];     

    if(isset($_POST["userid"]) and isset($_POST["rideid"]) and isset($_POST["riderating"])) {
        $status = true;
    } else {        
        echo json_encode($data);
        exit();
    }

    $param1 = $_POST['userid'];
    $param2 = $_POST["rideid"];
    $param3 = $_POST["riderating"]; 

    if(database_setRideRating($param1, $param2, $param3)){           
            $data = ['success' => 'true'];
            echo json_encode($data);
            exit();
        }

    $data = ['success' => 'false'];
    echo json_encode($data);
    exit();
     
?>

