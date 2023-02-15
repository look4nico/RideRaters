
fetch('/data/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const rides = data.parks[0].rides[0].park;
    const addRides = data.parks
    
    let allRides = [];

    //map through parks array
    for (let i = 0; i < addRides.length; i++) {
        allRides.push(data.parks[i].rides);
        // console.log(data.parks[i].rides);
        // console.log(data.parks[i]);
        // console.log(addRides.length);
    }

    let ridesList = [];

    //map through rides array
    for (let i = 0; i < allRides.length; i++) {
        for (let j = 0; j < allRides[i].length; j++) {
            // console.log(allRides[i][j]);
            ridesList.push(allRides[i][j]);
        }
    }
    console.log(ridesList.length);
    console.log(ridesList);
    console.log(ridesList[1].name);

    const parks = data.parks;
    console.log(rides);
    console.log(allRides);
    console.log(parks);
    search(parks);
    searchRides(ridesList);
    ridesGlobal(ridesList);

  })
  .catch(error => {
    console.error('There was a problem:', error);
});


function searchRides(data) {
    const searchRides = document.getElementById('search-for-rides');
    const searchResultsContainer = document.getElementById("search-results-container");
    const template = document.getElementById("search-result-template");
    
    if (searchRides) {
        searchRides.addEventListener('input', () => {
            const searchValue = searchRides.value.toLowerCase();
            const filteredParks = data.filter(park => {
                return park.name.toLowerCase().includes(searchValue);
            });
            // console.log(filteredParks);
            // console.log(filteredParks[0].name);
            // console.log(filteredParks);
        
            searchResultsContainer.innerHTML = "";

            filteredParks.forEach((ride) => {
            const result = document.importNode(template.content, true);
            const rideImg = result.querySelector(".list-ride-img");
            const rideLocation = result.querySelector(".list-ride-location");
            const rideName = result.querySelector(".list-ride-name");
            const userRating = result.querySelector(".user-rating-txt");
            const accessRating = result.querySelector(".access-rating-txt");
            const location = result.querySelector(".proxima-regular");
            const itemCity = result.querySelector(".ride-city");
            
            rideImg.src = ride.img;
            rideLocation.textContent = ride.park;
            rideName.textContent = ride.name;
            userRating.textContent = ride.rating;
            accessRating.textContent = ride.rating;
            location.textContent = ride.rating;
            itemCity.textContent = ride.location;

            searchResultsContainer.appendChild(result);
            });

    
        }); 
    }
};

function search(data) {
    const searchParks = document.getElementById('search-for-parks');
    const searchRides = document.getElementById('search-for-rides');
    const searchResultsContainer = document.getElementById("search-results-container");
    const template = document.getElementById("search-result-template");
    
    if (searchRides) {
        searchRides.addEventListener('input', () => {
            const searchValue = searchRides.value.toLowerCase();
            const filteredParks = data.filter(park => {
                return park.name.toLowerCase().includes(searchValue);
            });
            // console.log(filteredParks);
            // console.log(filteredParks[0].name);
            // console.log(filteredParks);
        
            searchResultsContainer.innerHTML = "";

            filteredParks.forEach((ride) => {
            const result = document.importNode(template.content, true);
            const rideImg = result.querySelector(".list-ride-img");
            const rideLocation = result.querySelector(".list-ride-location");
            const rideName = result.querySelector(".list-ride-name");
            const userRating = result.querySelector(".user-rating-txt");
            const accessRating = result.querySelector(".access-rating-txt");
            const location = result.querySelector(".proxima-regular");
            const itemCity = result.querySelector(".ride-city");
            
            rideImg.src = ride.img;
            rideLocation.textContent = ride.name;
            rideName.textContent = ride.name;
            userRating.textContent = ride.rating;
            accessRating.textContent = ride.rating;
            location.textContent = ride.rating;
            itemCity.textContent = ride.location;

            searchResultsContainer.appendChild(result);
            });

    
        }); 
    }

    
    if (searchParks) {
        searchParks.addEventListener('input', () => {
            const searchValue = searchParks.value.toLowerCase();
            const filteredParks = data.filter(park => {
                return park.name.toLowerCase().includes(searchValue);
            });
            // console.log(filteredParks);
            console.log(filteredParks[0].name);
            console.log(filteredParks);
        
            searchResultsContainer.innerHTML = "";

            filteredParks.forEach((ride) => {
                const result = document.importNode(template.content, true);
                const rideImg = result.querySelector(".parks-list-img");
                const rideLocation = result.querySelector(".parks-item-location");
                const rideName = result.querySelector(".parks-item-location");
                const userRating = result.querySelector(".user-rating-txt");
                const accessRating = result.querySelector(".access-rating-txt");
                const location = result.querySelector(".proxima-regular");
                const itemCity = result.querySelector(".park-city");
                
                rideImg.src = ride.img;
                rideLocation.textContent = ride.name;
                rideName.textContent = ride.name;
                userRating.textContent = ride.rating;
                accessRating.textContent = ride.rating;
                location.textContent = ride.rating;
                itemCity.textContent = ride.location;

                searchResultsContainer.appendChild(result);
            });

        
        }); 
    }
}


function rebuildArrow() {
  // Arrow Left Rebuild to curb event listener bubbling
    const headerArrow = document.querySelector(".header-arrow");
    headerArrow.classList.remove("header-arrow");
    headerArrow.classList.add("header-arrow-page");

    headerArrow.remove();

    const headerArrowPage = document.createElement("span");
    headerArrowPage.classList.add("fa-stack", "header-arrow-page");
    headerArrowPage.style.display = "flex";
    const arrowCircle = document.createElement("i");
    arrowCircle.classList.add("fa-regular", "fa-circle", "fa-stack-2x");
    arrowCircle.style.color = "#000000";
    arrowCircle.style.fontSize = "3em";
    arrowCircle.style.marginTop = "-0.15em";
    const arrowLeft = document.createElement("i");
    arrowLeft.classList.add("fa-solid", "fa-arrow-left", "fa-stack-1x");
    arrowLeft.style.color = "#000000";
    arrowLeft.style.fontSize = "2em";
    arrowLeft.style.marginLeft = "0.12em";

    headerArrowPage.append(arrowCircle, arrowLeft);
    document.querySelector(".page-list-header").insertAdjacentElement("afterbegin",headerArrowPage);

    const backArrow = document.querySelector('.header-arrow-page');
    backArrow.addEventListener('click', function() {
        location.reload();
    });
   
    // End Arrow Left Rebuild
}

