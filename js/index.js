var jq = jQuery.noConflict();
let rideUserRatings;

jq(document).ready(function() {
    function getAllRideRatings() {
        console.log("GetAllRideRatings initiated");

        var vAllRideRatings = "";    
        var vEmail = localStorage.getItem("hiddenuserid");
        return new Promise(function(resolve, reject) {
            jq.ajax({
            url: './rideratersbackend/GetAllRideRatings.php',
            dataType: 'json',
            async: 'false',
            type: 'post',
            data: {username: vEmail},
            success: function(response) {            
                // console.log("log 1: " + JSON.stringify(response));
                // rideUserRatings = JSON.stringify(response);
                if(response.success == "true") {
                    vAllRideRatings = response.allRides;
                    // referesh the page
                    let rideRating = response;
                    console.log(rideRating);
                    console.log(rideRating.allRides);
                    let allRidesRated = rideRating.allRides;
                    session.remove("allRidesRated");
                    sessionStorage.setItem("allRidesRated", JSON.stringify(allRidesRated));
                    // console.log("log 2: " + JSON.stringify(response));
                    resolve(response);
                } else {                
                    // console.log("log 3: " + JSON.stringify(response));
                    reject('System error, trying to figure this out');
                };
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
                reject('Error: ' + xhr.responseText);
            },
            complete: function (response){
                console.log("Ajax completed");
            }
            });
        });
    }

    getAllRideRatings().then(function(response) {
        console.log(response);
        let rideRating = response;
        console.log(rideRating);
        userRatings(rideRating);
        rideRating = rideUserRatings;
        console.log("getAllRideRatings completed");
        console.log(rideUserRatings);
        
    }).catch(function(error) {
        console.error(error);
    });

});

let userRatingsObj;
function userRatings(ratings) {
    console.log(ratings);
    userRatingsObj = ratings;
    console.log(userRatingsObj);
    sessionStorage.setItem("userRatingsObj", JSON.stringify(userRatingsObj));
    // console.log(userRatingsObj.allRides);
    // console.log(userRatingsObj.allRides);

    //search for ride in userRatingsObj.allRides
    for (let i = 0; i < userRatingsObj.allRides.length; i++) {
        // console.log(userRatingsObj.allRides[i].rideid);
        // console.log(userRatingsObj.allRides[i].ridename);
    }
}



// let userName;
// $(document).ready(function () {
//     $.ajax({
//         url: './RideRatersBackend/getUserProfile.php',
//         type: 'GET',
//         dataType: 'json',
//         success: function (data) {
//             if (data.error) {
//                 alert(data.error);
//             } else {
//                 userName = data.username;
//                 $('#username').text(data.username);
//                 console.log(data);
//             }
//         },
//         error: function (xhr, status, error) {
//             alert('Error retrieving user info: ' + error);
//         }
//     });
// });


// console.log(rideUserRatings);
// if (typeof rideUserRatings !== 'undefined') {
//    console.log(rideUserRatings);
// } else {
//     console.log("rideUserRatings is undefined");
// }



// function userRatings(ridesRatings) {
//     ridesRatings = rideUserRatings;
//     console.log(rideUserRatings);
//     return rideUserRatings;
// }

// if (rideUserRatings != undefined) {
//     console.log(rideUserRatings);
// }

function roundToTenth(x) {
    return Math.round(10*Number(x))/10;
}

// fetch data from json file and store in variables for use in other functions and pages 
fetch('./data/data.json')
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

    // combine parks and ridesList into one array
    const allParksAndRides = parks.concat(ridesList);
    console.log(allParksAndRides);

    // search(parks);
    search(allParksAndRides);
    // searchRides(ridesList);
    // searchRidesAndParks(ridesList);
    searchRidesAndParks(allParksAndRides);
    ridesGlobal(ridesList);
    fanFavorite(ridesList);
    parksGlobal(parks);
    ridesCompared();
    selectedParkPage();
    selectedRidePage()

  })
  .catch(error => {
    console.error('There was a problem:', error);
});

// Search function for Rides and Parks
function searchRidesAndParks(data) {
    const searchAll = document.getElementById('search-for-all');
    const searchResultsContainer = document.getElementById("search-results-container");
    const template = document.getElementById("search-result-template");
    const templatePark = document.getElementById("search-result-park-template");
    let userRatingsObj = JSON.parse(sessionStorage.getItem('userRatingsObj'));

    if (searchAll) {
        searchAll.addEventListener('input', () => {
            const searchValue = searchAll.value.toLowerCase();
            const filteredParks = data.filter(park => {
                return park.name.toLowerCase().includes(searchValue);
            });
            // console.log(filteredParks);
            // console.log(filteredParks[0].name);
            // console.log(filteredParks);
            
            // Clears search results
            searchResultsContainer.innerHTML = "";
            
            // forEach loop to render search results
            filteredParks.forEach((ride) => {
                if (ride.height === undefined) {
                    const result = document.importNode(template.content, true);
                    const rideImg = result.querySelector(".list-ride-img");
                    const rideLocation = result.querySelector(".list-ride-location");
                    const rideName = result.querySelector(".list-ride-name");
                    const userRating = result.querySelector(".user-rating-txt");
                    const accessRating = result.querySelector(".access-rating-txt");
                    const location = result.querySelector(".proxima-regular");
                    const itemCity = result.querySelector(".ride-city");
                    let userRatingsObj = JSON.parse(sessionStorage.getItem('userRatingsObj'));
                    
                    rideImg.src = ride.img;
                    rideLocation.textContent = ride.park;
                    rideName.textContent = ride.name;
                    userRating.textContent = roundToTenth(userRatingsObj.allRides[ride.id-1].averagerating);
                    accessRating.textContent = ride.rating;
                    // location.textContent = ride.rating;
                    itemCity.textContent = ride.location;

                    searchResultsContainer.appendChild(result); 
                } else {
                    const result = document.importNode(templatePark.content, true);
                    const rideImg = result.querySelector(".parks-list-img");
                    const rideLocation = result.querySelector(".parks-item-location");
                    const rideName = result.querySelector(".parks-item-location");
                    const userRating = result.querySelector(".user-rating-txt");
                    const accessRating = result.querySelector(".access-rating-txt");
                    const location = result.querySelector(".proxima-regular");
                    const itemCity = result.querySelector(".park-city");
                    let userRatingsObj = JSON.parse(sessionStorage.getItem('userRatingsObj'));
                    
                    rideImg.src = ride.img;
                    rideLocation.textContent = ride.name;
                    rideName.textContent = ride.name;
                    userRating.textContent = ride.rating;
                    accessRating.textContent = ride.rating;
                    // location.textContent = ride.rating;
                    itemCity.textContent = ride.location;

                    searchResultsContainer.appendChild(result);
                }
            
            });

            // Adds event listeners to add ride button on search results to add ride page
            // not present on compare page
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


            // Enables user to click on park button to go to ride page
            const parkViewRidesBtnDiv = document.querySelectorAll('.view-park-page');
            if (parkViewRidesBtnDiv) {
                parkViewRidesBtnDiv.forEach(function(element) {
                    element.addEventListener('click', function() {
                        parkPageRendered(element);
                        window.location.href = 'parkpage.html';
                        console.log("park view rides button clicked");
                        // selectedParkPage()
                    });
                });
            } else {
                console.log('park view rides button is not present');
            }
            
            // Enables user to click on park image to go to park page
            const listParkImg = document.querySelectorAll('.parks-list-img');
            if (listParkImg) {
                listParkImg.forEach(function(element) {
                    element.addEventListener('click', function() {
                        parkPageImgRendered(element);
                        window.location.href = 'parkpage.html';
                    });
                });
            } else {
                console.log('list ride image is not present');
            }

            // Enables user to click on ride image to go to ride page
            const listRideImg = document.querySelectorAll('.list-ride-img');
            if (listRideImg) {
                listRideImg.forEach(function(element) {
                    element.addEventListener('click', function() {
                        ridePageRendered(element);
                        window.location.href = 'ridepage.html';
                    });
                });
            } else {
                console.log('list ride image is not present');
            }

    
        }); 
    }

}

