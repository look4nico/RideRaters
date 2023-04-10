<?php 
  session_start();
  include("security.php");
   
  database_connect();

  $vAllRatings = database_getAllRideRatings();         
  //$vAllRatings = ['success' => 'false'];

  //database_close();
  echo json_encode($vAllRatings);
  exit();

?>