//event listener for edit-user-list-name
document.addEventListener('DOMContentLoaded', function() {
    const editUserListName = document.querySelector('.edit-user-list-name');
    if (editUserListName) {
        editUserListName.addEventListener('click', function() {
            // window.location.href = 'editlistname.html';

            const profileHead = document.querySelector('.profile-header');

            //clear profile header text node
            while (profileHead.firstChild) {
                profileHead.removeChild(profileHead.firstChild);
            }

            const profileHeadP = document.createElement("p");
            profileHeadP.className = "profile-header-txt proxima-semibold";
            profileHeadP.textContent = "EDIT LIST NAME";

            profileHead.appendChild(profileHeadP);

            const userRidesDiv = document.querySelector('.user-rides-div');
            userRidesDiv.remove();

            const listImg = document.querySelector('.list-img-div');
            listImg.remove();

            const listTitle = document.querySelector('.list-title-div');
            listTitle.remove();
            
            const listImgDiv = document.createElement("div");
            listImgDiv.className = "list-img-div";

            const bottomBtn = document.querySelector('.add-ride-btn-div');
            bottomBtn.remove();
            
            const img = document.createElement("img");
            img.src = "media/imgs/Rides/ioa-the-incredible-hulk-coaster-universal-barrel-roll-c.jpg";
            img.className = "create-list-img";
            img.id = "pfp-img";
            img.alt = "";

            listImgDiv.appendChild(img);

            const listTitleDiv = document.createElement("div");
            listTitleDiv.className = "list-title-div";

            const p = document.createElement("p");
            p.className = "user-list-txt proxima-semibold";
            p.textContent = "MY 2025 TRIP";

            listTitleDiv.appendChild(p);

            const userInputFormDiv = document.createElement("div");
            userInputFormDiv.className = "user-input-form-div";
            userInputFormDiv.id = "form-submit";

            const form = document.createElement("form");
            form.action = "";
            form.className = "username-form";

            const label = document.createElement("label");
            label.for = "listname";
            label.textContent = "NEW LIST NAME";

            const input = document.createElement("input");
            input.type = "text";
            input.id = "listname";
            input.name = "listname";
            input.placeholder = "";

            const changeListNameBtnDiv = document.createElement("div");
            changeListNameBtnDiv.className = "change-list-name-btn-div";

            const button = document.createElement("button");
            button.onclick = () => confirmList();
            button.className = "contact-btn-lg";

            const btnP = document.createElement("p");
            btnP.textContent = "CONFIRM";

            button.appendChild(btnP);
            changeListNameBtnDiv.appendChild(button);

            form.appendChild(label);
            form.appendChild(document.createElement("br"));
            form.appendChild(input);
            form.appendChild(document.createElement("br"));
            form.appendChild(changeListNameBtnDiv);

            userInputFormDiv.appendChild(form);

            const pageListHeader = document.querySelector('.page-list-header');
            pageListHeader.insertAdjacentElement("afterend",listImgDiv);
            listImgDiv.insertAdjacentElement("afterend",listTitleDiv);
            listTitleDiv.insertAdjacentElement("afterend",userInputFormDiv);
            
    
        });
    } else {
        console.log('edit user list name is not present');
    }
});

// create event listener for .fa-trash that removes the element



// create event listener for home-searchbar 
document.addEventListener('DOMContentLoaded', function() {
    const homeSearchBar = document.querySelector('.home-searchbar');
    if (homeSearchBar) {
        homeSearchBar.addEventListener('click', function() {
            window.location.href = 'ridesorparks.html';
        });
    } else {
        console.log('home search bar is not present');
    }
});

// create event listener for fan-faves-to-list
document.addEventListener('DOMContentLoaded', function() {
    const fanFavesToList = document.querySelectorAll('.fan-faves-to-list');
    if (fanFavesToList) {
        fanFavesToList.forEach(function(element) {
            element.addEventListener('click', function() {
                window.location.href = 'addridepage.html';
            });
        });
    } else {
        console.log('fan faves to list is not present');
    }
});

// create event listener for  class="fan-fav-img"
document.addEventListener('DOMContentLoaded', function() {
    const fanFavImg = document.querySelectorAll('.fan-fav-img');
    if (fanFavImg) {
        fanFavImg.forEach(function(element) {
            element.addEventListener('click', function() {
                window.location.href = 'ridepage.html';
            });
        });
    } else {
        console.log('fan fav image is not present');
    }
});



// create event listener for add-ride-list-btn 
document.addEventListener('DOMContentLoaded', function() {

    const addRideListBtn = document.querySelectorAll('.add-ride-list-btn');
    if (addRideListBtn) {
        addRideListBtn.forEach(function(element) {
            element.addEventListener('click', function() {
                window.location.href = 'addridepage.html';
            });
        });
    } else {
        console.log('add ride list button is not present');
    }

    
});

//event listener for view-park-page 
document.addEventListener('DOMContentLoaded', function() {
    const parkViewRidesBtnDiv = document.querySelectorAll('.view-park-page');
    if (parkViewRidesBtnDiv) {
        parkViewRidesBtnDiv.forEach(function(element) {
            element.addEventListener('click', function() {
                window.location.href = 'parkpage.html';
            });
        });
    } else {
        console.log('park view rides button is not present');
    }

    
});

// create event listener for list-img
document.addEventListener('DOMContentLoaded', function() {
    const listImg = document.querySelectorAll('.user-list-img');
    if (listImg) {
        listImg.forEach(function(element) {
            element.addEventListener('click', function() {
                window.location.href = 'editlist.html';
            });
        });
    } else {
        console.log('list image is not present');
    }
});