function clearFilters() {
    //on click of clear filters button, remove all selected classes from filter buttons
    const filterTags = document.querySelectorAll(".filter-tags-btn");
    const sortBtn = document.querySelectorAll(".sort-btn-item");
    const filterDropdown = document.querySelectorAll(".filter-item");
    const cityDropdown = document.querySelector(".city-dropdown-content");
    const parkDropdown = document.querySelector(".park-dropdown-content");
    const filterDiv = document.querySelector(".filter-dropdown-div");
    const dropdownLinks = filterDiv.querySelectorAll("a");

    // remove selected class from filter tags
    filterTags.forEach(function (item) {
        if (item.classList.contains("filter-tags-btn-selected")) {
            item.classList.remove("filter-tags-btn-selected");
        }
    });

    // remove selected class from sort buttons
    sortBtn.forEach(function (item) {
        if (item.classList.contains("sort-btn-item-selected")) {
            item.classList.remove("sort-btn-item-selected");
        }
    });

    // clear the filterResultText node by setting it to an empty text node
    const filterResult = document.querySelector("#filter-result");
    if (filterResult.hasChildNodes()) {
        filterResult.removeChild(filterResult.firstChild);
    }

    // remove userFilters from sessionStorage
    let userFilters = JSON.parse(sessionStorage.getItem('userFilters'));
    // remove userFilters from sessionStorage
    userFilters = {
        parkCity: null,
        sort: null,
        tags: {
            wheelchair: false,
            photosensitivity: false,
            serviceAnimal: false,
            sizeShape: false,
            childSwap: false,
        }
    };
    // sessionStorage.removeItem("userFilters");
    sessionStorage.setItem('userFiltersCleared', true); // set userFiltersCleared to true'
    sessionStorage.setItem('userFilters', JSON.stringify(userFilters));
    console.log(userFilters);

  
}

function returnClearFilters() {
    // remove userFilters from sessionStorage
    let userFilters = JSON.parse(sessionStorage.getItem('userFilters'));
    // remove userFilters from sessionStorage
    userFilters = {
        parkCity: null,
        sort: null,
        tags: {
            wheelchair: false,
            photosensitivity: false,
            serviceAnimal: false,
            sizeShape: false,
            childSwap: false,
        }
    };
    // sessionStorage.removeItem("userFilters");
    sessionStorage.setItem('userFiltersCleared', true); // set userFiltersCleared to true'
    sessionStorage.setItem('userFilters', JSON.stringify(userFilters));
    console.log(userFilters);

}


// Fan Favorite Function
function runFanFavorite() {

}

// function to get fan favorite data
function fanFavorite(data) {
    const fanFavContainer = document.getElementById("fan-results-container");
    const template = document.getElementById("fan-result-template");

    if (fanFavContainer) {
        data.sort((a, b) => {
            return b.rating - a.rating;
        });    
        // limit data to 4 items
        data = data.slice(0, 4);
        data.forEach((ride) => {
            const result = document.importNode(template.content, true);
            const rideImg = result.querySelector(".fan-fav-img");
            const rideName = result.querySelector(".fan-fav-name");
            const userRating = result.querySelector(".user-rating-txt");
            const accessRating = result.querySelector(".access-rating-txt");
            const itemCity = result.querySelector(".ride-city");

            
            let userRatingsObj = JSON.parse(sessionStorage.getItem('userRatingsObj'));
            // for (i = 0; i < userRatingsObj.allRides.length; i++) {
            //     if (ride.id == userRatingsObj.allRides[i].rideid) {
            //         userRating.textContent = parseInt(userRatingsObj.allRides[i].averagerating);
            //         console.log(parseInt(userRatingsObj.allRides[i].averagerating) + " " + ride.id);
            //     }   else {
            //         console.log("no ratings");
            //     }
            // };

            rideImg.src = ride.img;
            rideName.textContent = ride.name;
            // userRating.textContent = ride.rating;
            accessRating.textContent = ride.rating;
            location.textContent = ride.rating;
            itemCity.textContent = ride.location;
            if (userRatingsObj) {
                userRating.textContent = parseFloat(userRatingsObj.allRides[ride.id-1].averagerating);
            } else {
                userRating.textContent = 0;
                // in 3 seconds run the function to get the user ratings
                setTimeout(function() {
                    // userRating.textContent = parseFloat(userRatingsObj.allRides[ride.id-1].averagerating);
                    location.reload();
                }
                , 500);
            }
            console.log(ride.id-1);
            // console.log(userRatingsObj.allRides[50]);
            
            fanFavContainer.appendChild(result);
            console.log("photosensitivity");
        });
        
        // Added  this for button listener for going to the ride page on img click
        const fanRideImg = document.querySelectorAll('.fan-fav-img');
        if (fanRideImg) {
            fanRideImg.forEach(function(element) {
                element.addEventListener('click', function() {
                    console.log(element);
                    ridePageRendered(element);
                    window.location.href = 'ridepage.html';
                });
            });
        } else {
            console.log('list ride image is not present');
        }

        // Added  this for button listener to add ride to list
        const addRideListBtn = document.querySelectorAll('.add-ride-list-btn');
        console.log(addRideListBtn);
        if (addRideListBtn) {
            addRideListBtn.forEach(function(element) {
                element.addEventListener('click', function() {
                    window.location.href = 'addridepage.html';
                });
            });
        } else {
            console.log('add ride list button is not present');
        }
        
        const homePageItems = document.querySelectorAll('.fa-universal-access');
      // if an item moves past the view port, change the dot to active
        console.log(homePageItems);
        // homePageItems.forEach(item => {
        // console.log(item);

        const homePageDots = document.querySelectorAll('.scroll-dot')
        console.log(homePageDots);

        for (let i = 0; i < homePageItems.length; i++) {
            console.log(homePageItems[i]);
            // add a class to each homePageItems item using the index
            homePageItems[i].id = ("dot-" + i);

            // homePageItems.classList.add("dot-[i]");
        }
        // });
        const observer = new IntersectionObserver(entries => {
            console.log(entries[0].target);
            if (entries[0].target.className === "dot-one") {
                console.log("dot one");
            }
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0 && entry.intersectionRatio < 2) {
            console.log("item is in view port");
                entry.target.parentElement.parentElement.parentElement.parentElement.classList.remove("item-outside-viewport");
                entry.target.parentElement.parentElement.parentElement.parentElement.classList.add("item-inside-viewport");
                if (entry.target.parentElement.parentElement.parentElement.parentElement.classList.contains("item-inside-viewport")) {
                console.log("Item is red!!!!!")
                console.log(entry.target.id)
                    if(entry.target.id === "dot-0"){
                        console.log("dot one");
                        homePageDots[0].classList.remove("fa-regular");
                        homePageDots[0].classList.add("fa-solid");
                        homePageDots[1].classList.remove("fa-solid");
                        homePageDots[2].classList.remove("fa-solid");
                        homePageDots[3].classList.remove("fa-solid");
                        homePageDots[1].classList.add("fa-regular");
                        homePageDots[2].classList.add("fa-regular");
                        homePageDots[3].classList.add("fa-regular");
                    } else if (entry.target.id === "dot-1") {
                        homePageDots[1].classList.remove("fa-regular");
                        homePageDots[1].classList.add("fa-solid");
                        homePageDots[0].classList.remove("fa-solid");
                        homePageDots[2].classList.remove("fa-solid");
                        homePageDots[3].classList.remove("fa-solid");
                        homePageDots[0].classList.add("fa-regular");
                        homePageDots[2].classList.add("fa-regular");
                        homePageDots[3].classList.add("fa-regular");
                    } else if (entry.target.id === "dot-2") {
                        homePageDots[2].classList.remove("fa-regular");
                        homePageDots[2].classList.add("fa-solid");
                        homePageDots[1].classList.remove("fa-solid");
                        homePageDots[0].classList.remove("fa-solid");
                        homePageDots[3].classList.remove("fa-solid");
                        homePageDots[0].classList.add("fa-regular");
                        homePageDots[1].classList.add("fa-regular");
                        homePageDots[3].classList.add("fa-regular");
                    } else if (entry.target.id === "dot-3") {
                        homePageDots[3].classList.add("fa-solid");
                        homePageDots[1].classList.remove("fa-solid");
                        homePageDots[2].classList.remove("fa-solid");
                        homePageDots[0].classList.remove("fa-solid");
                        homePageDots[0].classList.add("fa-regular");
                        homePageDots[2].classList.add("fa-regular");
                        homePageDots[1].classList.add("fa-regular");
                    }
                }
            //console.log the index of the item
            console.log(entry.target);
            } else if (entry.intersectionRatio === 1) {
                entry.target.parentElement.parentElement.parentElement.parentElement.classList.remove("item-outside-viewport");
                entry.target.parentElement.parentElement.parentElement.parentElement.classList.add("item-inside-viewport");
                console.log(entry.target.className)
                if(entry.target.id === "dot-0"){
                        console.log("dot one");
                        homePageDots[0].classList.add("fa-solid");
                        homePageDots[0].classList.remove("fa-regular");
                    }    
                
            } else {
                console.log("item moved past view port");
                entry.target.parentElement.parentElement.parentElement.parentElement.classList.remove("item-inside-viewport");
                entry.target.parentElement.parentElement.parentElement.parentElement.classList.add("item-outside-viewport");
                if (entry.target.parentElement.parentElement.parentElement.parentElement.classList.contains("item-outside-viewport")) {
                console.log("Item is blue!!!!!")
                    if(entry.target.id === "dot-0"){
                        console.log("dot one");
                        homePageDots[0].classList.remove("fa-solid");
                        homePageDots[0].classList.add("fa-regular");
                    } else if (entry.target.id === "dot-1") {
                        homePageDots[1].classList.remove("fa-solid");
                        homePageDots[1].classList.add("fa-regular");
                    } else if (entry.target.id === "dot-2") {
                        homePageDots[2].classList.remove("fa-solid");
                        homePageDots[2].classList.add("fa-regular");
                    } else if (entry.target.id === "dot-3") {
                        homePageDots[3].classList.remove("fa-solid");
                        homePageDots[3].classList.add("fa-regular");
                    }
                }
                }
            });
            });

            // observe all the homePageItems
            homePageItems.forEach(item => {
            observer.observe(item);
            
        });


    }
}

