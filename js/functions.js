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
            url: './RideRatersBackend/login2.php',
            dataType: 'json',
            async: 'false',
            type: 'post',
            data: {email: vEmail, password: vPassword}, 
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
    var vUsername = document.getElementById("username").value;
    //alert(vEmail + '=' + vPassword);

    $(document).ready(function(){

        $.ajax({
            url: './RideRatersBackend/signup2.php',
            dataType: 'json',
            async: false,
            type: 'post',
            data: {username: vUsername, password: vPassword, email: vEmail},
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
        return $.ajax({
            url: './RideRatersBackend/resetpass.php',
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

//resetPassword().then( response =>
//   console.log("ajax complete")
//    );

function fetchRides(e) {
    e.preventDefault();
    console.log("fetchRides initiated");

    var vEmail = localStorage.getItem("hiddenuserid");

    var vAllRides = "";
    //alert(vEmail + '=' + vPassword) ;

    $(document).ready(function(){

        $.ajax({
            url: './RideRatersBackend/fetchAllRides.php',
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

function setRideRating(e) {     
    e.preventDefault();
    console.log("setRideRating function started ooooooooooooooooooooooooooooooooooooooooooooooooooo");
    
    var form = document.getElementById('testform');
    var data = new FormData(form);
    for (var [key, value] of data) {
        console.log(key, value)
    }
    var vUserid = document.getElementById("userid").value; 
    var vRideid = document.getElementById("rideid").value; 
    var vRiderating = document.getElementById("riderating").value;  
     
    $(document).ready(function(){
        return $.ajax({
            url: './RideRatersBackend/setRideRating.php',
            dataType: 'json',
            async: 'false',
            type: 'post',
            data: {userid: vUserid, rideid: vRideid, riderating: vRiderating},
            success: function(response) {            
                //alert("Alert 1: " + JSON.stringify(response));
                console.log("log 1: " + JSON.stringify(response));
                // Handle the response from the PHP script
                if(response.success == "true")
                { 
                    //transfer to other page 
                   // window.location.href = "home.html";
                    console.log("log 2: " + JSON.stringify(response));
                    //window.location.href = "xxxxxxxxxxxx.html";
                    //alert("Alert 2: " + 'success');
                } else {                
                    console.log("log 3: " + JSON.stringify(response));
                    alert('Failed to set ride rating');
                    //window.location.replace = "xxxxxxxxxxxxxxxx.html";
                };
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
                alert('Error setiing ride rating: ' + xhr.responseText);                
                //window.location.replace = "xxxxxxxxxxxxx.html";
            }
        }); 
    });
    //alert("test end");
}

function GetAllRideRatings(e) {
    e.preventDefault();
    console.log("GetAllRideRatings initiated");

    var vAllRideRatings = "";    
    var vEmail = localStorage.getItem("hiddenuserid");

    $(document).ready(function(){

        $.ajax({
            url: './RideRatersBackend/GetAllRideRatings.php',
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
                    vAllRideRatings = response.allRides;
                    console.log("log 2: " + JSON.stringify(response));
                // alert("Alert 2: " + 'success');
                } else {                
                    console.log("log 3: " + JSON.stringify(response));
                    alert('System error, trying to figure this out');
                };
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
                alert('Error in GetAllRideRatings function : ' + xhr.responseText);
            },
            complete: function (response){
                console.log("Ajax completed");
                //alert('Ajax completed');

                }
        });
    })

}
function GetRideRating(e){
    //retrieve ride rating for user, and avarege rating for ride
    e.preventDefault();
    console.log("retrieveRideRating initiated");

    //var vEmail = localStorage.getItem("hiddenuserid");
    var vUserid = document.getElementById("userid1").value; 
    var vRideid = document.getElementById("rideid1").value; 

    var vUserRating = ""; 
    var vAveRating = ""; 

    $(document).ready(function(){

        $.ajax({
            url: './RideRatersBackend/GetRideRating.php',
            dataType: 'json',
            async: 'false',
            type: 'post',
            data: {userid: vUserid, rideid: vRideid},
            success: function(response) {            
                //alert("Alert 1: " + JSON.stringify(response));
                console.log("log 1: " + JSON.stringify(response));
                // Handle the response from the PHP script
                if(response.success == "true")
                {
                    vUserRating = response.userrating;
                    vAveRating = response.averating;
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
function GetUserRideRatings(e){
    //retrieve ride rating for user, and avarege rating for ride
    e.preventDefault();
    console.log("retrieveRideRating initiated");

    //var vEmail = localStorage.getItem("hiddenuserid");
    var vUserid = document.getElementById("userid2").value; 
    var vAllRideRatings = '';
    $(document).ready(function(){

        $.ajax({
            url: './RideRatersBackend/GetUserRideRatings.php',
            dataType: 'json',
            async: 'false',
            type: 'post',
            data: {userid: vUserid},
            success: function(response) {            
                //alert("Alert 1: " + JSON.stringify(response));
                console.log("log 1: " + JSON.stringify(response));
                // Handle the response from the PHP script
                if(response.success == "true")
                {
                    vAllRideRatings = response.allRides;
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