// create event listener for add-ride-park-btn
document.addEventListener('DOMContentLoaded', function() {
    const addRideParkBtn = document.querySelector('.add-ride-park-btn');
    if (addRideParkBtn) {
        addRideParkBtn.addEventListener('click', function() {
            window.location.href = 'addridepage.html';
        });
    } else {
        console.log('add ride park button is not present');
    }
});

document.addEventListener("DOMContentLoaded", function () {   
            const pfpIcon = document.getElementById("change-pfp-icon");
            const listIcon = document.getElementById("img-icon");

            // Add a click event listener to the div
            if (pfpIcon) {
               pfpIcon.addEventListener("click", function (event) {
                // This code will run when the div is clicked
                
                // Select the image element
                var image = document.getElementById("pfp-img");
                // Select the input element
                var input = document.getElementById("pfp-input");
                // Simulate a click on the input element
                input.click();
                // Add a change event listener to the input element
                if (listIcon) {
                    input.addEventListener("change", function (event) {
                        image.src = URL.createObjectURL(event.target.files[0]);
                        listIcon.style.display = "none";
                    });
                } else {
                    input.addEventListener("change", function (event) {
                        image.src = URL.createObjectURL(event.target.files[0]);
                    });
                }
                
            });  
            } else {
                console.log("pfp icon is NOTT present");
            }
            // Add a click event listener to the div

            if (listIcon) {
                listIcon.addEventListener("click", function (event) {
                    // This colde will run when the div is clicked
                    
                    // Select the image element
                    var image = document.getElementById("pfp-img");
                    // Select the input element
                    var input = document.getElementById("pfp-input");
                    // Simulate a click on the input element
                    input.click();
                    // Add a change event listener to the input element
                    input.addEventListener("change", function (event) {
                        image.src = URL.createObjectURL(event.target.files[0]);
                        listIcon.style.display = "none";
                    });
                });  
            } else {
                console.log("list icon is not present");
            }
           
});

// 
document.addEventListener("DOMContentLoaded", function () {   
    const changePass = document.querySelector("#pwd-change-icon");
    if (changePass) {
        changePass.addEventListener("click", function (e) {
            console.log("clicked");
        });
    } else {
        console.log("change password icon is not present");
    };
    

    const pfpIcon = document.getElementById("change-pfp-icon");

    if (pfpIcon) {
        pfpIcon.addEventListener("click", function (event) {
            // This colde will run when the div is clicked
            
            // Select the image element
            var image = document.getElementById("pfp-img");
            // Select the input element
            var input = document.getElementById("pfp-input");
            // Simulate a click on the input element
            input.click();
            // Add a change event listener to the input element
            input.addEventListener("change", function (event) {
                image.src = URL.createObjectURL(event.target.files[0]);
            });
        });  
    } else {
        console.log("pfp icon is not present");
    }
    // Add a click event listener to the div
    
});

// create event listener for compare-ride-button
document.addEventListener('DOMContentLoaded', function() {
    const compareRideBtn = document.querySelector('#compare-ride-button');
    if (compareRideBtn) {
        compareRideBtn.addEventListener('click', function() {
            window.location.href = 'compareridesresults.html';
        });
    } else {
        console.log('compare ride button is not present');
    }
});

// create event listener for list-ride-img
document.addEventListener('DOMContentLoaded', function() {
    const listRideImg = document.querySelectorAll('.list-ride-img');
    if (listRideImg) {
        listRideImg.forEach(function(element) {
            element.addEventListener('click', function() {
                window.location.href = 'ridepage.html';
            });
        });
    } else {
        console.log('list ride image is not present');
    }
});

// Create event listener for parks-list-img
document.addEventListener('DOMContentLoaded', function() {
    const parksListImg = document.querySelector('.parks-list-img');
    if (parksListImg) {
        parksListImg.addEventListener('click', function() {
            window.location.href = 'parkpage.html';
        });
    } else {
        console.log('parks list image is not present');
    }
});


//create evemt listener for back arrow
document.addEventListener('DOMContentLoaded', function() {
    const backArrow = document.querySelector('.header-arrow');
    // check if the back arrow is present on the page
    if (backArrow) { 
        console.log('back arrow is present');
        backArrow.addEventListener('click', function() {
            history.back();
        });
    } else {
        console.log('back arrow is not present');
    }
});

// // create event listener for thumbs-up-review button
// document.addEventListener('DOMContentLoaded', function() {
//     const thumbsDownReview = document.querySelectorAll('.thumbs-down-review');
//     if (thumbsDownReview) {
//         thumbsDownReview.forEach(function(thumbsDownReview) {
//             thumbsDownReview.addEventListener('click', function() {
//                 thumbsDownReview.children[0].style.color = '#8E6CAF';
//             });
//         });
//     } else {
//         console.log('thumbs down review button is not present');
//     };

//     const thumbsUpReview = document.querySelectorAll('.thumbs-up-review');
//     if (thumbsUpReview) {
//         thumbsUpReview.forEach(function(thumbsUpReview) {
//             thumbsUpReview.addEventListener('click', function() {
//                 thumbsUpReview.children[0].style.color = '#8E6CAF';
//             });
//         });
//     } else {
//         console.log('thumbs up review button is not present');
//     };
// });

// create event listener for user-review-rating-div that allows users to choose between thumbs-up-review button and thumbs-down-review button 

// Comment Section Thumb Up/Down Interactivity
document.addEventListener('DOMContentLoaded', function() {
    const userReviewRatingDiv = document.querySelectorAll('.user-review-rating-div');
    if (userReviewRatingDiv) {
        userReviewRatingDiv.forEach(function(userReviewRatingDiv) {
            userReviewRatingDiv.addEventListener('click', function() {
                //if statement that alternates between thumbs-up-review button and thumbs-down-review button
                if (userReviewRatingDiv.children[0].style.color === 'rgb(142, 108, 175)') {
                    userReviewRatingDiv.children[0].style.color = '#000000';
                    userReviewRatingDiv.children[1].style.color = '#8E6CAF';
                } else {
                    userReviewRatingDiv.children[0].style.color = '#8E6CAF';
                    userReviewRatingDiv.children[1].style.color = '#000000';
                }
            });
        });
    } else {
        console.log('user review rating div is not present');
    };
});