function moveHomeDots(){
        const homePageItems = document.querySelectorAll('.fan-fav-item');
      // if an item moves past the view port, change the dot to active
        console.log(homePageItems);
        homePageItems.forEach(item => {
            if (item.getBoundingClientRect().left < 0) {
                console.log("item moved past view port")
            } else {
                console.log("item is in view port")
            }
        });

      
      
      // if (homePageItems[0].getBoundingClientRect().left < 0) {
        //     console.log("item moved past view port")
        // } else if (homePageItems[1].getBoundingClientRect().left < 0) {
        //     homeDots[1].classList.remove('active');
        //     homeDots[2].classList.add('active');
        // }
}

// Search Function for Parks or Rides
function search(data) {
    let userFilters ={};
    userFilters = JSON.parse(sessionStorage.getItem('userFilters'));
    console.log(userFilters);

    let searchFilters = userFilters;
    console.log(searchFilters);

    if (sessionStorage.getItem('userFiltersCleared') === 'true') {
        sessionStorage.removeItem('userFiltersCleared');
        sessionStorage.removeItem('userFilters');
        userFilters = {};
        searchFilters = userFilters;
    } 

    const searchParks = document.getElementById('search-for-parks');
    const searchRides = document.getElementById('search-for-rides');
    const searchResultsContainer = document.getElementById("search-results-container");
    const template = document.getElementById("search-result-template");
    

    // search filters, on search page load, remove previous search results, 
    // or just save 
    // In the search filters page, the back button will check for selected filters, then apply that to the search results
    // if the ride search page will retain the filters until they are cleared
    // the rides page, rides or parks page, and parks page will have separate search filters saved in session storage
    // sort parks by alphabetical order of parks 
    if (searchRides) {
        searchRides.addEventListener('input', () => {
            const searchValue = searchRides.value.toLowerCase();
            // console.log(searchFilters);
            // console.log(searchFilters.parkCity);
            // console.log(searchFilters.sort);
            // console.log(searchFilters.tags);

            // if sort is alphabetical, sort by alphabetical order of rides
            // if sort is park, sort by park
            // if sort is access rating, sort by access rating
            // if (searchFilters){
                
            // };
        
            const filteredParks = data.filter(park => {
                // console.log(park);
                //console.log(searchFilters);
                if (searchFilters != undefined && searchFilters && searchFilters.tags != undefined) {

                    //Tag Object
                    let searchTags = searchFilters.tags
                    // Wheelchair Variable
                    let wheelchairTag = searchFilters.tags.wheelchair;
                    // Photosensitivity Variable
                    let photosensitivityTag = searchFilters.tags.photosensitivity;
                    // Service Animal Variable
                    let serviceAnimalTag = searchFilters.tags.serviceAnimal;
                    // Size/Shape Variable
                    let sizeShapeTag = searchFilters.tags.sizeShape;
                    // Child Swap Variable
                    let childSwapTag = searchFilters.tags.childSwap;


                    //match rides with accessibilites and tags, find rides that match the tags 
                    if (wheelchairTag || photosensitivityTag || serviceAnimalTag || sizeShapeTag || childSwapTag) {
                        console.log("One or some tag was choosen");
                        for (let tag in searchTags){
                            // console.log(tag + ": " + searchTags[tag]);
                            if (searchTags[tag] === true) {
                                console.log(tag);
                                if (searchFilters.parkCity) {
                                // only return parks that match the city filter
                                console.log(park.park);
                                if (park.location === searchFilters.parkCity && park.accessibility) {
                                    console.log(park.location)
                                    console.log(park)
                                    return park.name.toLowerCase().includes(searchValue);
                                } else if (park.park === searchFilters.parkCity) {
                                    return park.name.toLowerCase().includes(searchValue);
                                }
                                } else {
                                    return park.name.toLowerCase().includes(searchValue);
                                } 
                            }
                        }
                    } else if (!wheelchairTag && !photosensitivityTag && !serviceAnimalTag && !sizeShapeTag && !childSwapTag) {
                        console.log("No tags were choosen");
                        if (searchFilters.parkCity) {
                        // only return parks that match the city filter
                        console.log(park.park);
                        if (park.location === searchFilters.parkCity) {
                            return park.name.toLowerCase().includes(searchValue);
                        } else if (park.park === searchFilters.parkCity) {
                            return park.name.toLowerCase().includes(searchValue);
                        }
                        } else {
                            return park.name.toLowerCase().includes(searchValue);
                        } 
                    };

                     
                } else {
                    return park.name.toLowerCase().includes(searchValue);
                };
                
                // return park.name.toLowerCase().includes(searchValue);
            });
            
            // sort filteredParks by each rides 'rating' property
            if (searchFilters && searchFilters.sort === "rating") {
                let parksSorted = filteredParks.sort((a, b) => {
                    return b.rating - a.rating;
                });    
                console.log(parksSorted);
            }

            

            searchResultsContainer.innerHTML = "";

            filteredParks.forEach((ride) => {
                // skip if ride.height is undefined
                if (ride.height === undefined) {
                    if (searchFilters != undefined && searchFilters && searchFilters.tags != undefined) {

                        console.log(ride.accessibility.photosensitivity)
                        //Tag Object
                        let searchTags = searchFilters.tags
                        // Wheelchair Variable
                        let wheelchairTag = searchFilters.tags.wheelchair;
                        console.log(wheelchairTag);
                        // Photosensitivity Variable
                        let photosensitivityTag = searchFilters.tags.photosensitivity;
                        console.log(photosensitivityTag);
                        // Service Animal Variable
                        let serviceAnimalTag = searchFilters.tags.serviceAnimal;
                        console.log(serviceAnimalTag);
                        // Size/Shape Variable
                        let sizeShapeTag = searchFilters.tags.sizeShape;
                        console.log(sizeShapeTag);
                        // Child Swap Variable
                        let childSwapTag = searchFilters.tags.childSwap;
                        console.log(childSwapTag);

                        console.log(ride.accessibility.photosensitivity);
                        let userRatingsObj = JSON.parse(sessionStorage.getItem('userRatingsObj'));
            
                        if(ride.accessibility.wheelchair === true && wheelchairTag === true) {
                            const result = document.importNode(template.content, true);
                            const rideImg = result.querySelector(".list-ride-img");
                            const rideLocation = result.querySelector(".list-ride-location");
                            const rideName = result.querySelector(".list-ride-name");
                            const userRating = result.querySelector(".user-rating-txt");
                            const accessRating = result.querySelector(".access-rating-txt");
                            // const location = result.querySelector(".proxima-regular");
                            const itemCity = result.querySelector(".ride-city");
                            
                            rideImg.src = ride.img;
                            rideLocation.textContent = ride.park;
                            rideName.textContent = ride.name;
                            userRating.textContent = roundToTenth(userRatingsObj.allRides[ride.id-1].averagerating);
                            accessRating.textContent = ride.rating;
                            // location.textContent = ride.rating;
                            itemCity.textContent = ride.location;

                            searchResultsContainer.appendChild(result);
                            console.log("wheelchair");
                        } else if (ride.accessibility.photosensitivity === true && photosensitivityTag === true) {
                            const result = document.importNode(template.content, true);
                            const rideImg = result.querySelector(".list-ride-img");
                            const rideLocation = result.querySelector(".list-ride-location");
                            const rideName = result.querySelector(".list-ride-name");
                            const userRating = result.querySelector(".user-rating-txt");
                            const accessRating = result.querySelector(".access-rating-txt");
                            // const location = result.querySelector(".proxima-regular");
                            const itemCity = result.querySelector(".ride-city");
                            
                            rideImg.src = ride.img;
                            rideLocation.textContent = ride.park;
                            rideName.textContent = ride.name;
                            userRating.textContent = roundToTenth(userRatingsObj.allRides[ride.id-1].averagerating);
                            accessRating.textContent = ride.rating;
                            // location.textContent = ride.rating;
                            itemCity.textContent = ride.location;

                            searchResultsContainer.appendChild(result);
                            console.log("photosensitivity");
                        } else if (ride.accessibility.serviceAnimal === true && serviceAnimalTag === true) {
                            const result = document.importNode(template.content, true);
                            const rideImg = result.querySelector(".list-ride-img");
                            const rideLocation = result.querySelector(".list-ride-location");
                            const rideName = result.querySelector(".list-ride-name");
                            const userRating = result.querySelector(".user-rating-txt");
                            const accessRating = result.querySelector(".access-rating-txt");
                            // const location = result.querySelector(".proxima-regular");
                            const itemCity = result.querySelector(".ride-city");
                            
                            rideImg.src = ride.img;
                            rideLocation.textContent = ride.park;
                            rideName.textContent = ride.name;
                            userRating.textContent = roundToTenth(userRatingsObj.allRides[ride.id-1].averagerating);
                            accessRating.textContent = ride.rating;
                            // location.textContent = ride.rating;
                            itemCity.textContent = ride.location;

                            searchResultsContainer.appendChild(result);
                            console.log("service animal");
                        } else if (ride.accessibility.sizeShape === true && sizeShapeTag === true) {
                            const result = document.importNode(template.content, true);
                            const rideImg = result.querySelector(".list-ride-img");
                            const rideLocation = result.querySelector(".list-ride-location");
                            const rideName = result.querySelector(".list-ride-name");
                            const userRating = result.querySelector(".user-rating-txt");
                            const accessRating = result.querySelector(".access-rating-txt");
                            // const location = result.querySelector(".proxima-regular");
                            const itemCity = result.querySelector(".ride-city");
                            
                            rideImg.src = ride.img;
                            rideLocation.textContent = ride.park;
                            rideName.textContent = ride.name;
                            userRating.textContent = roundToTenth(userRatingsObj.allRides[ride.id-1].averagerating);
                            accessRating.textContent = ride.rating;
                            // location.textContent = ride.rating;
                            itemCity.textContent = ride.location;

                            searchResultsContainer.appendChild(result);
                            console.log("sizeShapeTag");
                        } else if (ride.accessibility.childSwap === true && childSwapTag === true) {
                            const result = document.importNode(template.content, true);
                            const rideImg = result.querySelector(".list-ride-img");
                            const rideLocation = result.querySelector(".list-ride-location");
                            const rideName = result.querySelector(".list-ride-name");
                            const userRating = result.querySelector(".user-rating-txt");
                            const accessRating = result.querySelector(".access-rating-txt");
                            // const location = result.querySelector(".proxima-regular");
                            const itemCity = result.querySelector(".ride-city");
                            
                            rideImg.src = ride.img;
                            rideLocation.textContent = ride.park;
                            rideName.textContent = ride.name;
                            userRating.textContent = roundToTenth(userRatingsObj.allRides[ride.id-1].averagerating);
                            accessRating.textContent = ride.rating;
                            // location.textContent = ride.rating;
                            itemCity.textContent = ride.location;

                            searchResultsContainer.appendChild(result);

                            console.log("child swap");
                        } else if (wheelchairTag === false && photosensitivityTag === false && serviceAnimalTag === false && sizeShapeTag === false && childSwapTag === false) {
                            const result = document.importNode(template.content, true);
                            const rideImg = result.querySelector(".list-ride-img");
                            const rideLocation = result.querySelector(".list-ride-location");
                            const rideName = result.querySelector(".list-ride-name");
                            const userRating = result.querySelector(".user-rating-txt");
                            const accessRating = result.querySelector(".access-rating-txt");
                            // const location = result.querySelector(".proxima-regular");
                            const itemCity = result.querySelector(".ride-city");
                            
                            rideImg.src = ride.img;
                            rideLocation.textContent = ride.park;
                            rideName.textContent = ride.name;
                            userRating.textContent = roundToTenth(userRatingsObj.allRides[ride.id-1].averagerating);
                            accessRating.textContent = ride.rating;
                            // location.textContent = ride.rating;
                            itemCity.textContent = ride.location;

                            searchResultsContainer.appendChild(result);

                            console.log("no tags");

                        }

                    } else {
                        const result = document.importNode(template.content, true);
                        const rideImg = result.querySelector(".list-ride-img");
                        const rideLocation = result.querySelector(".list-ride-location");
                        const rideName = result.querySelector(".list-ride-name");
                        const userRating = result.querySelector(".user-rating-txt");
                        const accessRating = result.querySelector(".access-rating-txt");
                        // const location = result.querySelector(".proxima-regular");
                        const itemCity = result.querySelector(".ride-city");
                        
                        rideImg.src = ride.img;
                        rideLocation.textContent = ride.park;
                        rideName.textContent = ride.name;
                        userRating.textContent = roundToTenth(userRatingsObj.allRides[ride.id-1].averagerating);
                        accessRating.textContent = ride.rating;
                        // location.textContent = ride.rating;
                        itemCity.textContent = ride.location;

                        searchResultsContainer.appendChild(result);

                        console.log("No Filters Selected");
                    }
                    
                        
                } else {
                    const result = document.importNode(template.content, true);
                    const rideImg = result.querySelector(".list-ride-img");
                    const rideLocation = result.querySelector(".list-ride-location");
                    const rideName = result.querySelector(".list-ride-name");
                    const userRating = result.querySelector(".user-rating-txt");
                    const accessRating = result.querySelector(".access-rating-txt");
                    const location = result.querySelector(".proxima-regular");
                    const itemCity = result.querySelector(".ride-city");
                    
                    let userRatingsObj = JSON.parse(sessionStorage.getItem('userRatingsObj'));
                    rideImg.src = ride.img;
                    rideLocation.textContent = ride.park;
                    rideName.textContent = ride.name;
                    userRating.textContent = ride.rating;
                    // userRating.textContent = roundToTenth(userRatingsObj.allRides[ride.id-1].averagerating);
                    accessRating.textContent = ride.rating;
                    // location.textContent = ride.rating;
                    itemCity.textContent = ride.location;

                    console.log(ride.height);
                }
            });

            // Added  this for button listener to add ride to compare list
            const buttons = document.querySelectorAll('.add-ride-compare-btn');
            buttons.forEach(button => {
                if (!button.hasEventListener) {
                    button.addEventListener('click', () => {
                        console.log("event listener added");
                        handleClick(button);
                    });
                    button.hasEventListener = true;
                }
            });

            // Adds event listeners to add ride button on search results to add ride page
            // not present on compare page
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

            const listRideImg = document.querySelectorAll('.list-ride-img');
            if (listRideImg) {
                listRideImg.forEach(function(element) {
                    element.addEventListener('click', function() {
                        ridePageRendered(element);
                        window.location.href = 'ridepage.html';
                    });
                });
            } else {
                console.log('list ride image is not present');
            }

    
        }); 
    }
    
    if (searchParks) {
        searchParks.addEventListener('input', () => {
            const searchValue = searchParks.value.toLowerCase();
            const filteredParks = data.filter(park => {
                if (searchFilters && searchFilters.parkCity) {
                    // only return parks that match the city filter
                    console.log(park.park);
                    if (park.location === searchFilters.parkCity) {
                        console.log(park.location)
                        console.log(park)
                        return park.name.toLowerCase().includes(searchValue);
                    } else if (park.name === searchFilters.parkCity) {
                        console.log(park.name)
                        return park.name.toLowerCase().includes(searchValue);
                    }
                } else {
                    return park.name.toLowerCase().includes(searchValue);
                } 
                // return park.name.toLowerCase().includes(searchValue);
            });
            // console.log(filteredParks);
            for (let i = 0; i < filteredParks.length; i++) {
                console.log(filteredParks[i].name);
            }
            // console.log(filteredParks[0].name);
            // console.log(filteredParks);
            // sort filteredParks by each rides 'rating' property
            if (searchFilters && searchFilters.sort === "rating") {
                let parksSorted = filteredParks.sort((a, b) => {
                    return b.rating - a.rating;
                });    
                console.log(parksSorted);
            }
            searchResultsContainer.innerHTML = "";

            filteredParks.forEach((ride) => {
                if (ride.height === undefined) {
                    // console.log(ride);  
                } else {
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
                    // location.textContent = ride.rating;
                    itemCity.textContent = ride.location;

                    searchResultsContainer.appendChild(result);
                }
                
            });
            
            const parkViewRidesBtnDiv = document.querySelectorAll('.view-park-page');

            if (parkViewRidesBtnDiv) {
                parkViewRidesBtnDiv.forEach(function(element) {
                    element.addEventListener('click', function() {
                        parkPageRendered(element);
                        window.location.href = 'parkpage.html';
                        console.log("park view rides button clicked");
                        // selectedParkPage()
                    });
                });
            } else {
                console.log('park view rides button is not present');
            }

            const parksListImg = document.querySelectorAll('.parks-list-img');

            if (parksListImg) {
                parksListImg.forEach(function(element) {
                    element.addEventListener('click', function() {
                        parkPageImgRendered(element);
                        window.location.href = 'parkpage.html';
                    });
                });
            } else {
                console.log('list ride image is not present');
            }
            

        
        }); 
    }
}

