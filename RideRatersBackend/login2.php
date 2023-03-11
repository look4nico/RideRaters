<?php
session_start();

//foreach ($_POST as $key => $value) {
//  echo "$key: $value\n";
//}
//exit();
include("security.php");
$param1 = $_POST['username'];
$param2 = $_POST["password"]; 
 
// Return the data as a JSON-encoded string   FIND to see PHP backend log
if (security_validate()){
  if (security_login()) { 
    //redirect to login.php
    $data = ['success' => 'true'];
    $_SESSION["user"] = $param1;
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
