const body = document.querySelector("body");

const scrollFunc = (message) => {
    console.log(message)
}

const throttleFunc = (func, delay) => {
    let lastTimeCalled = 0;
    return function(...args) {
        const now = Date.now();
        if(now - lastTimeCalled >= delay){
            lastTimeCalled = now;
            func(args)
        }
    }
}

const OptimizedThrottle = throttleFunc(scrollFunc, 1500);

body.addEventListener("click", () => OptimizedThrottle("Scrolling called"));