//Create event listener for fa-triangle-exclamation 
document.addEventListener('DOMContentLoaded', function() {
    const faTriangleExclamation = document.querySelector('.fa-triangle-exclamation');
    if (faTriangleExclamation) {
        faTriangleExclamation.addEventListener('click', function() {
            window.location.href = 'report.html';
        });
    } else {
        console.log('fa triangle exclamation is not present');
    }
});

// if nav-logo is clicked, go to home.html
document.addEventListener('DOMContentLoaded', function() {
const navLogo = document.querySelector('.nav-logo');
if (navLogo) {
        navLogo.addEventListener('click', function() {
    window.location.href = 'home.html';
    }); 
    } else {
        console.log('nav logo is not present');
    }
} );

// when the third icon-text-container element in side the icon-container div is clicked, go to comparerides.html
//Compare Rides Icon Page Navigation


// if filter-icon is clicked, go to searchfilters.html
document.addEventListener('DOMContentLoaded', function() {
    const filterIcon = document.querySelector('.filter-icon');

    if (filterIcon) {
        filterIcon.addEventListener('click', function() {
        window.location.href = 'searchfilters.html';
        }); 
    } else {
        console.log('filter icon is not present');
    }
} );

//when the first icon-text-container element in side the icon-container div is clicked, go to home.html
//Home Icon Page Navigation
document.addEventListener('DOMContentLoaded', function() {
    let homeIcon = document.querySelector('.icon-container');
    // This is for the Home Icon
    if (homeIcon) {
        let homeIcon = document.querySelector('.icon-container').children[0];
        console.log('home icon is present');
        homeIcon.addEventListener('click', function() {
            window.location.href = 'home.html';
        });
    } else {
        console.log('home icon is not present');
    };
});

// when the second icon-text-container element in side the icon-container div is clicked, go to profile.html
//Profile Icon Page Navigation
document.addEventListener('DOMContentLoaded', function() {
    let profileIcon = document.querySelector('.icon-container');
    // This is for the Profile Icon
    if (profileIcon) {
        let profileIcon = document.querySelector('.icon-container').children[1];
        console.log('profile icon is present');
        profileIcon.addEventListener('click', function() {
            window.location.href = 'profile.html';
        });
    } else {
        console.log('profile icon is not present');
    };
});

// when the third icon-text-container element in side the icon-container div is clicked, go to comparerides.html
//Compare Rides Icon Page Navigation
document.addEventListener('DOMContentLoaded', function() {
    let compareIcon = document.querySelector('.icon-container');
    // This is for the Compare Rides Icon
    if (compareIcon) {
        let compareIcon = document.querySelector('.icon-container').children[2];
        console.log('compare icon is present');
        compareIcon.addEventListener('click', function() {
            window.location.href = 'comparerides.html';
        });
    } else {
        console.log('compare icon is not present');
    };
});

let ridesData = [];

function ridesGlobal(rides) {
    ridesData = rides;
}

function addCompare() {
    console.log("Ride Added to Compare!")
    const compareIcon = document.querySelectorAll('.ride-compared-img');
    const compareBtn = document.querySelector('.add-ride-list-btn');

    //select list-ride-name class closest to the compareBtn without closest() method
    const rideName = compareBtn.parentElement.previousElementSibling.children[0].children[1].innerText;
    // search ridesData for rideName
    const ride = ridesData.find(ride => ride.name === rideName);
    console.log(ride);
    console.log(ride.img);
    console.log(compareIcon[0].src);


    // if conpareIcon[i].src is equal to http://127.0.0.1:5500/media/imgs/empty-img.png, then change it to ride.img
        for (let i = 0; i < compareIcon.length; i++) {
            if (compareIcon[i].src === 'http://127.0.0.1:5500/media/imgs/empty-img.png') {
                compareIcon[i].src = '';
                compareIcon[i].src = ride.img;
                //stop after the first img is replaced and wait for the next click and change the next img
                break;
            } else {
                console.log('All images are full');
            }
            
            // compareIcon[0].src = '';
            // compareIcon[0].src = ride.img; 
            
        }



    console.log(rideName);
    // console.log(ridesData);
    // console.log(ridesData);
    
}



// when the fourth icon-text-container element in side the icon-container div is clicked, go to ridespage.html
//Rides Icon Page Navigation
document.addEventListener('DOMContentLoaded', function() {
    let ridesIcon = document.querySelector('.icon-container');
    // This is for the Rides Icon
    if (ridesIcon) {
        let ridesIcon = document.querySelector('.icon-container').children[3];
        console.log('rides icon is present');
        ridesIcon.addEventListener('click', function() {
            window.location.href = 'ridespage.html';
        });
    } else {
        console.log('rides icon is not present');
    }; 
});


// //if the bars icon is clicked, go to menu.html
document.addEventListener('DOMContentLoaded', function() {

    const menuIcon = document.querySelector('.hamburg-menu');
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
        if (menuIcon.id === "menu-selected") {
            history.back();
        } else {
            window.location.href = 'menu.html';
        }
    }); 
    } else {
        console.log('menu icon is not present');
    }       
});


// //if the bars icon is clicked, go to menu.html
//             document.addEventListener('DOMContentLoaded', function() {
//                 // This is for the Menu Icon
//                     const menuIcon = document.querySelector('.hamburg-menu');
                    
//                     if (menuIcon.style.color !== "white") {
//                         // return to previous page
//                         console.log('menu color is blue');
//                         menuIcon.addEventListener('click', function() {
//                             window.location.href = history.back();
//                             console.log('menu color went back in time');
//                         });
//                     } else {
//                         menuIcon.addEventListener('click', function() {
//                             window.location.href = 'menu.html';
//                             console.log('menu color is white')
//                         });
//                     }

//                 });
    
function confirmList() {
    //returns to previous page
    window.location.href = editlist.html;
}

function addRide() {
    //returns to previous page
    history.back();
}