// Function that renders the arrow on the header for each page
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
            // ridesAllAdded();
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
    const parksListImg = document.querySelectorAll('.parks-list-img');
    // if (parksListImg) {
    //     parksListImg.addEventListener('click', function() {
    //         parkPageImgRendered(parksListImg);
    //         // window.location.href = 'parkpage.html';
    //     });
    // } else {
    //     console.log('parks list image is not present');
    // }
    if (parksListImg) {
        parksListImg.forEach(function(element) {
            element.addEventListener('click', function() {
                window.location.href = 'parkpage.html';
                parkPageImgRendered(element);
            });
        });
    }
});


//create evemt listener for back arrow
document.addEventListener('DOMContentLoaded', function() {
    const backArrow = document.querySelector('.header-arrow');
    const filtersBackArrow = document.querySelector('.filters-header-arrow');
    const searchPageBackArrow = document.querySelector('.search-page-header');
    // check if the back arrow is present on the page
    if (backArrow) { 
        console.log('back arrow is present');
        backArrow.addEventListener('click', function() {
            history.back();
        });
    } else if (searchPageBackArrow) {
        console.log('search page back arrow is present');
        searchPageBackArrow.addEventListener('click', function() {
            returnClearFilters();
            history.back();
        });
    } else if(filtersBackArrow){
        console.log('filter back arrow is present');
        // filtersBackArrow.addEventListener('click', function() {
        //     history.back();
        // });
    } else {
        console.log('back arrow is not present');
    }
});


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
    const filterParksIcon = document.querySelector('.filter-parks-icon');
    const filterCompareIcon = document.querySelector('.filter-compare-icon');

    if (filterIcon && !filterParksIcon && !filterCompareIcon) {
        filterIcon.addEventListener('click', function() {
        window.location.href = 'searchfilters.html';
        sessionStorage.setItem('filteringParks', 'false');
        sessionStorage.setItem('filteringCompare', 'false');
        }); 
    } else if (filterParksIcon) {
        filterParksIcon.addEventListener('click', function() {
        sessionStorage.setItem('filteringParks', 'true');
        sessionStorage.setItem('filteringCompare', 'false');
        window.location.href = 'searchfilters.html';
        });
    } else if (filterCompareIcon) {
        filterIcon.addEventListener('click', function() {
        window.location.href = 'searchfilters.html';
        sessionStorage.setItem('filteringCompare', 'true');
        sessionStorage.setItem('filteringParks', 'false');
        });
    } else {
        console.log('filter icon is not present');
    }
} );

