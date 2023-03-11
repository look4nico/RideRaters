<?php
    include("security.php");
?>

<html>
    <head>
        <title>Welcome</title>
    </head>
    <body>
        <form action="welcome.php" method="POST">
            
            <label>Welcome to Site</label></br>
            <?php
             if (security_loggedIn()){ ?>
                <h2>You are logged in</h2>
                <a href='./logout.php'>Go To Log Out Page</a><br/>
                <a href='./update.php'>Change Password</a> <br/>
                <a href='./remove.php'>Delete User</a>        
            <?php } else { ?> 
                <h2>You are Not logged in</h2>
                <a href='./signup.php'>Go To SignUp Page</a><br/>
                <a href='./login.php'>Go To Login Page</a> <br/>
            <?php } ?> 

         </form>
     </body>
    </html>