function menuPage() {

    const contentDiv = document.querySelector(".content");
    if (contentDiv) {
        
    }
    const allElements = document.querySelectorAll("body *");
    for (let i = 0; i < allElements.length; i++) {
    if (allElements[i] !== contentDiv) {
        allElements[i].remove();
    }
    }
   
    const menuHeader = document.createElement("div");
    menuHeader.classList.add("menu-header");

    const h1 = document.createElement("h1");
    h1.textContent = "MENU";
    menuHeader.appendChild(h1);

    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-items");

    const settingsLink = document.createElement("a");
    settingsLink.href = "settings.html";
    settingsLink.classList.add("menu-link-div");

    const settingsDiv = document.createElement("div");
    settingsDiv.classList.add("menu-settings");

    const settingsStack = document.createElement("span");
    settingsStack.classList.add("fa-stack");

    const settingsCircle = document.createElement("i");
    settingsCircle.classList.add("fa");
    settingsCircle.classList.add("fa-circle");
    settingsCircle.style.color = "black";
    settingsCircle.style.fontSize = "3em";
    settingsCircle.style.position = "relative";
    settingsStack.appendChild(settingsCircle);

    const settingsGear = document.createElement("i");
    settingsGear.classList.add("fa-solid");
    settingsGear.classList.add("fa-gear");
    settingsGear.style.color = "#ffffff";
    settingsGear.style.fontSize = "2em";
    settingsGear.style.position = "relative";
    settingsGear.style.bottom = "1.35em";
    settingsGear.style.left = "0.12em";
    settingsStack.appendChild(settingsGear);

    const settingsP = document.createElement("p");
    settingsP.textContent = "Settings";

    const settingsChevron = document.createElement("i");
    settingsChevron.classList.add("fa-solid");
    settingsChevron.classList.add("fa-chevron-right");
    settingsChevron.style.fontSize = "2em";

    settingsDiv.appendChild(settingsStack);
    settingsDiv.appendChild(settingsP);
    settingsDiv.appendChild(settingsChevron);

    settingsLink.appendChild(settingsDiv);

    const notifsLink = document.createElement("a");
    notifsLink.href = "notifs.html";
    notifsLink.classList.add("menu-link-div");

    const notifsDiv = document.createElement("div");
    notifsDiv.classList.add("menu-notifs");

    const notifsStack = document.createElement("span");
    notifsStack.classList.add("fa-stack");

    const notifsCircle = document.createElement("i");
    notifsCircle.classList.add("fa");
    notifsCircle.classList.add("fa-circle");
    notifsCircle.classList.add("fa-stack-2x")
    notifsCircle.style.color = "black";
    notifsCircle.style.fontSize = "3em";
    notifsCircle.style.position = "inherit";
    notifsStack.appendChild(notifsCircle);

    const notifsBell = document.createElement("i");
    notifsBell.classList.add("fa-solid");
    notifsBell.classList.add("fa-bell");
    notifsBell.classList.add("fa-stack-2x");
    notifsBell.style.color = "#ffffff";
    notifsBell.style.position = "relative";
    notifsBell.style.bottom = "1.36em";
    notifsBell.style.left = "0.123em";
    notifsStack.appendChild(notifsBell);

    const notifsP = document.createElement("p");
    notifsP.textContent = "Notifications";

    const notifsChevron = document.createElement("i");
    notifsChevron.classList.add("fa-solid");
    notifsChevron.classList.add("fa-chevron-right");
    notifsChevron.style.fontSize = "2em";

    notifsDiv.appendChild(notifsStack);
    notifsDiv.appendChild(notifsP);
    notifsDiv.appendChild(notifsChevron);


}

function reviewThanks() {
  const form = document.getElementById("review-div");

  form.remove();

  const thanksDiv = document.createElement("div");
  thanksDiv.classList.add("thanks-div");
  const thanksH2 = document.createElement("h2");
  thanksH2.classList.add("thanks-txt", "proxima-bold");
  const thanksH2Txt1 = document.createTextNode("THANK YOU FOR");
  const thanksBr = document.createElement("br");
  const thanksH2Txt2 = document.createTextNode("YOUR REVIEW.")
  thanksH2.append(thanksH2Txt1, thanksBr, thanksH2Txt2);
  thanksDiv.append(thanksH2);
  const thanksP = document.createElement("p");
  thanksP.classList.add("thanks-txt", "proxima-bold");
  const thanksPtxt = document.createTextNode("Your Review Will Help Other RideRaters on Their Adventures.");
  thanksP.append(thanksPtxt);
  const thanksIcon = document.createElement("i");
  thanksIcon.classList.add("fa-solid", "fa-thumbs-up");
  const btmMenu = document.querySelector(".app-footer");
  const returnBtnDiv = document.createElement('div');
  returnBtnDiv.classList.add("thanks-btn-div");
  returnBtnDiv.style.bottom = "1em"
  const returnBtn = document.createElement('button');
  returnBtn.classList.add("contact-btn-lg", "thanks-btn");
  returnBtn.setAttribute("onclick","history.go(-1)");
  returnBtn.textContent = "RETURN"
  returnBtnDiv.append(returnBtn);
  document.body.insertBefore(returnBtnDiv, btmMenu);
  document.body.insertBefore(thanksDiv, returnBtnDiv);
  thanksDiv.append(thanksP);
  thanksDiv.append(thanksIcon);
}

function reportThanks() {
    const form = document.getElementById("form-submit");

    form.remove();

    const thanksDiv = document.createElement("div");
    thanksDiv.classList.add("thanks-div");
    const thanksH2 = document.createElement("h2");
    thanksH2.classList.add("thanks-txt", "proxima-bold");
    const thanksH2Txt1 = document.createTextNode("THANK YOU FOR");
    const thanksBr = document.createElement("br");
    const thanksH2Txt2 = document.createTextNode("YOUR FEEDBACK.")
    thanksH2.append(thanksH2Txt1, thanksBr, thanksH2Txt2);
    thanksDiv.append(thanksH2);
    const thanksP = document.createElement("p");
    thanksP.classList.add("thanks-txt", "proxima-bold");
    const thanksPtxt = document.createTextNode("You Helped Improve This Experience For All Our User.");
    thanksP.append(thanksPtxt);
    const thanksIcon = document.createElement("i");
    thanksIcon.classList.add("fa-solid", "fa-thumbs-up");
    const btmMenu = document.querySelector(".app-footer");
    const returnBtnDiv = document.createElement('div');
    returnBtnDiv.classList.add("thanks-btn-div");
    returnBtnDiv.style.bottom = "1em"
    const returnBtn = document.createElement('button');
    returnBtn.classList.add("contact-btn-lg", "thanks-btn");
    returnBtn.setAttribute("onclick","history.go(-1)");
    returnBtn.textContent = "RETURN"
    returnBtnDiv.append(returnBtn);
    document.body.insertBefore(returnBtnDiv, btmMenu);
    document.body.insertBefore(thanksDiv, returnBtnDiv);
    thanksDiv.append(thanksP);
    thanksDiv.append(thanksIcon);

    

}

