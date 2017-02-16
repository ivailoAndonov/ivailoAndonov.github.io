window.onscroll = function () { myNav(), myPhoto(), headerHide() };

function myNav() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("nav").className = "nav-white";
        console.log(1);
    } else {
        document.getElementById("nav").className = "nav-transperent";
    }
}

function myPhoto() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        var myPhoto = document.getElementsByClassName("my-photo");
        myPhoto[0].className = "my-photo slideUp";
        console.log(2);
    }
}

function headerHide() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        var hide = document.getElementsByClassName("header-content");
        hide[0].className = "header-content hide";
        console.log(3);

        var moseHide = document.getElementsByClassName('mouse_wrapper');
        moseHide[0].className = "mouse_wrapper hide";
    }else{
        var show = document.getElementsByClassName("header-content");
        show[0].className = "header-content";

        var mouseShow = document.getElementsByClassName("mouse_wrapper");
        mouseShow[0].className = "mouse_wrapper"
    }
 }


var about = document.getElementById('about-me').addEventListener('click', function () {});


console.log(window.innerWidth);
console.log(window.innerHeight);