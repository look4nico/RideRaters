<?php
    include("security.php");

if (isset($_POST['logout'])) {

    security_logout();

    header("Location: ./login.php");
  }


?>


<html>
    <head>
        <title>Welcome</title>
    </head>
    <body>
        <form action="welcome.php" method="POST">
            
            <label>Welcome to Site</label>
</br>
            
            <button type="submit" name="logout">Logout</button> <br/>
            <a href='./update.php'>Change Password</a> <br/>
            <a href='./remove.php'>Delete User</a>

         </form>
     </body>
    </html>