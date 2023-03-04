// A main.js file that contains all DOM related JavaScript
// Query Selectors
var boxInputs = document.getElementById("gameBoard");
var whoseTurn = document.querySelector("h1");
var errorMessage = document.getElementById("errorMessage")
var otterWins = document.getElementById("otterWins");
var orangutanWins = document.getElementById("orangutanWins")
// Global Variables
var game = new Game()
// Event Listeners
window.addEventListener('load', loadNewGame)
boxInputs.addEventListener("click", checkForDuplicates)

// Functions


// game.checkForWinningRow();

function loadNewGame() {
    game.setPlayersTurn();
    updateToken()

}
function updateToken() {
    if (game.currentPlayer === game.player1) {
    whoseTurn.innerHTML +=
    `It's 🦧 turn`
    } else {
        whoseTurn.innerHTML +=
        `It's 🦦 turn`
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
    event.target.innerHTML += game.currentPlayer.token;
    game.storeSelectedBoxes();
    game.changePlayerTurn();  
    game.checkForWinningRow();
  
    
}

function exploreAnotherOption() {
    errorMessage.innerText = "That box has already been selected, try again!"
    !game.changePlayerTurn()
}

function oneWins() {
   var updatedScore = game.player1.increaseWins += 1;
    otterWins.innerText = `${updatedScore} wins`
    // game.player.playerWins();
    game.resetGameBoard();
    
}
function twoWins() {
    var updatedScore = game.player2.increaseWins += 1;
     orangutanWins.innerText = `${updatedScore} wins`
    //  game.player.playerWins();
     game.resetGameBoard();
     
 }