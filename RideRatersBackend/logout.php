<?php
    include("security.php");
  // This will erase the cookie on the next request-response cycle
  security_logout();
?> 
<html>
    <head>
        <title>Log Out Page</title>
    </head>
    <body>
        <form action="logout.php" method="POST"> 
            <h2> You are logged out</h2><br/><br/>
            <a href='./index.php'>Go To Main Page</a><br/> 
         </form>
     </body>
    </html>