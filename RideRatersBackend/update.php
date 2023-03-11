<?php
    include("security.php");
    
    if (isset($_POST['btnChangePassword'])) {
      if(security_validateChangePassword()){  
          if (security_changePassword()) { 
            //redirect to login.php
            header("Location: ./login.php");
            exit();
          } else {
            echo("Incorrect Username and password !");
          }
      } else {
          echo("Enter Username, Old password and New password !");
      } 
    }
?>
<html>
    <head>
        <title>Change Password</title>
    </head>
    <body>
        <form action="update.php" method="POST">           
            <?php if (security_loggedIn()){ ?> 
                <label>User Name</label>
                <input type="text" placeholder="User Name" name="username">
                <br/><br/>            
                <label>Old Password</label>
                <input type="password" placeholder="Old Password" name="password">
                <br/><br/>
                <label>New Password</label>
                <input type="password" placeholder="New Password" name="passwordNew">
                <br/><br/>            
                <button type="submit" name="btnChangePassword">Change Passowrd</button>            
            <?php } else { ?>            
                <h2> You are not logged in</h2><br/><br/>
                <a href='./signup.php'>Go To Sign Up Page</a><br/>
            <?php } ?> 
         </form>
     </body>
    </html>