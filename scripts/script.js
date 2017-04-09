
window.onscroll = debounceFunc.debounce(function () {

    var scrollerBody = document.body.scrollTop,
        scrollerElement = document.documentElement.scrollTop;

    if (scrollerBody > 10 || scrollerElement > 10) {
        document.getElementById("nav").className = "nav-white";
    } else {
        document.getElementById("nav").className = "nav-transperent";
    }

    if (scrollerBody > 450 || scrollerElement > 450) {
        var myPhoto = document.getElementsByClassName("my-photo");
        myPhoto[0].classList.add("slideUp");
    }
}, 50);

var home = document.getElementsByClassName('home')[0];
home.addEventListener('click', function () {
    var toHome = document.getElementsByClassName('header-wrapper')[0];
    smoothScroll.scroll(toHome);
});
var about = document.getElementsByClassName('about')[0];
about.addEventListener('click', function () {
    var toAbout = document.getElementsByClassName('about-me-wrapper')[0];
    smoothScroll.scroll(toAbout);
});
var skills = document.getElementsByClassName('skills')[0];
skills.addEventListener('click', function (){
    var toSkills = document.getElementsByClassName('skills-wrapper')[0];
    smoothScroll.scroll(toSkills);
});
var contacts = document.getElementsByClassName('contacts')[0];
contacts.addEventListener('click', function (){
    var toContacts = document.getElementsByClassName('contacts-wrapper')[0];
    smoothScroll.scroll(toContacts);
});

var currentYear = new Date().getFullYear(),
    year = document.getElementsByClassName('year')[0];
year.innerHTML = currentYear;
