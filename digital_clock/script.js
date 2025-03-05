const hours = document.querySelector(".hours-container");
const minutes = document.querySelector(".minutes-container");
const seconds = document.querySelector(".seconds-container");

function update(){
    const now = new Date();

    seconds.innerText = String(now.getSeconds()).padStart(2, "0");
    minutes.innerText = String(now.getMinutes()).padStart(2, "0");
    hours.innerText = String(now.getHours()).padStart(2, "0");
}

update();

setInterval(update, 1000);