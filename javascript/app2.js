window.addEventListener("scroll", handleScroll, false);

// navbar and image fading for landing screen
var navBar = document.getElementsByClassName("masterhead")[0];
var landingPageFader = document.getElementsByClassName("portitemcont")[0];

// background image and title text fade in
var homePage = document.getElementsByClassName("portitemcont")[0];
var homeElements = homePage.children;

// buttons to fade in when we scroll to them
var viewProjects = document.getElementsByClassName("portintrotitle")[0];
var footIcons = document.getElementsByClassName("footicons")[0];

// images to fade in on scroll
var phoneImages = document.getElementsByClassName("phoneimage");
var macImages = document.getElementsByClassName("macimage");
var padImages = document.getElementsByClassName("padimage");
var problemImage = document.getElementsByClassName("problemsimg")[0];
var solutionImage = document.getElementsByClassName("solutionsimg")[0];

// resume button class used as additional buttons
var viewResume = document.getElementsByClassName("resumebtn");

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

    for (var i = 0; i < viewResume.length; i++) {
        if (window.scrollY + window.innerHeight > viewResume[i].offsetTop + viewResume[i].clientHeight / 4) {
            viewResume[i].classList.add("visible");
        }
    }

    for (var i = 0; i < footIcons.children.length; i++) {
        if (window.scrollY + window.innerHeight > footIcons.children[i].children[0].offsetTop + footIcons.children[i].children[0].clientHeight) {
            footIcons.classList.add("visible");
        }
    }

    for (var i = 0; i < phoneImages.length; i++) {
        if (window.scrollY + window.innerHeight > phoneImages[i].offsetTop + phoneImages[i].clientHeight / 4) {
            phoneImages[i].classList.add("visible");
        }
    }

    for (var i = 0; i < macImages.length; i++) {
        if (window.scrollY + window.innerHeight > macImages[i].offsetTop + macImages[i].clientHeight / 4) {
            macImages[i].classList.add("visible");
        }
    }

    for (var i = 0; i < padImages.length; i++) {
        if (window.scrollY + window.innerHeight > padImages[i].offsetTop + padImages[i].clientHeight / 4) {
            padImages[i].classList.add("visible");
        }
    }

    if (window.scrollY + window.innerHeight > problemImage.offsetTop + problemImage.clientHeight / 4) {
        problemImage.classList.add("visible");
    }

    if (window.scrollY + window.innerHeight > solutionImage.offsetTop + solutionImage.clientHeight / 4) {
        solutionImage.classList.add("visible");
    }

}

window.onload = function() {
    document.body.style.opacity = 1;
}

function visitLink(location) {
    document.body.style.opacity = 0;
    setTimeout(function(){ window.location = location; }, 1000);
}
