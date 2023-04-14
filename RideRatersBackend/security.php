<?php
    include("database.php");

    function security_deleteUser(){

        // Set a default value
        $status = false;

        $result = security_sanitize();
        // Open connection.
        database_connect();

        // Use connection.
        //
        // We want to make sure we user exist before delete
        if(database_verifyUser($result["username"], $result["password"])) {
            // If Username exist, Delete 
            database_deleteUser($result["username"]);
            $status = true;
        }
        
        // Close connection.
        database_close();
        return $status;

    }

    function security_changePassword(){
        // Set a default value
        $status = false; 

        $result = security_sanitizeChangePassword();
        // Open connection.
        database_connect();

        // Use connection.
        //
        // We want to make sure user is valid before update
        if(database_verifyUser($result["username"], $result["password"])) {
            // If Username exist, Delete 
            database_changePassword($result["username"],$result["passwordNew"]);
            $status = true;
        }
        
        // Close connection.
        database_close();

        return $status;
    }
    function security_validate() {
        // Set a default value
        $status = false;
        
        // Validate
        if(isset($_POST["email"]) and isset($_POST["password"])) {
            $status = true;
        }

        return $status;
    }

    function security_validateChangePassword() {
        // Set a default value
        $status = false;
        
        // Validate
        if(isset($_POST["username"]) and isset($_POST["password"]) and isset($_POST["passwordNew"])) {
            $status = true;
        }

        return $status;
    }
    function security_login() {
        // Set a default value
        $status = false;
        // Validate and sanitize
        $result = security_sanitize();
        // Open connection
        database_connect();
        // Use the connection
        $status = database_verifyUser($result["email"], $result["password"]);
        // Close connection
        database_close();
        // Check status
        if($status) {
            // Set a cookie
            setcookie("login", "yes");
        }
        return $status;
    }

    function security_addNewUser(){
        // Set a default value
        $status = false;
        // Validate and sanitize.
        $result = security_sanitize();
        // Open connection.
        database_connect();

        // Use connection.
        //
        // We want to make sure we don't add
        //  duplicate values.
        if (!database_verifyUser($result["username"], $result["password"], $result["email"])) {
            // Username does not exist.
            // Add a new one.
            database_addUser($result["username"], $result["password"], $result["email"]);
            $status = true;
        }

        // Close connection.
        database_close();
        return $status;
    }


    function security_loggedIn() {
        // Does a cookie exist?
        return isset($_COOKIE["login"]);
    }

    function security_logout() {
        // Set a cookie to the past
        setcookie("login", "yes", time() - 10);
    }

    function security_sanitize() {
        // Create an array of keys username and password
        $result = [
            "username" => null,
            "password" => null,
            "email" => null
        ];

        if(security_validate()) {
            // After validation, sanitize text input.
            $result["username"] = htmlspecialchars($_POST["username"]);
            $result["password"] = htmlspecialchars($_POST["password"]);
            $result["email"] = htmlspecialchars($_POST["email"]);
        }

        // Return array
        return $result;
    }
    function security_sanitizeChangePassword() {
        // Create an array of keys username and password
        $result = [
            "username" => null,
            "password" => null,
            "passwordNew" => null
        ];

        if(security_validate()) {
            // After validation, sanitize text input.
            $result["username"] = htmlspecialchars($_POST["username"]);
            $result["password"] = htmlspecialchars($_POST["password"]);
            $result["passwordNew"] = htmlspecialchars($_POST["passwordNew"]);
        }

        // Return array
        return $result;
    } 
?>