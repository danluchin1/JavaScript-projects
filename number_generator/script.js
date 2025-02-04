const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 1;
const max = 6;
let random1;
let random2;
let random3;

myButton.onclick = function(){
    random1 = Math.floor(Math.random() * max) + min;
    random2 = Math.floor(Math.random() * max) + min;
    random3 = Math.floor(Math.random() * max) + min;
    label1.textContent = random1;
    label2.textContent = random2;
    label3.textContent = random3;
}