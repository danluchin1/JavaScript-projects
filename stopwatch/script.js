const display = document.querySelector(".display");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const start = document.querySelector(".start");

let timer;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

start.addEventListener("click", () => {
    if(!isRunning){
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
    }
});

stop.addEventListener("click", () => {
    if(isRunning){
        isRunning = false;
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
    }
});

reset.addEventListener("click", () => {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
});

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let secons = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    secons = String(secons).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${secons}:${milliseconds}`;
}