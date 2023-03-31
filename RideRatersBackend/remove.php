<?php
    include("security.php");
    
    if (isset($_POST['btnRemove'])) {
        if(security_validate()){         
            if (security_loggedIn() && security_deleteUser()) {
                header("Location: ./index.php");
                exit();  
            } else {
                echo("Incorrect Username and password !");
            }
        } else {
            echo("Enter Username and password !");
        } 
    }
?>
<html>
    <head>
        <title>Remove User</title>
    </head>
    <body>
        <form action="remove.php" method="POST">          
            <?php if (security_loggedIn()){ ?> 
                <h2>Delete User Page</h2>
                <label>User Name</label>
                <input type="text" placeholder="User Name" name="username">
                <br/>
                <label>Password</label>
                <input type="password" placeholder="Password" name="password">            
                <button type="submit" name="btnRemove">Remove</button>
            <?php } else { ?>            
                <h2> You are not logged in</h2><br/><br/>
                <a href='./signup.php'>Go To Sign Up Page</a><br/>
            <?php } ?> 
         </form>
     </body>
    </html>