document.addEventListener('DOMContentLoaded', function() {
    const iconTextContainer = document.querySelectorAll('.icon-text-container');
    if (iconTextContainer) {
        iconTextContainer.forEach(function(iconTextContainer) {
            iconTextContainer.addEventListener('click', function() {
                returnClearFilters();
            });
    }); }

});
//when the first icon-text-container element in side the icon-container div is clicked, go to home.html
//Home Icon Page Navigation
document.addEventListener('DOMContentLoaded', function() {
    let homeIcon = document.querySelector('.icon-container');
    // This is for the Home Icon
    if (homeIcon) {
        let homeIcon = document.querySelector('.icon-container').children[0];
        console.log('home icon is present');
        homeIcon.addEventListener('click', function() {
            returnClearFilters();
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
            returnClearFilters();
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
            returnClearFilters();
            window.location.href = 'comparerides.html';
        });
    } else {
        console.log('compare icon is not present');
    };
});

let ridesData = [];
let parksData = [];

// function to retrieve rides data and make it global
function ridesGlobal(rides) {
    ridesData = rides;
}

// function to retrieve parks data and make it global
function parksGlobal(parks) {
    parksData = parks;
}


// function to clear ridesData
function removeRideData(ridesData) {
    ridesData = {};
}


let rideInfoFirst;
let rideInfoSecond;
let rideInfoThird;


