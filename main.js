// A main.js file that contains all DOM related JavaScript
// Query Selectors
var boxInputs = document.getElementById("gameBoard");
var whoseTurn = document.querySelector("h1");
// Global Variables
var game = new Game()
// Event Listeners
boxInputs.addEventListener("click", checkSelectedBox)

// Functions

function checkSelectedBox() {
    game.storeSelectedBoxes();
}