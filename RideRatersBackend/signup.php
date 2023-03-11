<?php
    include("security.php"); 

    if (isset($_POST['btnSignup'])) {
        if(security_validate()){
            security_addNewUser();
            //redirect to login.php
            header("Location: ./login.php");
            exit();
        } else {
            echo("Enter Username and password !");
        }
    }
?>
<html>
    <head>
        <title>Signup Page</title>
    </head>
    <body>
        <form action="signup.php" method="POST">          
            <?php if (security_loggedIn()){ ?> 
                <h2>You are logged in</h2>
                <br/><br/>
                <a href='./index.php'>Go To Main Page</a><br/>           
            <?php } else { ?>            
                <h1>Fill fields below to signup </h1>
                <label>User Name</label>
                <input type="text" placeholder="User Name" name="username">
                
                <label>Password</label>
                <input type="password" placeholder="Password" name="password">
                
                <button type="submit" name="btnSignup">Signup</button>
            <?php } ?> 
         </form>
     </body>
    </html>