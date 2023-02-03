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
            } );
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
//if the bars icon is clicked, go to menu.html
            document.addEventListener('DOMContentLoaded', function() {
                // This is for the Menu Icon
                    const menuIcon = document.querySelector('.hamburg-menu');
                    
                    if (menuIcon.style.color !== "white") {
                        // return to previous page
                        console.log('menu color is blue');
                        menuIcon.addEventListener('click', function() {
                            window.location.href = history.back();
                            console.log('menu color went back in time');
                        });
                    } else {
                        menuIcon.addEventListener('click', function() {
                            window.location.href = 'menu.html';
                            console.log('menu color is white')
                        });
                    }

                });
                




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