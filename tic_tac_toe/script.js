const cells = document.querySelectorAll(".cell");
const result = document.querySelector(".result");
const restart = document.querySelector(".restart");

const winCases = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 5],
    [0, 4, 8],
    [2, 4, 6]
];

let currentPlayer = "X";
result.textContent = `${currentPlayer}'s turn`;

cells.forEach((cell) => {
    cell.addEventListener("click", handleClick);
});

restart.addEventListener("click", () => {
    restartGame();
});

function handleClick(event){
    const cell = event.target;
    if(cell.textContent === ""){
        updateCell(cell);
        if(!checkWinner()){
            currentPlayer = (currentPlayer === "X") ? "O" : "X";
            result.textContent = `${currentPlayer}'s turn`;
        }
        checkDraw();
    }
}

function updateCell(cell){
    cell.textContent = currentPlayer;
}

function checkWinner(){
    for(const winCase of winCases){
        const [a, b, c] = winCase;
        if(cells[a].textContent === currentPlayer &&
            cells[b].textContent === currentPlayer &&
            cells[c].textContent === currentPlayer){
                result.textContent = `${currentPlayer} won!`;
                disableClicks();
                return true;
            }
    }
    return false;
}

function checkDraw(){
    const allFilled = [...cells].every((cell) => cell.textContent !== "");
    if(allFilled){
        result.textContent = "Draw!";
        disableClicks();
        return true;
    }
    return false;
}

function restartGame(){
    for(const cell of cells){
        cell.textContent = "";
    }
    currentPlayer = "X";
    result.textContent = `${currentPlayer}'s turn`;

    cells.forEach((cell) => cell.addEventListener("click", handleClick));
}

function disableClicks(){
    cells.forEach((cell) => cell.removeEventListener("click", handleClick));
}