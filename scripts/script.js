
window.onscroll = debounceFunction.debounce(function () {

    let scrollerBody = document.body.scrollTop,
        scrollerElement = document.documentElement.scrollTop;

    if (scrollerBody > 10 || scrollerElement > 10) {
        document.getElementById("nav").className = "nav-white";
    } else {
        document.getElementById("nav").className = "nav-transperent";
    }

    if (scrollerBody > 500 || scrollerElement > 500) {
        let myPhoto = document.getElementsByClassName("my-photo");
        myPhoto[0].classList.add("slideUp");
    }
}, 50);


