
var debounceFunc = (function () {

    function debounce(func, wait) {
        var timeout = 0;
        return function () {
            var contex = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                func.apply(contex, args);
            }, wait);
        }
    }

    return { debounce: debounce };
}());
