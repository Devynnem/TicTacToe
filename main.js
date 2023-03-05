// A main.js file that contains all DOM related JavaScript
// Query Selectors
var boxInputs = document.getElementById("gameBoard");
var whoseTurn = document.querySelector("h1");
var errorMessage = document.getElementById("errorMessage")
var otterWins = document.getElementById("otterWins");
var orangutanWins = document.getElementById("orangutanWins")
var box = document.getElementsByClassName("box");
// Global Variables
var game = new Game()
// Event Listeners
window.addEventListener('load', loadNewGame)
boxInputs.addEventListener("click", checkForDuplicates)

// Functions


// game.checkForWinningRow();

function loadNewGame() {
    game.setPlayersTurn();
    updateTitleToken();

}
function updateTitleToken() {
    if (game.currentPlayer === game.player1) {
    whoseTurn.innerHTML =
       `It's 🦦 turn`;
    } else if (game.currentPlayer === game.player2) {
        whoseTurn.innerHTML =
        `It's 🦧 turn`;
    }
}
function checkForDuplicates() {
    errorMessage.innerText = "";
    if (game.selectedBoxes.includes(event.target.id)) {
        exploreAnotherOption();
    } else {
        checkSelectedBox()
    }
  }

function checkSelectedBox() {
    game.storeSelectedBoxes();
    showTokensOnGrid()
    game.changePlayerTurn();  
    updateTitleToken();
    checkForDraw();
    game.checkForWinningRow();
}

function showTokensOnGrid() {
    event.target.innerHTML += game.currentPlayer.token;
}

function exploreAnotherOption() {
    errorMessage.innerText = "That box has already been selected, try again!"
    
}
function clearBoard() {
    for (var i = 0; i < box.length; i ++) {
        box[i].innerHTML = "";
    }
}

function oneWins() {
   var updatedScore = game.player1.increaseWins += 1;
    otterWins.innerText = `${updatedScore} wins`
    clearBoard();
    game.resetGameBoard();
}

function twoWins() {
    var updatedScore = game.player2.increaseWins += 1;
     orangutanWins.innerText = `${updatedScore} wins`
    clearBoard();
     game.resetGameBoard();
     
 }

 function checkForDraw() {
    if (game.selectedBoxes.length === 9) {
    errorMessage.innerText = "Looks like a draw. Let's try again!"
    clearBoard();
    game.resetGameBoard();
    }
}

 // setTimeout(resetGameBoard, 3000);