const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;

function guessNumber() {
  const textBox = document.getElementById("textBox");
  const result = document.getElementById("result");

  let userGuess = parseInt(textBox.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    result.textContent = `Please enter a valid number between ${minNum} and ${maxNum}!`;
  } else {
    attempts++;
    if (userGuess < answer) {
      result.textContent = "TOO LOW! TRY AGAIN!";
    } else if (userGuess > answer) {
      result.textContent = "TOO HIGH! TRY AGAIN!";
    } else {
      result.textContent = `CORRECT! It took you ${attempts} attempts!`;
    }
  }
}