function newList() { 
  const profileHead = document.getElementById("profile-header"); 
  //remove profile header text node
    profileHead.removeChild(profileHead.childNodes[0]);
  //create text node
    const profileHeadTxt = document.createTextNode("Create List");
    //append text node to header
    profileHead.append(profileHeadTxt);

    // Create the container div for the image
    const listImgDiv = document.createElement("div");
    listImgDiv.classList.add("list-img-div");

    // delete profile pic div
    const profilePicDiv = document.querySelector(".profile-pic-div");
    profilePicDiv.remove();
    // remove username-txt class div
    const usernameDiv = document.querySelector(".username-txt");
    usernameDiv.remove();
    // remove saved-lists div
    const savedListsDiv = document.querySelector(".saved-lists");
    savedListsDiv.remove();

    // remove review-btn-div
    const reviewBtnDiv = document.querySelector(".review-btn-div");
    reviewBtnDiv.remove();

    // edit-profile-btn remove
    const editProfileBtn = document.querySelector(".edit-profile-btn");
    editProfileBtn.remove();

    // Create the image element
    const listImg = document.createElement("img");
    listImg.src = "media/imgs/empty-img.png";
    listImg.classList.add("create-list-img");
    listImg.id = "pfp-img";
    listImg.alt = "";
    listImgDiv.appendChild(listImg);

    // Create the container div for the edit icon
    const listImgEdit = document.createElement("div");
    listImgEdit.classList.add("list-img-edit", "fa-stack");
    listImgEdit.id = "change-pfp-icon";
    listImgDiv.appendChild(listImgEdit);

    // Create the input element for the file input
    const pfpInput = document.createElement("input");
    pfpInput.type = "file";
    pfpInput.id = "pfp-input";
    listImgEdit.appendChild(pfpInput);

    // Create the first icon for the edit button
    const editIcon1 = document.createElement("i");
    editIcon1.classList.add("fa", "fa-circle", "fa-stack-2x");
    editIcon1.style.color = "rgb(255, 255, 255)";
    listImgEdit.appendChild(editIcon1);

    // Create the second icon for the edit button
    const editIcon2 = document.createElement("i");
    editIcon2.classList.add("fa-regular", "fa-circle", "fa-stack-2x");
    editIcon2.style.color = "rgb(0, 0, 0)";
    listImgEdit.appendChild(editIcon2);

    // Create the third icon for the edit button
    const editIcon3 = document.createElement("i");
    editIcon3.classList.add("fa-solid", "fa-camera", "fa-stack-2x");
    editIcon3.style.color = "rgb(0, 0, 0)";
    listImgEdit.appendChild(editIcon3);

    // Create the icon for the image
    const imgIcon = document.createElement("i");
    imgIcon.classList.add("fa-solid", "fa-images");
    imgIcon.id = "img-icon";
    listImgDiv.appendChild(imgIcon);

    // Create the container div for the form
    const formDiv = document.createElement("div");
    formDiv.classList.add("user-input-form-div");
    formDiv.id = "form-submit";

    // Create the form element
    const usernameForm = document.createElement("form");
    usernameForm.action = "";
    usernameForm.classList.add("username-form");
    formDiv.appendChild(usernameForm);

    // Create the label for the form
    const formLabel = document.createElement("label");
    formLabel.setAttribute("for", "listname");
    formLabel.innerText = "LIST NAME";
    usernameForm.appendChild(formLabel);

    // Create the input for the form
    const listNameInput = document.createElement("input");
    listNameInput.type = "text";
    listNameInput.id = "listname";
    listNameInput.name = "listname";
    listNameInput.placeholder = "Enter List Name";
    listNameInput.required = true;


    // Create the container div for the submit button
    const submitDiv = document.createElement("div");
    submitDiv.classList.add("submit-div");

    // Create the submit button
    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submit-btn");
    submitBtn.type = "submit";
    submitBtn.innerText = "CREATE LIST";
    submitDiv.appendChild(submitBtn);

    // Append the input to the form
    usernameForm.appendChild(listNameInput);

    // Append the form to the container div
    formDiv.appendChild(usernameForm);

    // Append the submit button to the container div
    formDiv.insertAdjacentElement("afterend",submitDiv);

    // Append the image container div to the body
    document.body.appendChild(listImgDiv);

    // Append the container div to the body
    document.body.appendChild(formDiv);


    // Create the container div for the list
    const listDiv = document.createElement("div");
    listDiv.classList.add("list-div");

    const createListBtnDiv = document.createElement('div');
    createListBtnDiv.classList.add('create-list-btn-div');

    const createListBtn = document.createElement('button');
    createListBtn.classList.add('contact-btn-lg');
    createListBtn.onclick = function() {
    window.location.href = "profile.html"
    };


    const createListText = document.createElement('p');
    createListText.innerText = "CREATE LIST";

    const createListIcon = document.createElement('i');
    createListIcon.classList.add('fa-solid', 'fa-circle-plus');

    createListBtn.append(createListText, createListIcon);
    createListBtnDiv.append(createListBtn);

    listDiv.append(createListBtnDiv);
    
    document.body.appendChild(listDiv);
    
    
    
    
}

