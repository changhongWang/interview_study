function debounce(fn, delay) {
    let timer = null;

    return function(...args) {
        const context = this;
        if (timer) {
            clearTimeout(timer);
            timer = null
        }
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay)
    }
}