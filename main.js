// Global Variables
var game = new Game();

// Query Selectors
var boxInputs = document.getElementById("gameBoard");
var whoseTurn = document.querySelector("h1");
var errorMessage = document.getElementById("errorMessage");
var otterWins = document.getElementById("otterWins");
var orangutanWins = document.getElementById("orangutanWins");
var box = document.getElementsByClassName("box");

// Event Listeners
window.addEventListener('load', loadNewGame);
boxInputs.addEventListener("click", checkForDuplicates);

// Functions
function loadNewGame() {
  game.setPlayersTurn();
  updateTitleToken();
};

function updateTitleToken() {
  if (game.currentPlayer === game.player1) {
  whoseTurn.innerHTML =
    `It's 🦦 turn`;
    } else if (game.currentPlayer === game.player2) {
      whoseTurn.innerHTML =
      `It's 🦧 turn`;
    };
};

function checkForDuplicates() {
  errorMessage.innerText = "";
  if (game.selectedBoxes.includes(event.target.id)) {
    exploreAnotherOption();
    } else {
      checkSelectedBox();
    };
};

function checkSelectedBox() {
  game.storeSelectedBoxes();
  showTokensOnGrid();
  game.changePlayerTurn();  
  updateTitleToken();
  game.checkForWinningRow();
  checkForDraw();
};

function showTokensOnGrid() {
  event.target.innerHTML += game.currentPlayer.token;
};

function exploreAnotherOption() {
  errorMessage.innerText = "That box has already been selected, try again!"
};

function clearBoard() {
  for (var i = 0; i < box.length; i ++) {
    box[i].innerHTML = "";
    boxInputs.addEventListener("click", checkForDuplicates);
    boxInputs.style.cursor = 'pointer';
    whoseTurn.innerHTML = `${game.currentPlayer.token} goes first!`;
    errorMessage.innerText = "";
  };
};

function whoWins() {
  !game.changePlayerTurn();
  game.currentPlayer.playerWins();
  updateWinCountOnPage();
  pageLoad();
  game.resetGameBoard();
  game.changePlayerTurn();
};

function updateWinCountOnPage() {
  var updatedScore = game.currentPlayer.increaseWins;
    whoseTurn.innerHTML = `${game.currentPlayer.token} wins!`;
      if (game.currentPlayer === game.player1) {
      otterWins.innerText = `${updatedScore} wins`;
      } else if (game.currentPlayer === game.player2) {
        orangutanWins.innerText = `${updatedScore} wins`;
      };
};

function checkForDraw() {
  if (game.selectedBoxes.length === 9) {
  whoseTurn.innerText = "Looks like a draw. Let's try again!";
  pageLoad(); 
  game.resetGameBoard();
  };
};

function pageLoad() {
  setTimeout(clearBoard, 3000);
  errorMessage.innerText = "New game in 3..2..1..!";
  boxInputs.removeEventListener("click", checkForDuplicates);
  boxInputs.style.cursor = 'not-allowed';
};