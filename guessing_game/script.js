'use strict';
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attemps = 0;
let guess;
let running = true;

while(running){
  guess = +prompt(`Guess a number between ${minNum} and ${maxNum}.`);

  if(isNaN(guess) || guess < 1 || guess > 100){
    alert("Please enter a valid number!");
  }else{
    attemps++;
    if(guess < answer){
      alert("TOO LOW! TRY AGAIN!");
    }else if(guess > answer){
      alert("TOO HIGH! TRY AGAIN!");
    }else{
      alert(`CORRECT! It took you ${attemps} attemps!`);
      running = false;
    }
  }
}