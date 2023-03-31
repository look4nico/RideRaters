<?php
  
session_start();
    include("security.php");
    
      if(security_validateChangePassword()){  
          if (security_changePassword()) {                      
            $data = ['success' => 'true'];
            echo json_encode($data);
            exit();
          }
      } 
             
      $data = ['success' => 'false'];
      echo json_encode($data);
      exit();
?>
