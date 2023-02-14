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
      window.location.href = 'settings.html';
    });
  
  
    // End Arrow Left Rebuild
}


function privacyPage() {
  rebuildArrow();
  
  const settingsItems = document.getElementById("settings-options");
  const logoutBtn = document.getElementById("logout-btn")
  settingsItems.remove();
  logoutBtn.remove();

  // // Arrow Left Rebuild to curb event listener bubbling
  //   const headerArrow = document.querySelector(".header-arrow");
  //   headerArrow.classList.remove("header-arrow");
  //   headerArrow.classList.add("header-arrow-page");

  //   headerArrow.remove();
  //   

  //   const headerArrowPage = document.createElement("span");
  //   headerArrowPage.classList.add("fa-stack", "header-arrow-page");
  //   headerArrowPage.style.display = "flex";
  //   const arrowCircle = document.createElement("i");
  //   arrowCircle.classList.add("fa-regular", "fa-circle", "fa-stack-2x");
  //   arrowCircle.style.color = "#000000";
  //   arrowCircle.style.fontSize = "3em";
  //   arrowCircle.style.marginTop = "-0.15em";
  //   const arrowLeft = document.createElement("i");
  //   arrowLeft.classList.add("fa-solid", "fa-arrow-left", "fa-stack-1x");
  //   arrowLeft.style.color = "#000000";
  //   arrowLeft.style.fontSize = "2em";
  //   arrowLeft.style.marginLeft = "0.12em";

  //   headerArrowPage.append(arrowCircle, arrowLeft);
  //   document.querySelector(".page-list-header").insertAdjacentElement("afterbegin",headerArrowPage);
  // // End Arrow Left Rebuild

  
  // const backArrow = document.querySelector('.header-arrow-page');
  // backArrow.addEventListener('click', function() {
  //   window.location.href = 'settings.html';
  // });


  const btmMenu = document.querySelector(".app-footer");

  const settingsTxt = document.getElementById("settings-header");
  settingsTxt.textContent = "PRIVACY POLICY"

  const privacyDiv = document.createElement("div");
    privacyDiv.classList.add("privacy-div");

  const p1 = document.createElement("p");
    p1.classList.add("proxima-bold");
    p1Txt = document.createTextNode("App Visitors");
    p1.append(p1Txt);
  const p2 = document.createElement("p");
    p2.classList.add("proxima-regular","privacy-para");
    p2Txt = document.createTextNode(`Like most app operators, RideRaters collects non-personally-identifying information of the sort that web
            browsers and servers typically make available, such as the browser type, language preference, referring site,
            and the date and time of each visitor request. RideRaters’s purpose in collecting non-personally identifying
            information is to better understand how RideRaters’s visitors use its app. From time to time, RideRaters may
            release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the
            usage of its app.`);
    p2.append(p2Txt);        
  const p3 = document.createElement("p");
    p3.classList.add("proxima-regular","privacy-para");
    p3Txt = document.createTextNode(`RideRaters also collects potentially personally-identifying information like Internet Protocol (IP) addresses
            for logged
            in users and for users of the RideRaters API. RideRaters only discloses logged in user IP addresses under the
            same
            circumstances that it uses and discloses personally-identifying information as described below.`);
    p3.append(p3Txt);
  const p4 = document.createElement("p");
    p4.classList.add("proxima-bold");
    p4Txt = document.createTextNode("Gathering of Personally-Identifying Information");
    p4.append(p4Txt);
  const p5 = document.createElement("p");
    p5.classList.add("proxima-regular","privacy-para");
    p5Txt = document.createTextNode(`Certain visitors to RideRaters’s apps choose to interact with RideRaters in ways that require RideRaters to
            gather
            personally-identifying information. The amount and type of information that RideRaters gathers depends on the
            nature of
            the interaction. For example, we ask visitors who sign up for a RideRaters account to provide a username and
            email
            address.In each case, RideRaters collects such information only insofar as is necessary or appropriate to
            fulfill the
            purpose of the visitor’s interaction with RideRaters. RideRaters does not disclose personally-identifying
            information
            other than as described below. And visitors can always refuse to supply personally-identifying information, with
            the
            caveat that it may prevent them from engaging in certain app-related activities.`);
    p5.append(p5Txt);
  const p6 = document.createElement("p");
    p6.classList.add("proxima-bold");
    p6Txt = document.createTextNode("Aggregated Statistics");
    p6.append(p6Txt);
  const p7 = document.createElement("p");
    p7.classList.add("proxima-regular","privacy-para");
    p7Txt = document.createTextNode(`RideRaters may collect statistics about the behavior of visitors to its apps. RideRaters may display this
            information
            publicly or provide it to others. However, RideRaters does not disclose personally-identifying information other
            than as
            described below.`)
    p7.append(p7Txt);
  const p8 = document.createElement("p");
    p8.classList.add("proxima-bold");
    p8Txt = document.createTextNode("Protection of Certain Personally-Identifying Information");
    p8.append(p8Txt);
  const p9 = document.createElement("p");
    p9.classList.add("proxima-regular","privacy-para");
    p9Txt = document.createTextNode(`RideRaters discloses potentially personally-identifying and personally-identifying information only to those of
            its
            employees, contractors and affiliated organizations that (i) need to know that information in order to process
            it on
            RideRaters's behalf or to provide services available at RideRaters's apps, and (ii) that have agreed not to
            disclose it
            to others. Some of those employees, contractors and affiliated organizations may be located outside of your home
            country; by using RideRaters's apps, you consent to the transfer of such information to them. RideRaters will
            not rent
            or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its
            employees, contractors and affiliated organizations, as described above, RideRaters discloses potentially
            personally-identifying and personally-identifying information only in response to a subpoena, court order or
            other
            governmental request, or when RideRaters believes in good faith that disclosure is reasonably necessary to
            protect the
            property or rights of RideRaters, third parties or the public at large. If you are a registered user of an
            RideRaters
            app and have supplied your email address, RideRaters may occasionally send you an email to tell you about new
            features,
            solicit your feedback, or just keep you up to date with what's going on with RideRaters and our products.If you
            send us
            a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to
            publish it in
            order to help us clarify or respond to your request or to help us support other users. RideRaters takes all
            measures
            reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially
            personally-identifying and personally-identifying information.`);
    p9.append(p9Txt);
  const p10 = document.createElement("p");
    p10.classList.add("proxima-bold");
    p10Txt = document.createTextNode("Cookies");
    p10.append(p10Txt);
  const p11 = document.createElement("p");
    p11.classList.add("proxima-regular","privacy-para");
    p11Txt = document.createTextNode(`A cookie is a string of information that an app stores on a visitor's device, and that the visitor's browser
            provides to
            the app each time the visitor returns. RideRaters uses cookies to help RideRaters identify and track visitors,
            their
            usage of RideRaters app, and their app access preferences. RideRaters visitors who do not wish to have cookies
            placed on
            their devices should set their browsers to refuse cookies before using RideRaters's apps, with the drawback that
            certain
            features of RideRaters's apps may not function properly without the aid of cookies.`);
    p11.append(p11Txt);
  const p12 = document.createElement("p");
    p12.classList.add("proxima-bold");
    p12Txt = document.createTextNode("Business Transfers");
    p12.append(p12Txt);
  const p13 = document.createElement("p");
    p13.classList.add("proxima-regular","privacy-para");
    p13Txt = document.createTextNode(`If RideRaters, or substantially all of its assets were acquired, or in the unlikely event that RideRaters goes
            out of
            business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a
            third
            party. You acknowledge that such transfers may occur, and that any acquirer of RideRaters may continue to use
            your
            personal information as set forth in this policy.`);
    p13.append(p13Txt);
  const p14 = document.createElement("p");
    p14.classList.add("proxima-bold");
    p14Txt = document.createTextNode("Ads");
    p14.append(p14Txt);
  const p15 = document.createElement("p");
    p15.classList.add("proxima-regular","privacy-para");
    p15Txt = document.createTextNode(`Ads appearing on any of our apps may be delivered to users by advertising partners, who may set cookies. These
            cookies
            allow the ad server to recognize your computer each time they send you an online advertisement to compile
            information
            about you or others who use your computer. This information allows ad networks to, among other things, deliver
            targeted
            advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies
            by
            RideRaters and does not cover the use of cookies by any advertisers.`);
    p15.append(p15Txt);
  const p16 = document.createElement("p");
    p16.classList.add("proxima-bold");
    p16Txt = document.createTextNode("Privacy Policy Changes");
    p16.append(p16Txt);
  const p17 = document.createElement("p");
    p17.classList.add("proxima-regular","privacy-para");
    p17Txt = document.createTextNode(`Although most changes are likely to be minor, RideRaters may change its Privacy Policy from time to time, and in
            RideRaters's sole discretion. RideRaters encourages visitors to frequently check this page for any changes to
            its
            Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your
            acceptance
            of such change.`);
    p17.append(p17Txt);

  privacyDiv.append(p1,p2,p3,p4,p5,p6,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17);
  
  document.body.insertBefore(privacyDiv,btmMenu);
}