function resetPass() {
    // remove resetpass-header
    const resetPassHeader = document.querySelector(".resetpass-text");
    resetPassHeader.remove();

    // remove resetpass-form
    const resetPassForm = document.querySelector(".resetpass-form");
    resetPassForm.remove();

    const recoveryEmailText = document.createElement('div');
    recoveryEmailText.classList.add('login-text');
    const recoveryHeader = document.createElement('h1');
    recoveryHeader.classList.add('login-header');
    recoveryHeader.textContent = 'PASSWORD UPDATED!';
    recoveryEmailText.appendChild(recoveryHeader);

    const thumbsUpIcon = document.createElement('div');
    thumbsUpIcon.classList.add('thumbs-lg-icon');
    const thumbCircle = document.createElement('i');
    thumbCircle.classList.add('fa-regular', 'fa-circle', 'fa-stack-2x');
    thumbCircle.style.cssText = 'color: #ffffff; font-size: 7em !important;';
    const thumbUp = document.createElement('i');
    thumbUp.classList.add('fa-solid', 'fa-thumbs-up', 'fa-stack-1x');
    thumbUp.style.cssText = 'color: rgb(255, 255, 255); font-size: 3em !important; margin-top: 0.5em;';
    thumbsUpIcon.append(thumbCircle, thumbUp);

    const recoveryEmailBtnDiv = document.createElement('div');
    recoveryEmailBtnDiv.classList.add('login-btn-div');
    recoveryEmailBtnDiv.style.cssText = 'top: 25vh;';
    const recoveryParagraph = document.createElement('p');
    recoveryParagraph.classList.add('login-para');
    recoveryParagraph.style.cssText = 'margin-bottom: 0.8em;';
    recoveryParagraph.textContent = 'Your password has been updated!';
    const recoveryLink = document.createElement('a');
    recoveryLink.classList.add('login-link');
    recoveryLink.href = 'login.html';
    const recoveryButton = document.createElement('button');
    recoveryButton.classList.add('login-btn-lg');
    recoveryButton.style.cssText = 'width: 81%; max-width: 15em; padding-left: 0em; padding-right: 0em;';
    recoveryButton.textContent = 'Login';
    recoveryLink.appendChild(recoveryButton);
    recoveryEmailBtnDiv.append(recoveryParagraph, recoveryLink);

    document.body.append(recoveryEmailText, thumbsUpIcon, recoveryEmailBtnDiv);

    


}

function recoverySent() {
    // remove resetpass-header
    const resetPassHeader = document.querySelector(".login-text");
    resetPassHeader.remove();

    // remove resetpass-form
    const resetPassForm = document.querySelector(".forgot-form-div");
    resetPassForm.remove();

    const recoveryEmailText = document.createElement('div');
    recoveryEmailText.classList.add('login-text');
    const recoveryHeader = document.createElement('h1');
    recoveryHeader.classList.add('login-header');
    const thanksH2Txt1 = document.createTextNode("Recovery Email");
    const thanksBr = document.createElement("br");
    const thanksH2Txt2 = document.createTextNode("Sent!");
    recoveryHeader.append(thanksH2Txt1, thanksBr, thanksH2Txt2);
    recoveryEmailText.appendChild(recoveryHeader);

    const thumbsUpIcon = document.createElement('div');
    thumbsUpIcon.classList.add('thumbs-lg-icon');
    const thumbCircle = document.createElement('i');
    thumbCircle.classList.add('fa-regular', 'fa-circle', 'fa-stack-2x');
    thumbCircle.style.cssText = 'color: #ffffff; font-size: 7em !important;';
    const thumbUp = document.createElement('i');
    thumbUp.classList.add('fa-solid', 'fa-thumbs-up', 'fa-stack-1x');
    thumbUp.style.cssText = 'color: rgb(255, 255, 255); font-size: 3em !important; margin-top: 0.5em;';
    thumbsUpIcon.append(thumbCircle, thumbUp);

    const recoveryEmailBtnDiv = document.createElement('div');
    recoveryEmailBtnDiv.classList.add('login-btn-div');
    recoveryEmailBtnDiv.style.cssText = 'top: 25vh;';
    const recoveryParagraph = document.createElement('p');
    recoveryParagraph.classList.add('login-para');
    recoveryParagraph.style.cssText = 'margin-bottom: 0.8em;';
    recoveryParagraph.textContent = 'An Email Has Been Sent!';
    const recoveryLink = document.createElement('a');
    recoveryLink.classList.add('login-link');
    recoveryLink.href = 'login.html';
    const recoveryButton = document.createElement('button');
    recoveryButton.classList.add('login-btn-lg');
    recoveryButton.style.cssText = 'width: 81%; max-width: 15em; padding-left: 0em; padding-right: 0em;';
    recoveryButton.textContent = 'Login';
    recoveryLink.appendChild(recoveryButton);
    recoveryEmailBtnDiv.append(recoveryParagraph, recoveryLink);

    document.body.append(recoveryEmailText, thumbsUpIcon, recoveryEmailBtnDiv);




}

