
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

var currentYear = new Date().getFullYear(),
    year = document.getElementsByClassName('year')[0];
year.innerHTML = currentYear;