function aboutPage() {
  rebuildArrow();
  
  const settingsItems = document.getElementById("settings-options");
  const logoutBtn = document.getElementById("logout-btn")
  settingsItems.remove();
  logoutBtn.remove();

  const btmMenu = document.querySelector(".app-footer");
  const pageHeader = document.querySelector(".page-list-header");
  pageHeader.classList.add("about-header")

  const settingsTxt = document.getElementById("settings-header");
  settingsTxt.textContent = "ABOUT"

  const aboutImgDiv = document.createElement("div");
      aboutImgDiv.classList.add("lg-logo-wt");
    const aboutLogo = document.createElement("img");
      aboutLogo.setAttribute("src","/media/imgs/logo-bg-wt.png");
      aboutLogo.setAttribute("alt","Ride Raters Logo");
      aboutLogo.setAttribute("width","80%");
  aboutImgDiv.append(aboutLogo);

  const aboutTxtDiv = document.createElement("div");
      aboutTxtDiv.classList.add("about-div");
    const aboutP1 = document.createElement("p");
      aboutP1.classList.add("about-txt","proxima-regular");
    const aboutTxt1 = document.createTextNode(`RideRaters is a theme park attraction rating app that incorporates user and site generated data created by a team of
              passionate developers. Our focus is accessibility and personalization. The idea behind the design for the app is to make
              sure that our users feel comfortable and confident when deciding on what theme park and attractions would best suit
              their visit. With accessible, fun, and family friendly content in mind, we designed our app to look as aesthetically
              pleasing as possible.`);
      aboutP1.append(aboutTxt1);
    const aboutP2 = document.createElement("p");
      aboutP2.classList.add("about-txt","proxima-regular");
    const aboutTxt2 = document.createTextNode(`For questions, concerns, or compliments, please contact us at `);
    const aboutEmail = document.createElement("a");
      aboutEmail.setAttribute("href","mailto:team@rideraters.com");
    const aboutEmailTxt = document.createTextNode("team@rideraters.com");
    const aboutTxt3 = document.createTextNode(` or leave
              feedback in our feedback page.`);
      aboutP2.append(aboutTxt2,aboutEmail,aboutEmailTxt,aboutTxt3);
  aboutTxtDiv.append(aboutP1,aboutP2);

  const followDiv = document.createElement("div");
      followDiv.classList.add("about-links");
    const followP = document.createElement("p");
      followP.classList.add("proxima-bold","follow-txt");
    const followTxt = document.createTextNode("Follow Us");
      followP.append(followTxt);
    followDiv.append(followP);
    const iconsDiv = document.createElement("div");
      iconsDiv.classList.add("about-icons");
    const instaIcon = document.createElement("i");
      instaIcon.classList.add("fa-brands","fa-instagram");
    const twitIcon = document.createElement("i");
      twitIcon.classList.add("fa-brands","fa-square-twitter");
    const facebookIcon = document.createElement("i");
      facebookIcon.classList.add("fa-brands","fa-square-facebook");
    iconsDiv.append(instaIcon,twitIcon,facebookIcon);
  followDiv.append(iconsDiv);

  pageHeader.insertAdjacentElement("afterend",aboutImgDiv);
  aboutImgDiv.insertAdjacentElement("afterend",aboutTxtDiv);
  aboutTxtDiv.insertAdjacentElement("afterend",followDiv);
  

}

