const debounce = (functionElement, delay = 1000) => {

    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            functionElement.apply(null, args);
        }, delay);
    };
};