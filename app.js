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
    [2, 4, 6],
];

let gameBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "O";
let playing = false;

startGame();

function startGame(){
    boxes.forEach(box => box.addEventListener("click", boxClicked));
    reset.addEventListener("click", resetGame);
    displayMessage.textContent = `${currentPlayer}'s Turn!`;
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
    currentPlayer = (currentPlayer === "O") ? "X" : "O";
    displayMessage.textContent = `${currentPlayer}'s Turn!`;
}

function checkWin(){
    let won = false;

    for(let i = 0; i < winningConditions.length; i++){
        const condition = winningConditions[i];
        const boxA = gameBoard[condition[0]];
        const boxB = gameBoard[condition[1]];
        const boxC = gameBoard[condition[2]];

        if(boxA === "" || boxB === "" || boxC === ""){
            continue;
        }
        if(boxA == boxB && boxB == boxC){
            won = true;
            break;
        }
    }
        if(won){
            displayMessage.textContent = `${currentPlayer} Wins!`;
            playing = false;
        }
        else if(!gameBoard.includes("")){
            displayMessage.textContent = `Draw!`;
            playing = false;
        }
        else{
            switchPlayer();
        }
}

function resetGame(){
    currentPlayer = "O";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    boxes.forEach(box => {
        box.innerHTML = ""
    });
    displayMessage.textContent = `${currentPlayer}'s Turn!`;
    playing = true;
}




