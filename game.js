class Game {
  constructor() {
    this.player1 = new Player (1, "🦦", 0);
    this.player2 = new Player (2, "🦧", 0);
    this.selectedBoxes = [];
    this.currentPlayer;
    this.gameCount = 0;
    this.winningRows = [
      ["x1", "x2", "x3"], 
      ["x1", "x4", "x7"], 
      ["x1", "x5", "x9"], 
      ["x2", "x5", "x8"], 
      ["x3", "x5", "x7"], 
      ["x3", "x6", "x9"], 
      ["x4", "x5", "x6"], 
      ["x7", "x8", "x9"]];
  };

  setPlayersTurn() {
    this.gameCount += 1;
    if (this.gameCount % 2 === 0) {
      this.currentPlayer = this.player2;
      } else {
        this.currentPlayer = this.player1;
      };
  };

  changePlayerTurn() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else if (this.currentPlayer === this.player2) {
      this.currentPlayer = this.player1;
    };
  };

  storeSelectedBoxes() {
    var boxChoice = event.target.id;
      this.selectedBoxes.push(boxChoice);
        if (this.currentPlayer === this.player1) {
          this.player1.player1Boxes.push(boxChoice);
        } else if (this.currentPlayer === this.player2) {
          this.player2.player2Boxes.push(boxChoice);
        };        
  };

  checkForWinningRow() {
    for (var i = 0; i < this.winningRows.length; i ++) {
      if (game.player1.player1Boxes.includes(this.winningRows[i][0]) && game.player1.player1Boxes.includes(this.winningRows[i][1]) && game.player1.player1Boxes.includes(this.winningRows[i][2])) {
        whoWins();
      } else if (game.player2.player2Boxes.includes(this.winningRows[i][0]) && game.player2.player2Boxes.includes(this.winningRows[i][1]) && game.player2.player2Boxes.includes(this.winningRows[i][2])) {
        whoWins();
      };
    };
  };
 
  resetGameBoard () {
    this.player1.player1Boxes.length = 0;
    this.player2.player2Boxes.length = 0;
    this.selectedBoxes.length = 0;
  };
};