const frontLine = document.querySelector(".front-line");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let index = 1;

function update(){
    const percentageWidth = ((index - 1) / (circles.length - 1) ) * 100;
    frontLine.style.width = `${percentageWidth}%`;

    circles.forEach((circle, i) => {
        if(i < index){
            circle.classList.add("active");
        }else{
            circle.classList.remove("active");
        }
    });

    prev.disabled = index === 1;
    next.disabled = index === circles.length;
}

next.addEventListener("click", () => {
    if(index < circles.length){
        index++;
        update();
    }
});

prev.addEventListener("click", () => {
    if(index > 1){
        index--;
        update();
    }
});