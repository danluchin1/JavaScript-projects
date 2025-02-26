const percentage = document.querySelector(".percentage");
const bar = document.querySelector(".loading_bar_front");

let index = 0;

updateBar();

function updateBar(){
    percentage.innerText = index + "%";
    bar.style.width = index + "%";

    index++;

    if(index < 101){
        setTimeout(updateBar, 20);
    }
}