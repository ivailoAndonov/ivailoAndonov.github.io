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