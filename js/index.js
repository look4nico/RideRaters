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


//creat evemt listener for back arrow
document.addEventListener('DOMContentLoaded', function() {
    const backArrow = document.querySelector('.header-arrow');
    // check if the back arrow is present on the page
    if (backArrow) { 
        console.log('back arrow is present');
        backArrow.addEventListener('click', function() {
            window.location.href = history.back();
        });
    } else {
        console.log('back arrow is not present');
    }
});

// if nav-logo is clicked, go to home.html
document.addEventListener('DOMContentLoaded', function() {
    const navLogo = document.querySelector('.nav-logo');
    navLogo.addEventListener('click', function() {
    window.location.href = 'home.html';
    });
    // when the third icon-text-container element in side the icon-container div is clicked, go to comparerides.html
//Compare Rides Icon Page Navigation
} );

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
        menuIcon.addEventListener('click', function() {
        if (menuIcon.id === "menu-selected") {
            history.back();
        } else {
            window.location.href = 'menu.html';
        }
    });
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
                

function menuPage() {

    const contentDiv = document.querySelector(".content");
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
    listImg.src = "";
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

function editProfileBtn() {
   rebuildArrow();
   
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
    editUserIcon.classList.add('fa-solid', 'fa-pen-to-square');
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