let ridesResults = [];
// push rideInfoFirst, rideInfoSecond, rideInfoThird into ridesCompared object

// function to add rides to ridesResults
function ridesAllAdded() {
    // for (let i = 0; i < 3; i++) {
    //     ridesResults.push(rideInfoFirst, rideInfoSecond, rideInfoThird);
    // }

    // add rideInfoFirst object, rideInfoSecond object, rideInfoThird object to ridesResults
    ridesResults = [];
    ridesResults.push(rideInfoFirst, rideInfoSecond, rideInfoThird)
    // save to seesion storage
    sessionStorage.setItem('ridesResults', JSON.stringify(ridesResults));
    ridesCompared();
    // retrieve from session storage
    // ridesResults = JSON.parse(sessionStorage.getItem('ridesResults'));

    // console.log(rideInfoFirst);
    // console.log(rideInfoSecond);
    // console.log(rideInfoThird);
    console.log(ridesResults);
    return ridesResults;
}

// function to display rides compared
function ridesCompared() {

    // ridesAllAdded();
    ridesResults = JSON.parse(sessionStorage.getItem('ridesResults'));
    console.log(ridesResults);
    // ridesResults.forEach(ride => {
    //     console.log(ride.name);
    // });
    const compareResultsContainer = document.querySelector('.compare-results-container');
    const compareResultsTemplate = document.querySelector('#compare-results-template');

    // Loop through your data and create a new template for each item
    if (compareResultsTemplate) {
        ridesResults.forEach(item => {
            //if null skip, this fixes the issue of an item being null
            if (!item) {
                return;
            } else {
            let userRatingsObj = JSON.parse(sessionStorage.getItem('userRatingsObj'));
            const compareResultsClone = compareResultsTemplate.content.cloneNode(true);
            compareResultsClone.querySelector('.compare-results-img').src = item.img;
            compareResultsClone.querySelector('.compare-results-img-text:nth-of-type(1)').textContent = item.park;
            compareResultsClone.querySelector('.compare-results-img-text:nth-of-type(2)').textContent = item.name;
            compareResultsClone.querySelector('.ride-location-txt').textContent = item.location;
            compareResultsClone.querySelector('.user-rating-txt').textContent = roundToTenth(userRatingsObj.allRides[item.id-1].averagerating);
            compareResultsClone.querySelector('.access-rating-txt').textContent = item.rating;
            compareResultsContainer.appendChild(compareResultsClone);
            }
            
        });
            const listRideImg = document.querySelectorAll('.compare-results-img');
            if (listRideImg) {
                listRideImg.forEach(function(element) {
                    element.addEventListener('click', function() {
                        ridePageRendered(element);
                        window.location.href = 'ridepage.html';
                    });
                });
            } else {
                console.log('list ride image is not present');
            }

    }
    
}

// function to add ride to compare list
function handleClick(button) {
  console.log('Button clicked:', button);
  // your code here
  console.log("Ride Added to Compare!")
    const compareIcon = document.querySelectorAll('.ride-compared-img');
    const compareBtn = document.querySelectorAll('.add-ride-list-btn');
    console.log(compareBtn.length);

    const rideName = button.parentElement.previousElementSibling.children[0].children[1].innerText;
    const ride = ridesData.find(ride => ride.name === rideName);
    console.log(ride);
    console.log(ride.name);
    console.log(ride.img);
    console.log(compareIcon[0].src);
    console.log(window.location.origin);
    // const xMark = document.querySelectorAll('.fa-circle-xmark');
    
    // xMark.forEach(function (xMark) {
    //     xMark.addEventListener('click', function () {
    //         if (xMark.nextElementSibling.src == "media/imgs/empty-img.png") {
    //             console.log('empty-img.png');
    //         }
    //     });
    // });
            
        
    // console.log(xMark);

    // for (let i = 0; i < compareIcon.length; i++) {
        // if (compareIcon[i].src === window.location.origin + '/media/imgs/empty-img.png') {
        //     compareIcon[i].src = '';
        //     compareIcon[i].src = ride.img;
        //     break;
        // } else {
        //     console.log('All images are full');
        // }   
    // }
    const xMark = document.querySelectorAll('.fa-circle-xmark');

    console.log(xMark[0]);
    
   

    xMark.forEach(function (xMark) {
        xMark.addEventListener('click', function () {
            if (xMark.style.transform === 'rotate(45deg)') {
                xMark.style.transform = 'rotate(0deg)';
                xMark.nextElementSibling.src = 'media/imgs/empty-img.png';
                checkData();
            }
        });
    });

    function checkData() {
        if (xMark[0].style.transform === 'rotate(0deg)') {
            rideInfoFirst = undefined;
            console.log(rideInfoFirst);
            return;
        } else if (xMark[1].style.transform === 'rotate(0deg)') {
            rideInfoSecond = undefined;
            console.log(rideInfoSecond);
            return;
        } else if (xMark[2].style.transform === 'rotate(0deg)') {
            rideInfoThird = undefined;
            console.log(rideInfoThird);
            return;
        }
    }

    
    if (compareIcon[0].src === window.location.origin + '/RideRaters/media/imgs/empty-img.png' && compareIcon[1].src === window.location.origin + '/RideRaters/media/imgs/empty-img.png' && compareIcon[2].src === window.location.origin + '/RideRaters/media/imgs/empty-img.png') {
        console.log('All images are empty');
        compareIcon[0].src = '';
        compareIcon[0].src = ride.img;
        rideInfoFirst = ride;
        console.log(rideInfoFirst);
        xMark[0].style.transform = 'rotate(45deg)';
        return;        
    } else if (compareIcon[1].src === window.location.origin + '/RideRaters/media/imgs/empty-img.png' && compareIcon[2].src === window.location.origin + '/RideRaters/media/imgs/empty-img.png') {
        console.log('Image 1 and Image 2 are full');
        compareIcon[1].src = '';
        compareIcon[1].src = ride.img;
        rideInfoSecond = ride;
        console.log(rideInfoSecond);
        xMark[1].style.transform = 'rotate(45deg)';
        return;
 
    } else if (compareIcon[1].src != window.location.origin + '/RideRaters/media/imgs/empty-img.png' && compareIcon[2].src === window.location.origin + '/RideRaters/media/imgs/empty-img.png') {
        console.log('Image 2 and Image 3 are full');
        compareIcon[2].src = '';
        compareIcon[2].src = ride.img;
        rideInfoThird = ride;
        console.log(rideInfoThird);
        xMark[2].style.transform = 'rotate(45deg)';
        return;
    } else if (compareIcon[0].src === window.location.origin + '/RideRaters/media/imgs/empty-img.png' && compareIcon[1].src != window.location.origin + '/RideRaters/media/imgs/empty-img.png' && compareIcon[2].src != window.location.origin + '/RideRaters/media/imgs/empty-img.png') {
        console.log('All images are empty');
        compareIcon[0].src = '';
        compareIcon[0].src = ride.img;
        rideInfoFirst = ride;
        console.log(rideInfoFirst);
        xMark[0].style.transform = 'rotate(45deg)';
        return;    
    } else if (compareIcon[1].src === window.location.origin + '/RideRaters/media/imgs/empty-img.png' && compareIcon[0].src != window.location.origin + '/RideRaters/media/imgs/empty-img.png' && compareIcon[2].src != window.location.origin + '/RideRaters/media/imgs/empty-img.png') {
        console.log('All images are empty');
        compareIcon[1].src = '';
        compareIcon[1].src = ride.img;
        rideInfoSecond = ride;
        console.log(rideInfoSecond);
        xMark[1].style.transform = 'rotate(45deg)';
        return;    
    } else if (compareIcon[2].src === window.location.origin + '/RideRaters/media/imgs/empty-img.png' && compareIcon[0].src != window.location.origin + '/RideRaters/media/imgs/empty-img.png' && compareIcon[1].src != window.location.origin + '/RideRaters/media/imgs/empty-img.png') {
        console.log('All images are empty');
        compareIcon[2].src = '';
        compareIcon[2].src = ride.img;
        rideInfoThird = ride;
        console.log(rideInfoThird);
        xMark[2].style.transform = 'rotate(45deg)';
        return;    
    }

    
}

