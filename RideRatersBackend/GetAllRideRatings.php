<?php 
  //echo "Step 0 ";
  session_start();
  include("security.php");
  //echo "Step 1 ";  
  $vAllRatings = ['success' => 'false'];   
  //echo "Step 2 ";
  try{
    $vAllRatings = ['success' => 'false', 'Error' => 'step 1'];
    //echo "Step 3 ";
    database_connect();
    //echo "Step 4 ";
    $vAllRatings = ['success' => 'false', 'Error' => 'step 2'];
    $vAllRatings = database_getAllRideRatings();         
    //$vAllRatings = ['success' => 'false'];
  }
  catch (exception $e){
    //echo "Step 5 ";
    $vAllRatings = $vAllRatings .'Error: ' .$e-> getMessage();
    //echo "Step 6 ";
  }
  //database_close();
  echo json_encode($vAllRatings);
  exit();

?>