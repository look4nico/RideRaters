//include jQuery (test)
var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);


var vUserhiddenfield = document.createElement('input');  
vUserhiddenfield.setAttribute("type", "hidden");
vUserhiddenfield.setAttribute("id", "hiddenuserid");

document.head.appendChild(vUserhiddenfield);


function login(e) {
    //delete cookie
    console.log("login function started ooooooooooooooooooooooooooooooooooooooooooooooooooo");
    e.preventDefault();

    var vEmail = document.getElementById("email").value;
    var vPassword = document.getElementById("pwd").value;
    var vLoggedIn = false;
     
    $(document).ready(function(){
        $.ajax({
            url: './rideratersbackend/login2.php',
            dataType: 'json',
            async: 'false',
            type: 'post',
            data: {username: vEmail, password: vPassword},
            success: function(response) {            
                //alert("Alert 1: " + JSON.stringify(response));
                console.log("log 1: " + JSON.stringify(response));
                // Handle the response from the PHP script
                if(response.success == "true")
                { 
                    
                    //transfer to other page 
                    window.location.href = "home.html";
                    console.log("log 2: " + JSON.stringify(response));
                    document.getElementById("hiddenuserid").value = vEmail;
                    localStorage.setItem("hiddenuserid",vEmail);
                    //var x = localStorage.getItem("hiddenuserid");
                    //alert("Alert 2: " + 'success');
                } else {                
                    console.log("log 3: " + JSON.stringify(response));
                    alert('Invalid User ID or Password');
                    window.location.href = "login.html";
                };
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
                alert('Error: ' + xhr.responseText);                
                window.location.href = "login.html";
            }
        }); 
    });
    //alert("test end");
}

function signup(e) {
    //delete cookie
    console.log("signup function started ooooooooooooooooooooooooooooooooooooooooooooooooooo");
    e.preventDefault();

    var vEmail = document.getElementById("email").value;
    var vPassword = document.getElementById("pwd").value;
    //alert(vEmail + '=' + vPassword);

    $(document).ready(function(){

        $.ajax({
            url: './rideratersbackend/signup2.php',
            dataType: 'json',
            async: 'false',
            type: 'post',
            data: {username: vEmail, password: vPassword},
            success: function(response) {            
                //alert("Alert 1: " + JSON.stringify(response));
                console.log("log 1: " + JSON.stringify(response));
                // Handle the response from the PHP script
                if(response.success == "true")
                {
                    //create cookie with uid, psw, logged in = true
                    //transfer to other page 
                    window.location.href = "login.html";

                    console.log("log 2: " + JSON.stringify(response));
                // alert("Alert 2: " + 'success');
                } else {                
                    console.log("log 3: " + JSON.stringify(response));
                    alert('System error, trying to figure this out');
                };
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
                alert('Error: ' + xhr.responseText);
            },
            complete: function (response){
                console.log("Ajax completed");
                //alert('Ajax completed');

                }
        });
    })
   // alert("test end");
}


function resetPassword(e) {
    //delete cookie
    e.preventDefault();

    console.log("reset function started ooooooooooooooooooooooooooooooooooooooooooooooooooo");

    var vEmail = document.getElementById("email").value;
    var vPassword = document.getElementById("pwd").value;
    var vNewPassword1 = document.getElementById("newpwd1").value;
    var vNewPassword2 = document.getElementById("newpwd2").value;
     
    if (vNewPassword1 != vNewPassword2) {
        console.log("passwords must match");
        alert("passwords must match");                
        window.location.replace = "resetpass.html";
        exit();
    }

    if (vPassword == vNewPassword2) {
        console.log("password must be new");
        alert("password must be new");                
        window.location.replace = "resetpass.html";
        exit();
    }

    $(document).ready(function(){
        e.preventDefault();
        return $.ajax({
            url: './rideratersbackend/resetpass.php',
            dataType: 'json',
            async: 'false',
            type: 'post',
            data: {username: vEmail, password: vPassword, passwordNew: vNewPassword1},
            success: function(response) {            
                //alert("Alert 1: " + JSON.stringify(response));
                console.log("log 1: " + JSON.stringify(response));
                // Handle the response from the PHP script
                if(response.success == "true")
                { 
                    //transfer to other page 
                   // window.location.href = "home.html";
                    console.log("log 2: " + JSON.stringify(response));
                    window.location.href = "login.html";
                    //alert("Alert 2: " + 'success');
                } else {                
                    console.log("log 3: " + JSON.stringify(response));
                    alert('Invalid Entry');
                    window.location.replace = "resetpass.html";
                };
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
                alert('Error: ' + xhr.responseText);                
                window.location.replace = "resetpass.html";
            }
        }); 
    });
    //alert("test end");
}

resetPassword().then( response =>
    
   console.log("ajax complete")
    );


function fetchRides() {
    console.log("fetchRides initiated");

    var vEmail = localStorage.getItem("hiddenuserid");

    var vAllRides = "";
    //alert(vEmail + '=' + vPassword) ;

    $(document).ready(function(){

        $.ajax({
            url: './rideratersbackend/fetchAllRides.php',
            dataType: 'json',
            async: 'false',
            type: 'post',
            data: {username: vEmail},
            success: function(response) {            
                //alert("Alert 1: " + JSON.stringify(response));
                console.log("log 1: " + JSON.stringify(response));
                // Handle the response from the PHP script
                if(response.success == "true")
                {
                    vAllRides = response.allRides;
                    console.log("log 2: " + JSON.stringify(response));
                // alert("Alert 2: " + 'success');
                } else {                
                    console.log("log 3: " + JSON.stringify(response));
                    alert('System error, trying to figure this out');
                };
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
                alert('Error: ' + xhr.responseText);
            },
            complete: function (response){
                console.log("Ajax completed");
                //alert('Ajax completed');

                }
        });
    })

}