function editProfileBtn() {
   rebuildArrow();
   
    //    const pfpIcon = document.getElementById("change-pfp-icon");

    //     if (pfpIcon) {
    //         pfpIcon.addEventListener("click", function (event) {
    //             // This colde will run when the div is clicked
                
    //             // Select the image element
    //             var image = document.getElementById("pfp-img");
    //             // Select the input element
    //             var input = document.getElementById("pfp-input");
    //             // Simulate a click on the input element
    //             input.click();
    //             // Add a change event listener to the input element
    //             input.addEventListener("change", function (event) {
    //                 image.src = URL.createObjectURL(event.target.files[0]);
    //             });
    //         });  
    //     } else {
    //         console.log("pfp icon is not present");
    //     }


            
    // const pfpIcon = document.getElementById("change-pfp-icon");
    // const listIcon = document.getElementById("img-icon");

    // // Add a click event listener to the div
    // if (pfpIcon) {
    //     pfpIcon.addEventListener("click", function (event) {
    //         // This colde will run when the div is clicked
            
    //         // Select the image element
    //         var image = document.getElementById("pfp-img");
    //         // Select the input element
    //         var input = document.getElementById("pfp-input");
    //         // Simulate a click on the input element
    //         input.click();
    //         // Add a change event listener to the input element
    //         input.addEventListener("change", function (event) {
    //             image.src = URL.createObjectURL(event.target.files[0]);
    //             listIcon.style.display = "none";
    //         });
    //     });   
    // } else {
    //     console.log("pfp icon is not present");
    // }    
    
    const savedListsDiv = document.querySelector('.saved-lists');
    savedListsDiv.remove();
    
    const leaveReviewDiv = document.querySelector('.leave-review-btn');
    leaveReviewDiv.remove();
    
    const editProfileBtn = document.querySelector('.edit-profile-btn');
    editProfileBtn.remove();
    
    const profileHeader = document.querySelector('#profile-header');
    // remove profile header text node
    profileHeader.removeChild(profileHeader.childNodes[0]);
    const profileHeadertxt = document.createTextNode('Edit Profile');
    profileHeader.appendChild(profileHeadertxt);
    
    const pfpEditDiv = document.createElement('div');
    const profilePicDiv = document.querySelector('.profile-pic-div');
    pfpEditDiv.classList.add('pfp-edit-div','fa-stack');
    pfpEditDiv.id = 'change-pfp-icon';
    
    // const listIcon = document.getElementById("img-icon");

       

    
    const pfpInput = document.createElement('input');
    pfpInput.type = 'file';
    pfpInput.id = 'pfp-input';
    pfpEditDiv.appendChild(pfpInput);
    
    const editIcon1 = document.createElement('i');
    editIcon1.classList.add('fa', 'fa-circle', 'fa-stack-2x');
    editIcon1.style.color = 'rgb(255, 255, 255)';   
    pfpEditDiv.appendChild(editIcon1);
    
    const editIcon2 = document.createElement('i');
    editIcon2.classList.add('fa-regular', 'fa-circle', 'fa-stack-2x');
    editIcon2.style.color = 'rgb(0, 0, 0)';
    pfpEditDiv.appendChild(editIcon2);
    
    const editIcon3 = document.createElement('i');
    editIcon3.classList.add('fa-solid', 'fa-camera', 'fa-stack-2x');
    editIcon3.style.color = 'rgb(0, 0, 0)';
    pfpEditDiv.appendChild(editIcon3);
    
    profilePicDiv.appendChild(pfpEditDiv);
    
    const editUserIcon = document.createElement('i');
    const usernameDiv = document.querySelector('.username-txt');
    usernameDiv.classList.add('username-div');
    
    editUserIcon.classList.add('fa-solid', 'fa-pen-to-square', 'username-edit-icon');
    usernameDiv.appendChild(editUserIcon);

    const userInfoDiv = document.createElement("div");
    userInfoDiv.classList.add("user-info-div");

    // User Email
    const userInfoItem1 = document.createElement("div");
    userInfoItem1.classList.add("user-info-item");

    const userInfoTitle1 = document.createElement("p");
    userInfoTitle1.classList.add("user-info-title", "proxima-bold");
    userInfoTitle1.textContent = "EMAIL";

    const userInfoTxt1 = document.createElement("p");
    userInfoTxt1.classList.add("user-info-txt", "proxima-regular");
    userInfoTxt1.textContent = "hello@usermail.com";

    userInfoItem1.appendChild(userInfoTitle1);
    userInfoItem1.appendChild(userInfoTxt1);

    // User Password
    const userInfoItem2 = document.createElement("div");
    userInfoItem2.classList.add("user-info-item");

    const userPasswordDiv = document.createElement("div");
    userPasswordDiv.classList.add("user-password-div");

    const userInfoTitle2 = document.createElement("p");
    userInfoTitle2.classList.add("user-info-title", "proxima-bold");
    userInfoTitle2.textContent = "PASSWORD";

    const passwordChangeIcon = document.createElement("i");
    passwordChangeIcon.classList.add("fa-solid", "fa-pen-to-square");
    passwordChangeIcon.id = "pwd-change-icon";

    userPasswordDiv.appendChild(userInfoTitle2);
    userPasswordDiv.appendChild(passwordChangeIcon);

    const userInfoTxt2 = document.createElement("p");
    userInfoTxt2.classList.add("user-info-txt", "proxima-regular");
    userInfoTxt2.textContent = "**********";

    userInfoItem2.appendChild(userPasswordDiv);
    userInfoItem2.appendChild(userInfoTxt2);

    userInfoDiv.appendChild(userInfoItem1);
    userInfoDiv.appendChild(userInfoItem2);

    // append the userInfoDiv to the parent element in the DOM
    document.body.appendChild(userInfoDiv);

    // Add a click event listener to the div
    pfpEditDiv.addEventListener("click", function () {
        // This colde will run when the div is clicked
        
        // Select the image element
        var image = document.querySelector(".profile-pic");
        // Select the input element
        var input = document.getElementById("pfp-input");
        // Simulate a click on the input element
        input.click();
        // Add a change event listener to the input element
        input.addEventListener("change", function (event) {
            image.src = URL.createObjectURL(event.target.files[0]);
            // listIcon.style.display = "none";
        });
    });

    //event listener for username-edit-icon
    const usernameEditIcon = document.querySelector(".username-edit-icon");
    if (usernameEditIcon) {
        usernameEditIcon.addEventListener("click", function (event) {
            window.location.href = 'changeusername.html';
        });
    } else {
        console.log("username edit icon is not present");
    }

    //event listener for pwd-change-icon
    const pwdChangeIcon = document.querySelector("#pwd-change-icon");
    if (pwdChangeIcon) {
        pwdChangeIcon.addEventListener("click", function (event) {
            window.location.href = 'resetpass.html';
        });
    }

}

function changeUsername() {
    history.back();
}

// event listener if bg-img-buttons-parks is clicked go to parkspage.html
document.addEventListener("DOMContentLoaded", function() {
    const parksBtn = document.querySelector(".bg-img-buttons-parks");

    if (parksBtn) {
        parksBtn.addEventListener("click", function() {
            window.location.href = "parkspage.html";
            }
        );  
    } else {
        console.log("parksBtn is not defined");
    }

});

// event listener if bg-img-buttons-rides is clicked go to parkspage.html
document.addEventListener("DOMContentLoaded", function() {
    const ridesBtn = document.querySelector(".bg-img-buttons-rides");
    
    if (ridesBtn) {
        ridesBtn.addEventListener("click", function() {
            window.location.href = "ridespage.html";
            }
        );   
    } else {
        console.log("ridesBtn is not defined");
    }
});