function termsPage() {
  rebuildArrow(); 

  const settingsItems = document.getElementById("settings-options");
  const logoutBtn = document.getElementById("logout-btn")
  settingsItems.remove();
  logoutBtn.remove();

  const btmMenu = document.querySelector(".app-footer");
  const pageHeader = document.querySelector(".page-list-header");
  pageHeader.classList.add("about-header")

  const settingsTxt = document.getElementById("settings-header");
  settingsTxt.textContent = "TERMS OF USE"

  const termsDiv = document.createElement("div");
    termsDiv.classList.add("terms-para");
  const termsPara = document.createElement("p");
    termsPara.classList.add("proxima-regular");
  const termsTxt = document.createTextNode(`By using RideRaters you agree to our Privacy Policy and to not use any content found within this app without written authorization, as well as maintaining inclusivity and appropriateness within images and texts uploaded or submitted unto our app. All content submitted onto RideRaters is the responsibility of the user only, and RideRaters maintains ownership of all content submitted onto the RideRaters app.`);
    termsPara.append(termsTxt);
  termsDiv.append(termsPara);

  pageHeader.insertAdjacentElement("afterend",termsDiv);

}

//Event Listener that lets user select stars in the rating system
function starListener() {
  document.addEventListener("DOMContentLoaded", function () {
                let stars = document.querySelectorAll(".fa-star");
                console.log(stars);
                stars.forEach(function (star) {
                    star.addEventListener("click", function () {
                        switch (star.id) {
                            case "one-star":
                                // console.log("one-star was clicked");
                                star.classList.add("stars-checked")
                                stars[1].classList.remove("stars-checked");
                                stars[2].classList.remove("stars-checked");
                                stars[3].classList.remove("stars-checked");
                                stars[4].classList.remove("stars-checked");
                                break;
                            case "two-star":
                                // console.log("two-star was clicked");
                                stars[0].classList.add("stars-checked")
                                stars[1].classList.add("stars-checked")
                                stars[2].classList.remove("stars-checked");
                                stars[3].classList.remove("stars-checked");
                                stars[4].classList.remove("stars-checked");
                                break;
                            case "three-star":
                                // console.log("three-star was clicked");
                                stars[0].classList.add("stars-checked")
                                stars[1].classList.add("stars-checked")
                                stars[2].classList.add("stars-checked")
                                stars[3].classList.remove("stars-checked");
                                stars[4].classList.remove("stars-checked");
                                break;
                            case "four-star":
                                // console.log("four-star was clicked");
                                stars[0].classList.add("stars-checked")
                                stars[1].classList.add("stars-checked")
                                stars[2].classList.add("stars-checked")
                                stars[3].classList.add("stars-checked");
                                stars[4].classList.remove("stars-checked");
                                break;
                            case "five-star":
                                // console.log("five-star was clicked");
                                stars[0].classList.add("stars-checked")
                                stars[1].classList.add("stars-checked")
                                stars[2].classList.add("stars-checked")
                                stars[3].classList.add("stars-checked");
                                stars[4].classList.add("stars-checked");
                                break;
                        }
                    });
                });
            });
}

