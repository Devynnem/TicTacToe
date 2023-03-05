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
    whoseTurn.innerHTML = "Tic Tac Toe";
    if (game.currentPlayer === game.player1) {
    whoseTurn.innerHTML =
       `It's 🦦 turn`;
    } else if (game.currentPlayer === game.player2) {
        whoseTurn.innerHTML =
        `It's 🦧 turn`;
    }
}
function checkForDuplicates() {
    // errorMessage.innerText = "";
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
        boxInputs.addEventListener("click", checkForDuplicates);
        boxInputs.style.cursor = 'pointer';
        whoseTurn.innerHTML = "Tic Tac Toe"
        errorMessage.innerText = "";
    }
}

function oneWins() {
   var updatedScore = game.player1.increaseWins += 1;
    whoseTurn.innerHTML = "🦦 wins!"
    otterWins.innerText = `${updatedScore} wins`
    pageLoad();
    game.resetGameBoard();
}

function twoWins() {
    var updatedScore = game.player2.increaseWins += 1;
     whoseTurn.innerHTML = "🦧 wins!"
     orangutanWins.innerText = `${updatedScore} wins`
     pageLoad();
     game.resetGameBoard();
     
 }

 function checkForDraw() {
    if (game.selectedBoxes.length === 9) {
    whoseTurn.innerText = "Looks like a draw. Let's try again!"
    pageLoad(); 
    game.resetGameBoard();
    }
}

 function pageLoad() {
    setTimeout(clearBoard, 3000);
    errorMessage.innerText = "New game in 3..2..1..!";
    boxInputs.removeEventListener("click", checkForDuplicates)
    boxInputs.style.cursor = 'not-allowed';
 }