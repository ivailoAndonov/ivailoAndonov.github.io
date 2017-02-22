var debounceFunction = (function () {

    function debounce(func, wait) {
        let timeout = 0;
        return function () {
            let contex = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                func.apply(contex, args);
            }, wait);
        }
    }
    return { debounce: debounce };
} ());

function smoothScroll(target) {
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { 
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
