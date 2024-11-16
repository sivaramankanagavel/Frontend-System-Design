const message = document.getElementById("message");
const countValue = document.getElementById("countValue");

let timeOutId;
let value;
countValue.innerHTML = value;

function startCounter(initialValue) {
    value = initialValue;
    timeOutId = setInterval(() => {
        if(value > 0){
            value--;
            countValue.innerHTML = value;
        }else {
            clearTimeout(timeOutId);
            message.innerHTML = "Take Off"
        }
    }, 1000)
}

function resetCounter() {
    value = 30;
}