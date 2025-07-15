window.addEventListener("scroll", handleScroll, false);

// navbar and image fading for landing screen
var navBar = document.getElementsByClassName("masterhead")[0];
var landingPageFader = document.getElementById("homecont");

// background image and title text fade in
var homePage = document.getElementById("homecont");
var homeElements = homePage.children;

// children of <body> to display after loading screen finishes
var portTitle = document.getElementById("homeporttitle");
var portButtons = document.getElementById("homeportbtns");
var homePort = document.getElementById("homeport");
var homeQuote = document.getElementById("homequote");
var homeAbout = document.getElementById("homeabout1");
var skillTitle = document.getElementById("skillstitle1");
var skillSubTitle = document.getElementById("skillstitle2");
var skills = document.getElementById("skillscontainer");
var otherHomeAbout = document.getElementById("homeabout2");
var footer = document.getElementsByClassName("masterfoot")[0];

// buttons to fade in when we scroll to them
var viewProjects = document.getElementById("introname");
var portItems = document.getElementsByClassName("portitem");
var sendMessage = document.getElementById("homequotebtn");
var skillItems = document.getElementsByClassName("skillitem");
var viewResume = document.getElementsByClassName("resumebtn")[0];
var footIcons = document.getElementsByClassName("footicons")[0];

// nav button auto detect which page section
var navButtons = document.getElementsByClassName("menu2")[0].children;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async function() {

  document.body.style.opacity = 1;

  await sleep(1000);

    navButtons[0].style.color = "";
    navButtons[1].style.color = "";
    navButtons[2].style.color = "";

    for (var i = 0; i < 3; i++) {
        homeElements[i].style.transition = "opacity 1s";
    }

    navBar.style.opacity = 1;
    await sleep(500);
    for (var i = 0; i < 3; i++) {
        homeElements[i].style.opacity = 1;
        await sleep(500);
    }

}
function handleScroll(event) {
    if (window.scrollY > viewProjects.offsetTop) {
        navBar.classList.add("scrolled");
    }
    else {
         navBar.classList.remove("scrolled");
    }

    if (window.scrollY < window.innerHeight) {
        var opacity = (3 / 4) * window.scrollY / landingPageFader.clientHeight;
        landingPageFader.style.backgroundColor = "rgba(255, 255, 255, " + opacity + ")";

        var offset = (3 / 4) * window.scrollY;
        homePage.style.paddingTop = offset + "px";
    }

    for (var i = 0; i < portItems.length; i++) {
        if (window.scrollY + window.innerHeight > portItems[i].offsetTop + portItems[i].clientHeight / 4) {
            portItems[i].classList.add("visible");
        }
    }

    if (window.scrollY + window.innerHeight > sendMessage.offsetTop + sendMessage.clientHeight) {
        sendMessage.classList.add("visible");
    }

    for (var i = 0; i < skillItems.length; i++) {
        if (window.scrollY + window.innerHeight > skillItems[i].offsetTop + skillItems[i].clientHeight / 4) {
            skillItems[i].classList.add("visible");
        }
    }

    if (window.scrollY + window.innerHeight > viewResume.offsetTop + viewResume.clientHeight) {
        viewResume.classList.add("visible");
    }

    for (var i = 0; i < footIcons.children.length; i++) {
        if (window.scrollY + window.innerHeight > footIcons.children[i].children[0].offsetTop + footIcons.children[i].children[0].clientHeight) {
            footIcons.classList.add("visible");
        }
    }

    if (window.scrollY + 120 >= portTitle.offsetTop) {
        navButtons[0].style.color = "#4195F5";
        navButtons[1].style.color = "";
        navButtons[2].style.color = "";
    }
    else {
        navButtons[0].style.color = "";
    }
    if (window.scrollY + 120 >= homeAbout.offsetTop) {
        navButtons[0].style.color = "";
        navButtons[1].style.color = "#4195F5";
        navButtons[2].style.color = "";
    }
    if (window.scrollY + 120 >= otherHomeAbout.offsetTop) {
        navButtons[0].style.color = "";
        navButtons[1].style.color = "";
        navButtons[2].style.color = "#4195F5";
    }
}

function visitLink(location) {
    document.body.style.opacity = 0;
    setTimeout(function(){ window.location = location; }, 1000);
}