function feedbackPage() {
  rebuildArrow();
  // const pageHead = document.getElementsByTagName("head");
  // const jsScript = document.createElement("script");
  // pageHead.append(jsScript);

  const settingsItems = document.getElementById("settings-options");
  const logoutBtn = document.getElementById("logout-btn")
  settingsItems.remove();
  logoutBtn.remove();

  const btmMenu = document.querySelector(".app-footer");
  const pageHeader = document.querySelector(".page-list-header");
  pageHeader.classList.add("feedback-header")

  const settingsTxt = document.getElementById("settings-header");
  settingsTxt.textContent = "GIVE FEEDBACK";

  const feedbackTxtDiv = document.createElement("div");
    feedbackTxtDiv.classList.add("feedback-txt-rating");
    feedbackTxtDiv.id ="feedback-txt-rating";
  const feedbackPara = document.createElement("p");
    feedbackPara.classList.add("feedback-txt","proxima-regular");
  const feedbackTxt = document.createTextNode(`Our team at RideRaters seeks to create the most enjoyable and accurate theme park app. We welcome your feedback both positive and negative!`);
  
  feedbackPara.append(feedbackTxt);
  feedbackTxtDiv.append(feedbackPara);

  const feedbackFormDiv = document.createElement("div");
  feedbackFormDiv.classList.add("feedback-form-div");
  feedbackFormDiv.id = "form-submit";

  const feedbackForm = document.createElement("form");
    feedbackForm.classList.add("feedback-area");
  const starRatingDiv = document.createElement("div");
    starRatingDiv.classList.add("feedback-stars");
  const starOne = document.createElement("i");
    starOne.classList.add("fa-solid","fa-star");
    starOne.id = "one-star";
  const starTwo = document.createElement("i");
    starTwo.classList.add("fa-solid","fa-star");
    starTwo.id = "two-star";
  const starThree = document.createElement("i");
    starThree.classList.add("fa-solid","fa-star");
    starThree.id = "three-star";
  const starFour = document.createElement("i");
    starFour.classList.add("fa-solid","fa-star");
    starFour.id = "four-star";
  const starFive = document.createElement("i");
    starFive.classList.add("fa-solid","fa-star");
    starFive.id = "five-star";
  starRatingDiv.append(starOne, starTwo, starThree, starFour, starFive);

  const feedbackLabel = document.createElement("label");
    feedbackLabel.setAttribute("for", "feedback");
  const feedbackLabelTxt = document.createTextNode("FEEDBACK");
    feedbackLabel.append(feedbackLabelTxt);
  const feedbackTxtArea = document.createElement("textarea");
    feedbackTxtArea.id = "feedback";
    feedbackTxtArea.setAttribute("name","feedback");
  const submitBtnDiv = document.createElement("div");
    submitBtnDiv.classList.add("submit-btn-div");
  const submitBtn = document.createElement("button");
    submitBtn.classList.add("submit-btn")
    submitBtn.setAttribute("onclick","feedbackThanks()")
  const submitBtnTxt = document.createTextNode("SUBMIT");
  submitBtn.append(submitBtnTxt);
  submitBtnDiv.append(submitBtn);

  feedbackFormDiv.append(feedbackForm)
  feedbackForm.append(starRatingDiv,feedbackLabel,feedbackTxtArea,submitBtnDiv);


  pageHeader.insertAdjacentElement("afterend",feedbackTxtDiv);
  feedbackTxtDiv.insertAdjacentElement("afterend",feedbackFormDiv);

  // starListener();
  function starListener() {
                let stars = document.querySelectorAll(".fa-star");
                console.log(stars);
                stars.forEach(function (star) {
                    star.addEventListener("click", function () {
                        switch (star.id) {
                            case "one-star":
                                // console.log("one-star was clicked");
                                star.classList.add("stars-checked")
                                stars[1].classList.remove("stars-checked");
                                stars[2].classList.remove("stars-checked");
                                stars[3].classList.remove("stars-checked");
                                stars[4].classList.remove("stars-checked");
                                break;
                            case "two-star":
                                // console.log("two-star was clicked");
                                stars[0].classList.add("stars-checked")
                                stars[1].classList.add("stars-checked")
                                stars[2].classList.remove("stars-checked");
                                stars[3].classList.remove("stars-checked");
                                stars[4].classList.remove("stars-checked");
                                break;
                            case "three-star":
                                // console.log("three-star was clicked");
                                stars[0].classList.add("stars-checked")
                                stars[1].classList.add("stars-checked")
                                stars[2].classList.add("stars-checked")
                                stars[3].classList.remove("stars-checked");
                                stars[4].classList.remove("stars-checked");
                                break;
                            case "four-star":
                                // console.log("four-star was clicked");
                                stars[0].classList.add("stars-checked")
                                stars[1].classList.add("stars-checked")
                                stars[2].classList.add("stars-checked")
                                stars[3].classList.add("stars-checked");
                                stars[4].classList.remove("stars-checked");
                                break;
                            case "five-star":
                                // console.log("five-star was clicked");
                                stars[0].classList.add("stars-checked")
                                stars[1].classList.add("stars-checked")
                                stars[2].classList.add("stars-checked")
                                stars[3].classList.add("stars-checked");
                                stars[4].classList.add("stars-checked");
                                break;
                        }
                    });
                });
            document.removeEventListener("click",starListener);
            }
  document.addEventListener("click",starListener);
}

