<?php 
  session_start();
  include("security.php");
   
  database_connect();

  $vAllRides = database_fetchAllRides();         
  //$vAllRides = ['success' => 'false'];

  database_close();
  echo json_encode($vAllRides);
  exit();

?>