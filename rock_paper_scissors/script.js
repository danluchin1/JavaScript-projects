const buttons = document.querySelectorAll("button");
const answer = document.getElementById("answer");
const yourScore = document.getElementById("yourScore");
const computerScoreEl = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
        answer.textContent = result;
    });
});

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a tie!";
    }else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") 
    ){
        playerScore++;
        yourScore.textContent = playerScore;
        return "You win! " + playerSelection + " beats " + computerSelection;
    }else{
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}