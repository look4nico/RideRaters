<?php
    include("security.php");
    if (isset($_POST['btnLogin'])) { 
      if (security_validate()){
          if (security_login()) { 
            //redirect to login.php
            header("Location: ./login.php");
            exit();
          } else {
            echo("Incorrect Username and password !");
          }
      } else {
          echo("Enter User Name and password !");
      } 
    }
?>
<html>
    <head>
        <title>Login Page</title>
    </head>
    <body>
        <form action="login.php" method="POST">
          <?php if (security_loggedIn()){ ?>
            <h2> You are already logged in</h2><br/><br/>
            <a href='./index.php'>Go To Main Page</a><br/>
          <?php } else { ?>
            <label>User Name</label>
            <input type="text" placeholder="User Name" name="username">
            <br/>
            <label>Password</label>
            <input type="password" placeholder="Password" name="password">            
            <button type="submit" name="btnLogin">Login</button>           
          <?php } ?>  
         </form>
     </body>
    </html>