function contactPage() {
  
  // const pageHead = document.getElementsByTagName("head");
  // const jsScript = document.createElement("script");
  // pageHead.append(jsScript);

  rebuildArrow();

  const settingsItems = document.getElementById("settings-options");
  const logoutBtn = document.getElementById("logout-btn")
  settingsItems.remove();
  logoutBtn.remove();

  const btmMenu = document.querySelector(".app-footer");
  const pageHeader = document.querySelector(".page-list-header");
  pageHeader.classList.add("contact-header")

  const settingsTxt = document.getElementById("settings-header");
  settingsTxt.textContent = "CONTACT US";

  const contactIcon = document.createElement("i");
    contactIcon.classList.add("fa-regular","fa-message","lg-header-icon");
    contactIcon.id = "contact-icon";
  settingsTxt.insertAdjacentElement("afterend",contactIcon);
  
  //create three two input fields and one textarea
  const contactFormDiv = document.createElement("div");
    contactFormDiv.classList.add("contact-form-div","contact-form");
  const contactForm = document.createElement("form");
    contactForm.classList.add("contact-form");
    contactForm.id = "contact-form";
    // contactForm.setAttribute("action","");
  const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for","fname");
  const nameLabelTxt = document.createTextNode("FULL NAME");
    nameLabel.append(nameLabelTxt);
  const nameInput = document.createElement("input");
    nameInput.setAttribute("type","text");
    nameInput.setAttribute("id","fname");
    nameInput.setAttribute("name","fname");
  const emailLabel = document.createElement("label");
  const emailLabelTxt = document.createTextNode("EMAIL ADDRESS");
    emailLabel.append(emailLabelTxt);
  const emailInput = document.createElement("input");
    emailInput.setAttribute("type","email");
    emailInput.setAttribute("id","email");
    emailInput.setAttribute("name","email");
  const messageLabel = document.createElement("label");
  const messageLabelTxt = document.createTextNode("MESSAGE");
    messageLabel.append(messageLabelTxt);
  const messageTxtArea = document.createElement("textarea");
    messageTxtArea.setAttribute("id","message");
    messageTxtArea.setAttribute("name","message");
    messageTxtArea.setAttribute("rows","");
 
  const contactBtnDiv = document.createElement("div");
    contactBtnDiv.classList.add("contact-btn-div");
    contactBtnDiv.style.bottom = "1em";
  const contactBtn = document.createElement("button");
  contactBtn.setAttribute("onclick","contactThanks()");
    // contactBtn.setAttribute("type","submit");
    contactBtn.classList.add("contact-btn-lg");
    contactBtn.style.width = "100%";
    contactBtn.style.paddingLeft = "0em";
    contactBtn.style.paddingRight = "0em";
  const contactBtnTxt = document.createTextNode("SEND");
    contactBtn.append(contactBtnTxt);
    contactBtnDiv.append(contactBtn);
  contactForm.append(nameLabel,nameInput,emailLabel,emailInput,messageLabel,messageTxtArea);
  contactForm.append(contactBtnDiv);
  contactFormDiv.append(contactForm);
  btmMenu.insertAdjacentElement("beforebegin",contactFormDiv);

  //this page should not submit the form
  //  contactForm.addEventListener("submit",function(e){
  //   e.preventDefault();
  // });
    



}

