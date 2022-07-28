const displayMessage = document.querySelector('#displayMessage');

const boxes = document.querySelectorAll('.box');

const reset = document.querySelector('#resetButton');

const winningConditions = 
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
];

let gameBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "O";
let playing = false;

startGame();

function startGame(){
    boxes.forEach(box => box.addEventListener("click", boxClicked));
    reset.addEventListener("click", resetGame);
    displayMessage.textContent = `${currentPlayer}'s turn!`;
    playing = true;
}

function boxClicked(){
    const boxIndex = this.getAttribute("id");

    if(gameBoard[boxIndex] != "" || !playing){
        return;
    }

    updateBox(this, boxIndex);
    checkWin();
}

function updateBox(box, index){
    gameBoard[index] = currentPlayer;
    box.textContent = currentPlayer;
}

function switchPlayer(){
}

function checkWin(){
}


function resetGame(){
    boxes.forEach(box => {
        return ""
    });

    for(let i=0; i<gameBoard.length; i++){
        gameBoard[i] = ""
    }
    
    displayMessage.textContent = `${currentPlayer}'s turn!`;



}