// Variable that stores the selected park page data
let parkPageSelected = [];
// Variable that stores the selected ride page data
let ridePageSelected = []; 

// Function that renders the park page on button click
function parkPageRendered(button) {
    sessionStorage.removeItem('parkPageSelected');
    const rideName = button.parentElement.previousElementSibling.children[0].innerText;
    console.log(rideName);
    console.log(parksData);
    const park = parksData.find(ride => ride.name === rideName);
    console.log(park);
  
    parkPageSelected = [];
    parkPageSelected.push(park);

    // clear the parkPageSelected session storage item
    sessionStorage.setItem('parkPageSelected', JSON.stringify(parkPageSelected));

    // selectedParkPage();
    // parkPageSelected = JSON.parse(sessionStorage.getItem('ridesResults'));
    // console.log(ridesResults);
    // // ridesResults.forEach(ride => {
    // //     console.log(ride.name);
    // // });
    // const compareResultsContainer = document.querySelector('.compare-results-container');
    // const compareResultsTemplate = document.querySelector('#compare-results-template');

    // // Loop through your data and create a new template for each item
    // if (compareResultsTemplate) {
    //     ridesResults.forEach(item => {
    //         //if null skip, this fixes the issue of an item being null
    //         if (!item) {
    //             return;
    //         } else {
    //         const compareResultsClone = compareResultsTemplate.content.cloneNode(true);
    //         compareResultsClone.querySelector('.compare-results-img').src = item.img;
    //         compareResultsClone.querySelector('.compare-results-img-text:nth-of-type(1)').textContent = item.park;
    //         compareResultsClone.querySelector('.compare-results-img-text:nth-of-type(2)').textContent = item.name;
    //         compareResultsClone.querySelector('.ride-location-txt').textContent = item.location;
    //         compareResultsClone.querySelector('.user-rating-txt').textContent = item.rating;
    //         compareResultsClone.querySelector('.access-rating-txt').textContent = item.rating;
    //         compareResultsContainer.appendChild(compareResultsClone);
    //         }
    //     });

    // }
}

// Function that renders the park page on img click
function parkPageImgRendered(img) {
    sessionStorage.removeItem('parkPageSelected');
    const rideName = img.parentElement.nextElementSibling.children[0].innerText;
    console.log(rideName);
    console.log(parksData);
    const park = parksData.find(ride => ride.name === rideName);
    console.log(park);
   
    parkPageSelected = [];
    parkPageSelected.push(park);
    console.log(parkPageSelected);

    // clear the parkPageSelected session storage item
    sessionStorage.setItem('parkPageSelected', JSON.stringify(parkPageSelected));
}



function addRide2List(btn) {
    console.log(btn);
    const rideName = btn.parentElement.nextElementSibling.children[0].children[1].innerText;
    console.log(rideName);
    // console.log(parksData);
    console.log(ridesData);
    
    const selectedRide = ridesData.find(ride => ride.name === rideName);
    console.log(selectedRide);
    
    addedListRide = [];
    addedListRide.push(selectedRide);

    // clear the parkPageSelected session storage item
    sessionStorage.setItem('addedListRide', JSON.stringify(addedListRide));
}

// Function that renders the ride page on img click
function ridePageRendered(img) {
    console.log("ridePageRendered(img) has started bro" );
    sessionStorage.removeItem('ridePageSelected');
    if (img.className === 'list-ride-img') {
        console.log(img);
        const rideName = img.parentElement.nextElementSibling.children[0].children[1].innerText;
        console.log(rideName);
        // console.log(parksData);
        console.log(ridesData);
        
        const selectedRide = ridesData.find(ride => ride.name === rideName);
        console.log(selectedRide);
        // save selectedRide.id to session storage
        // clear the rideSelectedId session storage item
        sessionStorage.removeItem('rideSelectedId');
        let rideSelectedId = sessionStorage.setItem('rideSelectedId', selectedRide.id);
        console.log(selectedRide.id);
        console.log(rideSelectedId);
        // get session storage rideSelectedId 
        rideSelectedId = Number(sessionStorage.getItem('rideSelectedId'));
        console.log(rideSelectedId);
        
        ridePageSelected = [];
        ridePageSelected.push(selectedRide);
    
        // clear the parkPageSelected session storage item
        sessionStorage.setItem('ridePageSelected', JSON.stringify(ridePageSelected));
    } else if (img.className === 'fan-fav-img') {
        console.log(img);
        const rideName = img.nextElementSibling.nextElementSibling.children[0].innerText;
        console.log(rideName);
        // console.log(parksData);
        console.log(ridesData);
        
        const selectedRide = ridesData.find(ride => ride.name === rideName);
        console.log(selectedRide);
        sessionStorage.removeItem('rideSelectedId');
        let rideSelectedId = sessionStorage.setItem('rideSelectedId', selectedRide.id);
        console.log(selectedRide.id);
        console.log(rideSelectedId);
        // get session storage rideSelectedId 
        rideSelectedId = Number(sessionStorage.getItem('rideSelectedId'));
        console.log(rideSelectedId);
        
        ridePageSelected = [];
        ridePageSelected.push(selectedRide);
    
        // clear the parkPageSelected session storage item
        sessionStorage.setItem('ridePageSelected', JSON.stringify(ridePageSelected));
    } else {
        console.log(img);        
        const rideName = img.nextElementSibling.nextElementSibling.innerText;
        console.log(rideName);
        // console.log(parksData);
        console.log(ridesData);
        
        const selectedRide = ridesData.find(ride => ride.name === rideName);
        console.log(selectedRide);
        
        ridePageSelected = [];
        ridePageSelected.push(selectedRide);
    
        // clear the parkPageSelected session storage item
        sessionStorage.setItem('ridePageSelected', JSON.stringify(ridePageSelected));
    }
    
}