//Function that take the user to the Thank You page
function contactThanks() {
    // rebuildArrow();
    
    const form = document.getElementById("contact-form");
    const contactIcon = document.getElementById("contact-icon");
    

    contactIcon.remove();
    form.remove();
    

    const thanksDiv = document.createElement("div");
    thanksDiv.classList.add("thanks-div");
    const thanksH2 = document.createElement("h2");
    thanksH2.classList.add("thanks-txt", "proxima-bold");
    const thanksH2Txt1 = document.createTextNode("THANK YOU FOR");
    const thanksBr = document.createElement("br");
    const thanksH2Txt2 = document.createTextNode("CONTACTING US!")
    thanksH2.append(thanksH2Txt1, thanksBr, thanksH2Txt2);
    thanksDiv.append(thanksH2);
    const thanksP = document.createElement("p");
    thanksP.classList.add("thanks-txt", "proxima-bold");
    const thanksPtxt = document.createTextNode("We Will Reach Out As Soon As We Can, Thank You!");
    thanksP.append(thanksPtxt);
    const thanksIcon = document.createElement("i");
    thanksIcon.classList.add("fa-solid", "fa-thumbs-up");
    const btmMenu = document.querySelector(".app-footer");
    const returnBtnDiv = document.createElement('div');
    returnBtnDiv.classList.add("thanks-btn-div");
    returnBtnDiv.style.bottom = "1em"
    const returnBtn = document.createElement('button');
    // on click take user to settings.html
    returnBtn.setAttribute("onclick","window.location.href='settings.html'");
    returnBtn.classList.add("contact-btn-lg", "thanks-btn");
    returnBtn.textContent = "RETURN"
    returnBtnDiv.append(returnBtn);
    document.body.insertBefore(returnBtnDiv, btmMenu);
    document.body.insertBefore(thanksDiv, returnBtnDiv);
    thanksDiv.append(thanksP);
    thanksDiv.append(thanksIcon);
    console.log("Submit clicked");
}

//Function that take the user to the Thank You page
function feedbackThanks() {
  // rebuildArrow();
  const form = document.getElementById("form-submit");
  const feedbackTxt = document.getElementById("feedback-txt-rating");
  const feedbackHeader = document.querySelector(".feedback-header");
      feedbackHeader.classList.remove("feedback-header");
  form.remove();
  feedbackTxt.remove();

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
  returnBtn.setAttribute("onclick","window.location.href='settings.html'");
  returnBtn.textContent = "RETURN"
  returnBtnDiv.append(returnBtn);
  document.body.insertBefore(returnBtnDiv, btmMenu);
  document.body.insertBefore(thanksDiv, returnBtnDiv);
  thanksDiv.append(thanksP);
  thanksDiv.append(thanksIcon);
}


  

