const searchInput = document.getElementById("searchBox");
const resultField = document.getElementById("result");

function searchApiCall(query) {
    resultField.innerHTML += `<br>${query}`;
}

const optimizedFunc = debounce(searchApiCall, 1000);

searchInput.addEventListener("input", (event) => {
    optimizedFunc(event.target.value);
})

function debounce(func, delay) {
    let timeOutId;

    return function(...args) {
        if(timeOutId) clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
            func(args)
        }, delay)
    }
}