// Function that renders the selected park page
function selectedParkPage() {
    parkPageSelected = JSON.parse(sessionStorage.getItem('parkPageSelected'));
    console.log(parkPageSelected);
   
    // ridesResults.forEach(ride => {
    //     console.log(ride.name);
    // });
    const parkResultsContainer = document.querySelector('#park-results-container');
    const parkResultsTemplate = document.querySelector('#park-result-template');

    // Loop through your data and create a new template for each item
    if (parkResultsTemplate) {
        const parkResultsClone = parkResultsTemplate.content.cloneNode(true);
        // document.querySelector('.park-page').textContent = parkPageSelected[0].name;
        // If the Park is Universal's Islands of Adventure, then add a line break
        if (parkPageSelected[0].name === parksData[7].name) {
            const universalIoa1 = 'Universal\'s';
            const br = document.createElement('br');
            const universalIoa3 = 'Islands of Adventure';

            const div = document.createElement('div');
            div.textContent = universalIoa3;

            const parkPage = document.querySelector('.park-page');
            parkPage.textContent = universalIoa1;
            parkPage.appendChild(br);
            parkPage.appendChild(div);
        } else {
            document.querySelector('.park-page').textContent = parkPageSelected[0].name;
        }
        parkResultsClone.querySelector('.park-page-img').src = parkPageSelected[0].img;
        parkResultsClone.querySelector('.park-themepark').textContent = parkPageSelected[0].location;
        if (parkPageSelected[0].location === 'Lake Buena Vista, FL') {
            parkResultsClone.querySelector('.park-rating-div').style.marginLeft = '4rem';
        };
        // style.marginLeft = '4rem'
        parkResultsClone.querySelector('.park-rating-div');
        parkResultsClone.querySelector('.user-rating-txt').textContent = parkPageSelected[0].rating;
        parkResultsClone.querySelector('.access-rating-txt').textContent = parkPageSelected[0].rating;
        parkResultsClone.querySelector('.park-descript-txt').textContent = parkPageSelected[0].description;
        parkResultsClone.querySelector('.park-link').href = parkPageSelected[0].site;
        parkResultsContainer.appendChild(parkResultsClone);
        
        //render the rides
        const parkRidesContainer = document.querySelector('#search-results-container');
        const parkRidesTemplate = document.querySelector('#search-result-template');
        parkPageSelected[0].rides.forEach(ride => {
            const result = document.importNode(parkRidesTemplate.content, true);
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
            userRating.textContent = roundToTenth(userRatingsObj.allRides[ride.id-1].averagerating);
            accessRating.textContent = ride.rating;
            // location.textContent = ride.rating;
            itemCity.textContent = ride.location;
            parkRidesContainer.appendChild(result);
        });
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
        const listRideImg = document.querySelectorAll('.list-ride-img');
        if (listRideImg) {
            listRideImg.forEach(function(element) {
                element.addEventListener('click', function() {
                    ridePageRendered(element);
                    window.location.href = 'ridepage.html';
                });
            });
        } else {
            console.log('list ride image is not present');
        } 
    }
    
}

// Setting up the recent searches
let lastFiveSearches = [];

// Function that renders the selected ride page
function selectedRidePage() {
    ridePageSelected = JSON.parse(sessionStorage.getItem('ridePageSelected'));
    console.log(ridePageSelected);
    const rideResultsContainer = document.querySelector('#ride-results-container');
    const rideResultsTemplate = document.querySelector('#ride-result-template');
    
    if (rideResultsTemplate) {
        console.log(ridePageSelected[0].name);

        let parkName = ridePageSelected[0].park;
        console.log(parkName);

        console.log(ridePageSelected[0].accessibility.wheelchair);
        console.log(ridePageSelected[0].accessibility.photosensitivity);
        console.log(ridePageSelected[0].accessibility.serviceAnimal);
        console.log(ridePageSelected[0].accessibility.sizeShape);
        console.log(ridePageSelected[0].accessibility.childSwap);

        console.log(parksData[0].name);
        console.log(parksData[1].name);
        console.log(parksData[2].name);
        console.log(parksData[3].name);
        console.log(parksData[4].name);
        console.log(parksData[5].name);
        console.log(parksData[6].name);
        console.log(parksData[7].name);
        console.log(parksData[8].name);


        const selectedRidePark = parksData.find(park => park.name === parkName);
        console.log(selectedRidePark);
        let userRatingsObj = JSON.parse(sessionStorage.getItem('userRatingsObj'));
        const rideResultsClone = rideResultsTemplate.content.cloneNode(true);
        rideResultsClone.querySelector('.park-ride-page-img').src = ridePageSelected[0].img;
        document.querySelector('.park-ride-page').textContent = ridePageSelected[0].name;
        rideResultsClone.querySelector('.park-ride-themepark').textContent = ridePageSelected[0].park;
        rideResultsClone.querySelector('.park-ride-city').textContent = ridePageSelected[0].location;
        rideResultsClone.querySelector('.user-rating-txt').textContent = roundToTenth(userRatingsObj.allRides[ridePageSelected[0].id-1].averagerating);
        rideResultsClone.querySelector('.access-rating-txt').textContent = ridePageSelected[0].rating;
        rideResultsClone.querySelector('.ride-descript-txt').textContent = ridePageSelected[0].description;
        rideResultsClone.querySelector('.ride-site-link').href = ridePageSelected[0].site;
        rideResultsClone.querySelector('.park-wheel').textContent = selectedRidePark.wheelchair;
        rideResultsClone.querySelector('.park-height').textContent = selectedRidePark.height;
        
        // Accessibilty Data Rendering
        if (ridePageSelected[0].accessibility.wheelchair === true) {
            rideResultsClone.querySelector('.access-wheel').classList = 'access-ride-true';
        }
        if (ridePageSelected[0].accessibility.photosensitivity === true) {
            rideResultsClone.querySelector('.access-photo').classList = 'access-ride-true';
        }
        if (ridePageSelected[0].accessibility.serviceAnimal === true) {
            rideResultsClone.querySelector('.access-animal').classList = 'access-ride-true';
        }
        if (ridePageSelected[0].accessibility.sizeShape === true) {
            rideResultsClone.querySelector('.access-shape').classList = 'access-ride-true';
        }
        if (ridePageSelected[0].accessibility.childSwap === true) {
            rideResultsClone.querySelector('.access-swap').classList = 'access-ride-true';
        }

        rideResultsContainer.appendChild(rideResultsClone);

        // Adds event listeners to add ride button on search results to add ride page
        // not present on compare page
        const addRideListBtn = document.querySelectorAll('.add-ride-park-btn');
        if (addRideListBtn) {
            addRideListBtn.forEach(function(element) {
                element.addEventListener('click', function() {
                    window.location.href = 'addridepage.html';
                });
            });
        } else {
            console.log('add ride list button is not present');
        }

        const leaveReviewBtn = document.querySelector('.leave-review-btn').children[0];
        if (leaveReviewBtn) {
            leaveReviewBtn.addEventListener('click', function() {
                    window.location.href = 'review.html';
            });
        } else {
            console.log('Leave Review button is not present');
        }

    } else {
        console.log('ride results template is not present');
    }
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

    const profileHeaderArrow = document.querySelector(".header-arrow");
    profileHeaderArrow.classList.add("profile-header-arrow");
    profileHeaderArrow.classList.remove("header-arrow");

    //event listener 
    profileHeaderArrow.addEventListener("click", function() {
        window.location.href = "profile.html";
    });

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



