const display = document.querySelector(".display");
const numbers = document.querySelectorAll("button");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        const buttonValue = number.textContent;
        if(buttonValue === "C"){
            clearDisplay();
        }else if(buttonValue === "="){
            calculate();
        }else{
            appendValue(buttonValue);
            update();
        }
    });
});

function appendValue(value){
    display.value += value;
}

function update(){
    display.scrollLeft = display.scrollWidth;
}

function clearDisplay(){
    display.value = "";
}

function tokenize(expression){
    const regex = /\d+(\.\d+)?|[+\-*/]/g;
    return expression.match(regex);
}

function calculate(){
    display.value = eval(display.value);
}