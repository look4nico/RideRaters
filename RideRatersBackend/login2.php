<?php
  session_start();

  include("security.php");
  $param1 = $_POST['email'];  // changed from 'username'
  $param2 = $_POST["password"]; 
  
  // Return the data as a JSON-encoded string
  if (security_validate()){
    if (security_login()) { 
      //redirect to login.php
      $data = ['success' => 'true'];
      $_SESSION["email"] = $param1;
      $_SESSION["password"] = $param2;
      // print to console $param1
      //echo $param1;
      echo json_encode($data);
      
      //exit();
    } else {
      $data = ['success' => 'false'];
      echo json_encode($data);
    }
  } else {
    $data = ['success' => 'false'];
    echo json_encode($data);
  } 
  exit();
?>

