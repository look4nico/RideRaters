<?php
    session_start();
    include("security.php"); 
             
    //$data = ['success' => 'maybe'];
    //echo json_encode($data);
    //exit();

    if(security_validate()){
        if(security_addNewUser()){           
            $data = ['success' => 'true'];
            echo json_encode($data);
            exit();
        }
    }  

    $data = ['success' => 'false'];
    echo json_encode($data);
    exit();
     
?>