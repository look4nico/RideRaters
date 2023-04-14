<?php
// connect to database
include("database.php");
database_connect();

session_start();

if (isset($_SESSION['email'])) {
    $email = $_SESSION['email'];
    $query = "SELECT id, username FROM users WHERE email = '{$email}'";
    $result = mysqli_query($connection, $query);
    $row = mysqli_fetch_assoc($result);
    if ($row != null) {
        $userInfo = array('email' => $email, 'username' => $row['username'], 'id' => $row['id']);
        echo json_encode($userInfo);
    } else {
        echo json_encode(array('error' => 'User not found'));
    }
} else {
    echo json_encode(array('error' => 'User not logged in'));
}
database_close();
